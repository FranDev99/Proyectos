import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

  return (
    <div className="p-5 mt-6 bg-white shadow-sm rounded-lg border border-gray-200 space-y-4">
      <h2 className="font-black text-2xl text-teal-700">Totales y Propina:</h2>
      <p className="text-lg font-medium text-gray-700">
        Subtotal a Pagar: <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
      </p>
      <p className="text-lg font-medium text-gray-700">
        Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span>
      </p>
      <p className="text-lg font-medium text-gray-700">
        Total a Pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span>
      </p>
      <button
        className="w-full bg-teal-600 p-3 text-white font-bold uppercase rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </div>
  );
}
