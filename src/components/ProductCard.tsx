import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Trash, Edit } from "lucide-react";
import type { Product } from "@/api/products/get-products";
import { Button } from "./ui/button";

export default function ProductCard({
  product,
  onEdit,
  onDelete,
}: {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const discounted =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <Card className="rounded-xl shadow-sm p-3 hover:shadow-md transition">
      <div>
        <div className="flex justify-between items-center">
          <Badge className="bg-green-900 text-white">
            {product.discountPercentage}% OFF
          </Badge>
          <Button variant="outline" className="mt-2">
            <Heart size={18} />
          </Button>
        </div>
        <img
          src={product.thumbnail}
          className="w-full h-72 rounded-lg object-contain"
        />

        <Button variant="outline">
          <ShoppingBag size={18} />
        </Button>
      </div>

      <CardContent className="pt-4">
        <p className="text-gray-600 text-sm">{product.brand}</p>
        <h3 className="text-lg mt-1">{product.title}</h3>
        <div className="flex gap-2 items-center mt-2">
          <span className="text-green-700 font-bold">
            {discounted.toFixed(2)} kr.
          </span>
          <span className="text-gray-500 line-through">
            {product.price} kr.
          </span>
        </div>
        <p className="text-gray-500 text-xs mt-1">
          Goodie-pris gælder Goodie-medlemmer på en valgt dag
        </p>

        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-2 mt-3">
              {["S", "M", "L"].map((size) => (
                <span key={size} className="text-xs border px-2 py-1 rounded">
                  {size}
                </span>
              ))}
              <span className="text-xs text-gray-500">+2</span>
            </div>
            <p className="text-gray-500 text-xs mt-2">Flere farver</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onEdit}>
              <Edit size={18} />
            </Button>
            <Button variant="outline" onClick={onDelete}>
              <Trash size={18} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
