type CalorieDisplayProps = {
  calories: number;
  text: string;
};

export default function CalorieDisplay({ calories, text }: CalorieDisplayProps) {
  return (
    <div className="flex flex-col items-center bg-orange-500 text-white p-4 rounded-lg shadow-md w-32">
      <span className="font-black text-5xl">{calories}</span>
      <p className="text-lg font-semibold">{text}</p>
    </div>
  );
}
