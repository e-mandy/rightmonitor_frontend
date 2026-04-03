import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./features/dashboard/components/Dashboard";
import Journey from "./features/journey/components/Journey";
import Onboarding from "./features/onboarding/components/Onboarding";
import Risk from "./features/risk/components/Risk";
import WeeklyReport from "./features/weekly-report/components/WeeklyReport";
import Analytics from "./features/analytics/components/Analytics";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/at-risk" element={<Risk />} />
              <Route path="/weekly-report" element={<WeeklyReport />} />
              <Route path="/analytics" element={<Analytics />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
