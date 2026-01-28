import "./App.css";
import PracticeSummaryCard from "./components/PracticeSummaryCard/PracticeSummaryCard";
import { mockPractices } from "./data/mockPractices";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Practice Dashboard</h1>
        <p>Showing {mockPractices.length} practices</p>
      </header>

      <div className="cards-container">
        {mockPractices.map((practice) => (
          <PracticeSummaryCard key={practice.id} practice={practice} />
        ))}
      </div>
    </div>
  );
}

export default App;
