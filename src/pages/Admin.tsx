import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Edit, Trash2, Eye, EyeOff, Search, Package, AlertCircle, CheckCircle, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
  category: string;
  brand: string | null;
  price: number;
  original_price: number | null;
  discount_percent: number;
  rating: number;
  reviews_count: number;
  stock: number;
  is_featured: boolean;
  is_trending: boolean;
  created_at: string;
}

const CATEGORIES = [
  "tower-speakers",
  "home-theatre-systems",
  "dth-receivers",
  "car-stereo-systems",
  "power-strips",
  "speakers",
  "audio-amplifiers",
  "hot-selling-products",
];

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [stats, setStats] = useState({ total: 0, active: 0, lowStock: 0 });
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image_url: "",
    category: "tower-speakers",
    brand: "",
    price: "",
    original_price: "",
    discount_percent: "0",
    rating: "0",
    reviews_count: "0",
    stock: "100",
    is_featured: false,
    is_trending: false,
  });

  useEffect(() => {
    // Check if user is admin (you can add admin role check here)
    if (!user) {
      navigate("/auth");
      return;
    }
    fetchProducts();
  }, [user, navigate]);

  useEffect(() => {
    if (searchQuery || categoryFilter !== "all" || statusFilter !== "all") {
      let filtered = products;

      if (searchQuery) {
        filtered = filtered.filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (categoryFilter !== "all") {
        filtered = filtered.filter((product) => product.category === categoryFilter);
      }

      if (statusFilter === "featured") {
        filtered = filtered.filter((product) => product.is_featured);
      } else if (statusFilter === "trending") {
        filtered = filtered.filter((product) => product.is_trending);
      } else if (statusFilter === "low-stock") {
        filtered = filtered.filter((product) => product.stock <= 10);
      }

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, categoryFilter, statusFilter, products]);

  useEffect(() => {
    const active = products.filter((p) => p.stock > 0).length;
    const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 10).length;
    setStats({ total: products.length, active, lowStock });
  }, [products]);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
      setFilteredProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      name: formData.name,
      description: formData.description || null,
      image_url: formData.image_url || null,
      category: formData.category,
      brand: formData.brand || null,
      price: parseFloat(formData.price),
      original_price: formData.original_price ? parseFloat(formData.original_price) : null,
      discount_percent: parseInt(formData.discount_percent) || 0,
      rating: parseFloat(formData.rating) || 0,
      reviews_count: parseInt(formData.reviews_count) || 0,
      stock: parseInt(formData.stock) || 100,
      is_featured: formData.is_featured,
      is_trending: formData.is_trending,
    };

    try {
      if (editingProduct) {
        const { error } = await supabase
          .from("products")
          .update(productData)
          .eq("id", editingProduct.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("products").insert([productData]);

        if (error) throw error;
      }

      toast.success(editingProduct ? "Product updated successfully" : "Product created successfully");
      setIsSheetOpen(false);
      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Error saving product. Please try again.");
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description || "",
      image_url: product.image_url || "",
      category: product.category,
      brand: product.brand || "",
      price: product.price.toString(),
      original_price: product.original_price?.toString() || "",
      discount_percent: product.discount_percent.toString(),
      rating: product.rating.toString(),
      reviews_count: product.reviews_count.toString(),
      stock: product.stock.toString(),
      is_featured: product.is_featured,
      is_trending: product.is_trending,
    });
    setIsSheetOpen(true);
  };

  const handleDelete = async (id: string) => {
    setProductToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!productToDelete) return;

    try {
      const { error } = await supabase.from("products").delete().eq("id", productToDelete);
      if (error) throw error;
      toast.success("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product");
    } finally {
      setDeleteDialogOpen(false);
      setProductToDelete(null);
    }
  };

  const toggleFeatured = async (product: Product) => {
    try {
      const { error } = await supabase
        .from("products")
        .update({ is_featured: !product.is_featured })
        .eq("id", product.id);
      if (error) throw error;
      toast.success(`Product ${!product.is_featured ? "featured" : "unfeatured"}`);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product");
    }
  };

  const toggleTrending = async (product: Product) => {
    try {
      const { error } = await supabase
        .from("products")
        .update({ is_trending: !product.is_trending })
        .eq("id", product.id);
      if (error) throw error;
      toast.success(`Product ${!product.is_trending ? "marked as trending" : "unmarked from trending"}`);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      image_url: "",
      category: "tower-speakers",
      brand: "",
      price: "",
      original_price: "",
      discount_percent: "0",
      rating: "0",
      reviews_count: "0",
      stock: "100",
      is_featured: false,
      is_trending: false,
    });
    setEditingProduct(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Compact Header with Stats */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-1">Product Management</h1>
            <p className="text-sm text-zinc-400">Manage your product catalog and inventory</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5">
              <div className="text-xs text-zinc-500 mb-0.5">Total Products</div>
              <div className="text-lg font-semibold text-white">{stats.total}</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5">
              <div className="text-xs text-zinc-500 mb-0.5">Active</div>
              <div className="text-lg font-semibold text-emerald-400">{stats.active}</div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5">
              <div className="text-xs text-zinc-500 mb-0.5">Low Stock</div>
              <div className="text-lg font-semibold text-amber-400">{stats.lowStock}</div>
            </div>
          </div>
        </div>

        {/* Control Bar */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-9 bg-zinc-900 border-zinc-800 text-sm"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px] h-9 bg-zinc-900 border-zinc-800 text-sm">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-800">
              <SelectItem value="all">All Categories</SelectItem>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[160px] h-9 bg-zinc-900 border-zinc-800 text-sm">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-800">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="low-stock">Low Stock</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            onClick={() => { resetForm(); setIsSheetOpen(true); }} 
            className="h-9 gap-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </div>

        {/* Professional Table */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-0 z-10 bg-zinc-900 border-b border-zinc-800">
                <tr>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-zinc-400">Product</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-zinc-400">Category</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-zinc-400">Price</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-zinc-400">Stock</th>
                  <th className="px-4 py-2.5 text-left text-xs font-medium text-zinc-400">Visibility</th>
                  <th className="px-4 py-2.5 text-right text-xs font-medium text-zinc-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-zinc-850 transition-colors">
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-3">
                        {product.image_url && (
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-10 h-10 object-contain bg-black rounded border border-zinc-800"
                          />
                        )}
                        <div className="min-w-0">
                          <p className="font-medium text-white text-sm truncate">{product.name}</p>
                          <p className="text-xs text-zinc-500 truncate">{product.brand || "—"}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-sm text-zinc-400">
                      {product.category.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                    </td>
                    <td className="px-4 py-2.5 text-sm font-medium text-white">
                      {product.price !== null ? `₹${product.price.toFixed(0)}` : '—'}
                    </td>
                    <td className="px-4 py-2.5 text-sm">
                      <span className={product.stock <= 10 ? "text-amber-400 font-medium" : "text-zinc-400"}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex gap-1.5">
                        {product.is_featured && (
                          <span className="inline-flex px-2 py-0.5 text-xs bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                            Featured
                          </span>
                        )}
                        {product.is_trending && (
                          <span className="inline-flex px-2 py-0.5 text-xs bg-zinc-800 text-zinc-300 rounded border border-zinc-700">
                            Trending
                          </span>
                        )}
                        {!product.is_featured && !product.is_trending && (
                          <span className="text-xs text-zinc-600">—</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFeatured(product)}
                          className="h-7 w-7 p-0 hover:bg-zinc-800"
                          title={product.is_featured ? "Unfeature" : "Feature"}
                        >
                          {product.is_featured ? <Eye className="w-3.5 h-3.5 text-blue-400" /> : <EyeOff className="w-3.5 h-3.5 text-zinc-600" />}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(product)}
                          className="h-7 w-7 p-0 hover:bg-zinc-800"
                          title="Edit"
                        >
                          <Edit className="w-3.5 h-3.5 text-zinc-400" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(product.id)}
                          className="h-7 w-7 p-0 hover:bg-zinc-800"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-red-400" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
              <p className="text-zinc-500 text-sm">No products found</p>
            </div>
          )}
        </div>
      </main>

      {/* Side Panel for Editing */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-[500px] bg-zinc-900 border-zinc-800 overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-white text-lg">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </SheetTitle>
          </SheetHeader>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Basic Info */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                <Package className="w-4 h-4" />
                Basic Information
              </h3>
              <div>
                <label className="text-xs text-zinc-400 mb-1.5 block">Product Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black border-zinc-800 h-9 text-sm"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400 mb-1.5 block">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-black border-zinc-800 min-h-[80px] text-sm"
                  placeholder="Product description"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-zinc-400 mb-1.5 block">Category *</label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger className="bg-black border-zinc-800 h-9 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs text-zinc-400 mb-1.5 block">Brand</label>
                  <Input
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="bg-black border-zinc-800 h-9 text-sm"
                    placeholder="Brand name"
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-3 pt-3 border-t border-zinc-800">
              <h3 className="text-sm font-medium text-zinc-300">Pricing</h3>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-zinc-400 mb-1.5 block">Price *</label>
                  <Input
                    required
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="bg-black border-zinc-800 h-9 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 mb-1.5 block">Original</label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.original_price}
                    onChange={(e) => setFormData({ ...formData, original_price: e.target.value })}
                    className="bg-black border-zinc-800 h-9 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 mb-1.5 block">Discount %</label>
                  <Input
                    type="number"
                    value={formData.discount_percent}
                    onChange={(e) => setFormData({ ...formData, discount_percent: e.target.value })}
                    className="bg-black border-zinc-800 h-9 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Inventory */}
            <div className="space-y-3 pt-3 border-t border-zinc-800">
              <h3 className="text-sm font-medium text-zinc-300">Inventory & Reviews</h3>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-zinc-400 mb-1.5 block">Stock</label>
                  <Input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="bg-black border-zinc-800 h-9 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 mb-1.5 block">Rating</label>
                  <Input
                    type="number"
                    step="0.1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    className="bg-black border-zinc-800 h-9 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 mb-1.5 block">Reviews</label>
                  <Input
                    type="number"
                    value={formData.reviews_count}
                    onChange={(e) => setFormData({ ...formData, reviews_count: e.target.value })}
                    className="bg-black border-zinc-800 h-9 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Visibility */}
            <div className="space-y-3 pt-3 border-t border-zinc-800">
              <h3 className="text-sm font-medium text-zinc-300">Visibility Settings</h3>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between py-2 px-3 bg-black rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-sm text-white">Featured Product</div>
                      <div className="text-xs text-zinc-500">Show in featured section</div>
                    </div>
                  </div>
                  <Switch
                    checked={formData.is_featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                  />
                </div>
                <div className="flex items-center justify-between py-2 px-3 bg-black rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-sm text-white">Trending Product</div>
                      <div className="text-xs text-zinc-500">Mark as trending</div>
                    </div>
                  </div>
                  <Switch
                    checked={formData.is_trending}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_trending: checked })}
                  />
                </div>
              </div>
            </div>

            {/* Media */}
            <div className="space-y-3 pt-3 border-t border-zinc-800">
              <h3 className="text-sm font-medium text-zinc-300">Media</h3>
              <div>
                <label className="text-xs text-zinc-400 mb-1.5 block">Image URL</label>
                <Input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  className="bg-black border-zinc-800 h-9 text-sm"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 h-9 bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" />
                {editingProduct ? "Update" : "Create"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsSheetOpen(false);
                  resetForm();
                }}
                className="h-9 border-zinc-800 hover:bg-zinc-800"
              >
                Cancel
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-zinc-900 border-zinc-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Delete Product?</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This action cannot be undone. The product will be permanently removed from your catalog.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-zinc-800 hover:bg-zinc-800">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default Admin;
