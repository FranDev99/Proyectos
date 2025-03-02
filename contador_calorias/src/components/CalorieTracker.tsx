import { useMemo } from "react";
import type { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  const [caloriesConsumed, caloriesBurned, netCalories] = useMemo(() => {
    let consumed = 0;
    let burned = 0;

    activities.forEach((activity) => {
      if (activity.category === 1) {
        consumed += activity.calories;
      } else if (activity.category === 2) {
        burned += activity.calories;
      }
    });

    return [consumed, burned, consumed - burned];
  }, [activities]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Resumen de Calorías
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-5 ">
        <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
        <CalorieDisplay calories={caloriesBurned} text="Quemadas" />
        <CalorieDisplay calories={netCalories} text="Diferencia" />
      </div>
    </div>
  );
}
