import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from "lucide-react";

type Product = {
  id: number;
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const discounted =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <Card className="rounded-xl shadow-sm p-3 hover:shadow-md transition">
      <div className="relative">
        <Badge className="absolute left-3 top-3 bg-green-900 text-white">
          {product.discountPercentage}% OFF
        </Badge>
        <button className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100">
          <Heart size={18} />
        </button>
        <img
          src={product.thumbnail}
          className="w-full h-72 object-cover rounded-lg"
        />

        <button className="absolute bottom-3 right-3 p-2 bg-white rounded-md border hover:bg-gray-100">
          <ShoppingBag size={18} />
        </button>
      </div>

      <CardContent className="pt-4">
        <p className="text-gray-600 text-sm">{product.brand}</p>
        <h3 className="text-lg font-semibold mt-1">{product.title}</h3>
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
        <div className="flex gap-2 mt-3">
          {["S", "M", "L"].map((s) => (
            <span key={s} className="text-xs border px-2 py-1 rounded">
              {s}
            </span>
          ))}
          <span className="text-xs text-gray-500">+2</span>
        </div>
        <p className="text-gray-500 text-xs mt-2">Flere farver</p>
      </CardContent>
    </Card>
  );
}
