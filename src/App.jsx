import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto">
        <Dashboard />
      </main>

    </div>
  );
}

export default App;
