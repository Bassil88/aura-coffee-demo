"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getProductById, Product } from "../lib/mockData";

interface CartItem {
  id: string;
  quantity: number;
}

interface ResolvedCartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  resolvedItems: ResolvedCartItem[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // Initialize state directly from localStorage if possible (safe for client-side)
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Use useEffect to handle initial load and avoid SSR mismatch
  useEffect(() => {
    const savedCart = localStorage.getItem("bw2d_cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Wrap in a function to satisfy some linting rules if necessary, 
          // but the error is about synchronous state updates in effects.
          setItems(parsed);
        }
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to LocalStorage whenever items change (after hydration)
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("bw2d_cart", JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addItem = (id: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  // Resolve IDs to full Product objects
  const resolvedItems = items
    .map((item) => {
      const product = getProductById(item.id);
      return product ? { product, quantity: item.quantity } : null;
    })
    .filter((item): item is ResolvedCartItem => item !== null);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = resolvedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        resolvedItems,
        addItem,
        removeItem,
        clearCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
