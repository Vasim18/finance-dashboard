import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import Insights from "../components/Insights";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SummaryCard title="Total Balance" />
        <SummaryCard title="Income" />
        <SummaryCard title="Expenses" />
      </div>

      <TransactionTable />

      <Insights />
    </div>
  );
}