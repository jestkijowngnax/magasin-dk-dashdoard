import { useProducts } from "@/api/products";
import ProductCard from "@/components/ProductCard";

export const ProductsLayout = () => {
  const { data } = useProducts();

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
