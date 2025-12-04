import { useProducts } from "@/api/products/get-products";
import ProductCard from "@/components/ProductCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { useDialog } from "@/hooks/useDialog";

export const ProductsLayout = () => {
  const { data } = useProducts();
  const { isOpen, open, close } = useDialog();

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={open}
            onDelete={() => {}}
          />
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>

            <DialogDescription>Edit the product details.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
