import { useState } from "react";
import { useProducts, type Product } from "@/api/products/get-products";
import ProductCard from "@/components/ProductCard";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import ProductForm from "@/components/ProductForm";
import { Button } from "@/components/ui/button";
import { useAddProduct } from "@/api/products";
import { toast } from "sonner";
import { useEditProduct } from "@/api/products/edit-product";
import { useDeleteProduct } from "@/api/products/delete-product";
import { Loader } from "@/components/Loader";
export const ProductsLayout = () => {
  const { data, isLoading } = useProducts();

  const [{ isOpen, initialState }, setAddEditProductDialogState] = useState<{
    isOpen: boolean;
    initialState: Product | null;
  }>({
    isOpen: false,
    initialState: null,
  });

  const handleAddProduct = () => {
    setAddEditProductDialogState({
      isOpen: true,
      initialState: null,
    });
  };

  const handleEditProduct = (product: Product) => {
    setAddEditProductDialogState({
      isOpen: true,
      initialState: product,
    });
  };

  const handleCancel = () => {
    setAddEditProductDialogState({
      isOpen: false,
      initialState: null,
    });
  };

  const { mutate: addProduct, isPending: isLoadingAddProduct } = useAddProduct({
    onSuccess: () => {
      toast.success("Product added successfully");
      handleCancel();
    },
    onError: (error) => {
      console.error("Error adding product:", error);
    },
  });

  const { mutate: editProduct, isPending: isLoadingEditProduct } =
    useEditProduct({
      onSuccess: () => {
        toast.success("Product edited successfully");
        handleCancel();
      },
      onError: (error) => {
        console.error("Error editing product:", error);
      },
    });

  const { mutate: deleteProduct } = useDeleteProduct({
    onSuccess: () => {
      toast.success("Product deleted successfully");
      handleCancel();
    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Products</h1>
        <Button onClick={handleAddProduct}>Add Product</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={() => {
              handleEditProduct(product);
            }}
            onDelete={() => deleteProduct({ id: product.id })}
          />
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={handleCancel}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {initialState ? "Edit Product" : "Add Product"}
            </DialogTitle>
          </DialogHeader>
          <ProductForm
            product={initialState}
            loading={isLoadingAddProduct || isLoadingEditProduct}
            onSubmit={(data) => {
              if (!initialState) {
                addProduct(data);
              } else {
                editProduct({ id: initialState.id, product: data });
              }
            }}
            onCancel={handleCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
