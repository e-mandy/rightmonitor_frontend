import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Journey from "./pages/Journey";
import Onboarding from "./pages/Onboarding";
import WeeklyReport from "./pages/WeeklyReport";
import Analytics from "./pages/Analytics";
import AtRisk from "./pages/AtRisk";
import { MasterLayout } from "./common/app-shell/MasterLayout";
import { AppShell } from "./common/app-shell/AppShell";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <AppShell>
            <Routes>
              <Route element={<MasterLayout />}>
                <Route element={<MainLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/journey" element={<Journey />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/at-risk" element={<AtRisk />} />
                  <Route path="/weekly-report" element={<WeeklyReport />} />
                  <Route path="/analytics" element={<Analytics />} />
                </Route>
              </Route>
            </Routes>
          </AppShell>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
