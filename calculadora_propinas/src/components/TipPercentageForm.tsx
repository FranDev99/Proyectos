import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  return (
    <div className="p-4 mt-6 bg-white shadow-sm rounded-lg border border-gray-200">
      <h3 className="font-black text-2xl text-teal-700">Propina:</h3>
      <form className="mt-4 space-y-2">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
              className="h-5 w-5 text-teal-600 focus:ring-teal-500"
            />
            <label htmlFor={tipOption.id} className="text-lg font-medium text-gray-700 cursor-pointer">
              {tipOption.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
