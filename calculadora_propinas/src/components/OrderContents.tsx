import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div className="p-5 bg-white shadow-sm rounded-lg border border-gray-200">
      <h2 className="font-black text-2xl text-teal-700">Consumo</h2>

      <div className="space-y-4 mt-6">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-4 last:border-b"
          >
            <div>
              <p className="text-lg font-medium text-gray-700">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-semibold text-gray-600">
                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              className="bg-red-500 hover:bg-red-700 transition-colors h-8 w-8 rounded-full text-white font-bold"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
