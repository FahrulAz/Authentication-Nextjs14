import { getProductByUser } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const ProductTable = async () => {
  const products = await getProductByUser();
  if (!products?.length) return <h1 className="text-2xl">No Product Found</h1>;

  return (
    <table className="w-full bg-white mt-3 ">
      <thead className="border-b border-gray-100">
        <tr className="capitalize">
          <th className="py-3 px-6 text-sm text-left">product name</th>
          <th className="py-3 px-6 text-sm text-left">price</th>
          <th className="py-3 px-6 text-sm text-left">create at</th>
          <th className="py-3 px-6 text-sm text-left">created by</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b border-gray-100">
            <td className="px-6 py-3">{product.name}</td>
            <td className="px-6 py-3">{product.price}</td>
            <td className="px-6 py-3">
              {formatDate(product.createdAt.toString())}
            </td>
            <td className="px-6 py-3">{product.user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
