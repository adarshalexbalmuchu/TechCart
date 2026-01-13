import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: string;
  name: string;
  image_url: string;
  price: number | null;
  original_price: number | null;
  rating: number;
  category: string;
  brand: string | null;
  description: string | null;
  discount_percent: number;
}

interface CompareStore {
  compareProducts: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;
}

export const useCompare = create<CompareStore>()(
  persist(
    (set, get) => ({
      compareProducts: [],
      
      addToCompare: (product) => {
        const { compareProducts } = get();
        
        // Maximum 4 products for comparison
        if (compareProducts.length >= 4) {
          return;
        }
        
        // Check if already in compare
        if (compareProducts.find(p => p.id === product.id)) {
          return;
        }
        
        set({ compareProducts: [...compareProducts, product] });
      },
      
      removeFromCompare: (productId) => {
        set((state) => ({
          compareProducts: state.compareProducts.filter(p => p.id !== productId)
        }));
      },
      
      clearCompare: () => set({ compareProducts: [] }),
      
      isInCompare: (productId) => {
        return get().compareProducts.some(p => p.id === productId);
      },
    }),
    {
      name: 'compare-storage',
    }
  )
);
