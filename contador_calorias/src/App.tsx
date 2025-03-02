import { useReducer, useEffect, useMemo } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activityReducer";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = () => useMemo(() => state.activities.length, [state.activities]);

  return (
    <>
      <header className="bg-green-700 py-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-lg md:text-2xl font-bold text-white uppercase tracking-wide">
            Contador de Calorías
          </h1>
          <button
            className="bg-gray-700 hover:bg-gray-800 transition-colors px-4 py-2 font-bold uppercase text-white rounded-lg text-sm disabled:opacity-50"
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className="bg-green-100 py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="bg-green-100 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <CalorieTracker activities={state.activities} />
        </div>
      </section>

      <section className="p-10 my-10 mx-auto max-w-4xl bg-white shadow-lg rounded-lg">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
