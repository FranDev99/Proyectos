import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Activity } from "../types";
import { categories } from "../data/categories";
import { ActivityActions, ActivityState } from "../reducers/activityReducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
  state: ActivityState;
};

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};

export default function Form({ dispatch, state }: FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState);

  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.find(
        (stateActivity) => stateActivity.id === state.activeId
      );
      if (selectedActivity) setActivity(selectedActivity);
    }
  }, [state.activeId]);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity({
      ...initialState,
      id: uuidv4(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white shadow-md p-8 rounded-lg border border-gray-200">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-semibold text-gray-700">
          Categoría:
        </label>
        <select
          id="category"
          className="border border-gray-300 p-2 rounded-lg w-full bg-white"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-semibold text-gray-700">
          Actividad:
        </label>
        <input
          type="text"
          id="name"
          value={activity.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-semibold text-gray-700">
          Calorías:
        </label>
        <input
          type="number"
          id="calories"
          value={activity.calories}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
          placeholder="Ej. 300 o 500"
        />
      </div>
      <input
        type="submit"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        disabled={!isValidActivity()}
        className="bg-green-700 hover:bg-green-800 transition-colors w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-50 rounded-lg"
      />
    </form>
  );
}
