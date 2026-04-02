import { useState } from "react";
import { useStore } from "../store/useStore";

export default function TransactionTable() {
  const { transactions, role, addTransaction } = useStore();
  const [search, setSearch] = useState("");

  // Filter transactions
  const filteredTransactions = transactions.filter((tx) =>
    `${tx.category} ${tx.type}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Admin add transaction
  const handleAdd = () => {
    const newTx = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: 500,
      category: "Misc",
      type: "expense",
    };

    addTransaction(newTx);
  };

  // Empty state
  if (!transactions.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center transition-colors">
        <p className="text-gray-500 dark:text-gray-300">
          No transactions available
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow transition-colors">
      <h2 className="font-bold mb-3 text-lg dark:text-white">
        Transactions
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search category or type..."
        className="border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-2 mb-3 w-full rounded-md outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Admin Button */}
      {role === "admin" && (
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition"
        >
          Add Transaction
        </button>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left dark:text-gray-200">
          <thead>
            <tr className="border-b dark:border-gray-600">
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Category</th>
              <th className="py-2">Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-2">{tx.date}</td>
                  <td className="py-2">₹{tx.amount}</td>
                  <td className="py-2">{tx.category}</td>
                  <td className="py-2 capitalize">{tx.type}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-500 dark:text-gray-300"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}