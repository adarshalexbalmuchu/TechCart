import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCompare } from "@/hooks/useCompare";
import { useCart } from "@/hooks/useCart";
import { X, ShoppingCart, Star, Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Compare = () => {
  const navigate = useNavigate();
  const { compareProducts, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  const handleAddToCart = (productId: string) => {
    addToCart(productId);
    toast.success("Added to cart!");
  };

  if (compareProducts.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">No Products to Compare</h1>
            <p className="text-muted-foreground mb-8">
              Add products from the listing to compare their features and prices
            </p>
            <Button onClick={() => navigate("/products")} className="bg-primary">
              Browse Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const comparisonRows = [
    { label: "Product", key: "image" },
    { label: "Name", key: "name" },
    { label: "Price", key: "price" },
    { label: "Rating", key: "rating" },
    { label: "Brand", key: "brand" },
    { label: "Discount", key: "discount" },
    { label: "Description", key: "description" },
    { label: "Action", key: "action" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Compare Products</h1>
            <p className="text-muted-foreground">
              {compareProducts.length} product{compareProducts.length !== 1 ? 's' : ''} selected (max 4)
            </p>
          </div>
          <Button
            onClick={clearCompare}
            variant="outline"
            className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            Clear All
          </Button>
        </div>

        {/* Comparison Table */}
        <div className="bg-card rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full">
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={row.key} className={idx % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="p-4 font-semibold text-foreground border-r border-border sticky left-0 bg-card z-10 min-w-[120px]">
                    {row.label}
                  </td>
                  {compareProducts.map((product) => (
                    <td key={product.id} className="p-4 border-r border-border last:border-r-0 min-w-[200px]">
                      {row.key === "image" && (
                        <div className="relative">
                          <button
                            onClick={() => removeFromCompare(product.id)}
                            className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90 transition-colors z-20"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-40 object-contain bg-background rounded-lg cursor-pointer"
                            onClick={() => navigate(`/product/${product.id}`)}
                          />
                        </div>
                      )}
                      {row.key === "name" && (
                        <div
                          className="font-medium text-foreground hover:text-primary cursor-pointer"
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          {product.name}
                        </div>
                      )}
                      {row.key === "price" && (
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-primary">
                            ₹{(product.price || 0).toLocaleString()}
                          </div>
                          {product.original_price && product.original_price > (product.price || 0) && (
                            <div className="text-sm text-muted-foreground line-through">
                              ₹{product.original_price.toLocaleString()}
                            </div>
                          )}
                        </div>
                      )}
                      {row.key === "rating" && (
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? "text-primary fill-primary"
                                    : "text-muted-foreground/30"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {product.rating.toFixed(1)}
                          </span>
                        </div>
                      )}
                      {row.key === "brand" && (
                        <div className="text-foreground">
                          {product.brand || <span className="text-muted-foreground italic">N/A</span>}
                        </div>
                      )}
                      {row.key === "discount" && (
                        <div>
                          {product.discount_percent > 0 ? (
                            <span className="inline-flex items-center gap-1 bg-success/20 text-success px-3 py-1 rounded-full text-sm font-semibold">
                              <Check className="w-4 h-4" />
                              {product.discount_percent}% OFF
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                              <Minus className="w-4 h-4" />
                              No discount
                            </span>
                          )}
                        </div>
                      )}
                      {row.key === "description" && (
                        <div className="text-sm text-muted-foreground line-clamp-3">
                          {product.description || <span className="italic">No description available</span>}
                        </div>
                      )}
                      {row.key === "action" && (
                        <Button
                          onClick={() => handleAddToCart(product.id)}
                          className="w-full bg-primary hover:bg-primary/90"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      )}
                    </td>
                  ))}
                  {/* Empty cells for remaining slots */}
                  {[...Array(4 - compareProducts.length)].map((_, i) => (
                    <td key={`empty-${i}`} className="p-4 border-r border-border last:border-r-0 min-w-[200px]">
                      <div className="h-40 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                        Empty Slot
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            <strong>Tip:</strong> You can add up to 4 products for comparison. Click on the product image or name to view details.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compare;
