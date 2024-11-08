import ProductTable from "@/components/auth/product-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Product List",
};
const ProductPage = () => {
  return (
    <div>
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-screen-md mx-auto py-10">
          <h1 className="text-2xl font-bold">Product List</h1>
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
