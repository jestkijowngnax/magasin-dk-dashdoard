import { useProducts } from "@/api/products";

export const ProductsLayout = () => {
  const { data } = useProducts();

  return (
    <div>
      <h1>Products</h1>
      {data?.products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};
