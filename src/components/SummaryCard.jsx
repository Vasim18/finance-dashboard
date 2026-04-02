import { useStore } from "../store/useStore";

export default function SummaryCard({ title }) {
  const { transactions } = useStore();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  const values = {
    "Total Balance": balance,
    Income: income,
    Expenses: expenses,
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
      <h2 className="text-gray-500 dark:text-gray-300">{title}</h2>
      <p className="text-2xl font-bold mt-2">
        ₹{values[title]?.toLocaleString()}
      </p>
    </div>
  );
}