import { useStore } from "../store/useStore";

export default function Insights() {
  const { transactions } = useStore();

  // calculate expenses only
  const expenses = transactions.filter((tx) => tx.type === "expense");

  // category totals
  const categoryTotals = {};

  expenses.forEach((tx) => {
    categoryTotals[tx.category] =
      (categoryTotals[tx.category] || 0) + tx.amount;
  });

  // find highest spending category
  let highestCategory = "N/A";
  let maxAmount = 0;

  for (const category in categoryTotals) {
    if (categoryTotals[category] > maxAmount) {
      maxAmount = categoryTotals[category];
      highestCategory = category;
    }
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-2">
      <h2 className="font-bold text-lg">Insights</h2>

      <p>💸 Highest spending category: <b>{highestCategory}</b></p>

      <p>
        📊 Total expenses: <b>₹{maxAmount}</b>
      </p>
    </div>
  );
}