import { formatCurrency } from "../helpers";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="w-full flex justify-between items-center p-4 border-2 border-teal-400 rounded-lg bg-white shadow-sm hover:bg-teal-500 hover:text-white transition-colors"
      onClick={() => addItem(item)}
    >
      <p className="text-lg font-medium">{item.name}</p>
      <p className="text-lg font-bold">{formatCurrency(item.price)}</p>
    </button>
  );
}
