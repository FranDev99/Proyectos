import { Dispatch } from "react";
import { Activity } from "../types";
import { categories } from "../data/categories";
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../reducers/activityReducer";

type ActivityListProps = {
  activities: Activity[];
  dispatch: Dispatch<ActivityActions>;
};

export default function ActivityList({ activities, dispatch }: ActivityListProps) {
  const getCategoryName = (category: Activity["category"]) =>
    categories.find((cat) => cat.id === category)?.name || "Desconocido";

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Comida y Actividades</h2>

      {activities.length === 0 ? (
        <p className="text-center my-5 text-gray-600">No hay actividades aún...</p>
      ) : (
        <div className="space-y-5 mt-5">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="p-5 bg-white rounded-lg shadow flex justify-between items-center border border-gray-200"
            >
              <div className="relative">
                <span
                  className={`absolute -top-8 -left-4 px-4 py-1 text-white text-sm font-bold rounded-md ${
                    activity.category === 1 ? "bg-lime-500" : "bg-orange-500"
                  }`}
                >
                  {getCategoryName(activity.category)}
                </span>
                <p className="text-xl font-semibold">{activity.name}</p>
                <p className="text-2xl font-black text-lime-500">
                  {activity.calories} <span className="text-gray-700">Calorías</span>
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => dispatch({ type: "set-activeId", payload: { id: activity.id } })}
                  className="hover:scale-110 transition-transform"
                >
                  <PencilSquareIcon className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={() => dispatch({ type: "delete-activity", payload: { id: activity.id } })}
                  className="hover:scale-110 transition-transform"
                >
                  <XCircleIcon className="h-6 w-6 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
