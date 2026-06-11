"use client";

import { useCart } from "../providers/CartProvider";

interface AddToCartButtonProps {
  productId: string;
  label: string;
  className?: string;
}

export default function AddToCartButton({
  productId,
  label,
  className = "neu-btn-link text-xs font-bold py-2 px-4",
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if button is inside a Link
    e.stopPropagation();
    addItem(productId);
    
    // Simple visual feedback
    const btn = e.currentTarget as HTMLButtonElement;
    const originalText = btn.innerText;
    btn.innerText = "✓";
    btn.style.color = "#22c55e"; // Success green
    
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.color = "";
    }, 1000);
  };

  return (
    <button onClick={handleAdd} className={className}>
      {label}
    </button>
  );
}
