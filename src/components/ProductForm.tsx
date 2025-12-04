import type { FormEvent } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/api/products/get-products";

interface ProductFormProps {
  product?: Product;
  onSubmit: (formData: ProductFormData) => void;
  onCancel: () => void;
}

export interface ProductFormData {
  title: string;
  brand: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  category: string;
  thumbnail: string;
}

export default function ProductForm({
  product,
  onSubmit,
  onCancel,
}: ProductFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const productData: ProductFormData = {
      title: formData.get("title") as string,
      brand: formData.get("brand") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      discountPercentage: Number(formData.get("discountPercentage")),
      stock: Number(formData.get("stock")),
      category: formData.get("category") as string,
      thumbnail: formData.get("thumbnail") as string,
    };

    onSubmit(productData);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {product ? "Edit Product" : "Add New Product"}
        </h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title *
            </label>
            <input
              id="title"
              name="title"
              type="text"
              defaultValue={product?.title}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="brand" className="block text-sm font-medium mb-1">
              Brand *
            </label>
            <input
              id="brand"
              name="brand"
              type="text"
              defaultValue={product?.brand}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={product?.description}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-sm font-medium mb-1">
                Price (kr.) *
              </label>
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                defaultValue={product?.price}
                required
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="discount"
                className="block text-sm font-medium mb-1"
              >
                Discount (%) *
              </label>
              <input
                id="discount"
                name="discountPercentage"
                type="number"
                step="0.01"
                defaultValue={product?.discountPercentage}
                required
                min="0"
                max="100"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="stock" className="block text-sm font-medium mb-1">
                Stock *
              </label>
              <input
                id="stock"
                name="stock"
                type="number"
                defaultValue={product?.stock}
                required
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium mb-1"
              >
                Category *
              </label>
              <input
                id="category"
                name="category"
                type="text"
                defaultValue={product?.category}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium mb-1"
            >
              Thumbnail URL *
            </label>
            <input
              id="thumbnail"
              name="thumbnail"
              type="url"
              defaultValue={product?.thumbnail}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">{product ? "Update" : "Add"} Product</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
