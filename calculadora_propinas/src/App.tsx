import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-500 py-6 shadow-md">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-white">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 bg-white border-gray-200 border shadow-lg rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-700">Menú</h2>
          <div className="space-y-4 mt-6">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center text-gray-500 text-lg">La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
