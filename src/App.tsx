import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Journey from "./pages/Journey";
import Onboarding from "./pages/Onboarding";
import Risk from "./pages/Risk";
import WeeklyReport from "./pages/WeeklyReport";
import Analytics from "./pages/Analytics";

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
