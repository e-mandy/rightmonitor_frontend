import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Journey from "./pages/Journey";
import Onboarding from "./pages/Onboarding";
import WeeklyReport from "./pages/WeeklyReport";
import Analytics from "./pages/Analytics";
import AtRisk from "./pages/AtRisk";
import { MasterLayout } from "./common/app-shell/MasterLayout";
import { AppShell } from "./common/app-shell/AppShell";
import {
  getPersonalInfo,
  getDevices,
  getApplications,
  getCredentials,
  getLinkedAccounts,
} from "@keycloak/keycloak-account-ui";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./reduxStore/reducers";
import { useEnvironment } from "@keycloak/keycloak-ui-shared";
import CompanyDetail from "./pages/CompanyDetail";
import ScoreDetailsCard from "./components/at_risk/ScoreDetailsCard";
import Companies from "./pages/Companies";
import UserManagement from "./pages/UserManagement";
import { CompaniesProvider } from "./Providers/CompaniesProvider";
import HealthScoreDetails from "./components/companies/HealthScoreDetails";

function App() {
  const context = useEnvironment();
  const dispatch = useDispatch();

  useEffect(() => {
    getPersonalInfo({ context })
      .then((response) => {
        dispatch(setData({ key: "personalInfo", value: response }));
      })
      .catch(console.error);
    getDevices({ context })
      .then((response) => {
        dispatch(setData({ key: "devices", value: response }));
      })
      .catch(console.error);
    getApplications({ context })
      .then((response) => {
        dispatch(setData({ key: "applications", value: response }));
      })
      .catch(console.error);
    getCredentials({ context })
      .then((response) => {
        dispatch(setData({ key: "credentials", value: response }));
      })
      .catch(console.error);
    getLinkedAccounts(
      { context },
      {
        first: 0,
        max: 0,
        search: "",
        linked: true,
      },
    )
      .then((response) => {
        dispatch(setData({ key: "likedAccounts", value: response }));
      })
      .catch(console.error);
  }, [context, dispatch]);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <AppShell>
            <CompaniesProvider>
              <Routes>
                <Route element={<MasterLayout />}>
                  <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                  />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/companies" element={<Companies />} />
                  <Route path="/journey" element={<Journey />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/at-risk" element={<AtRisk />} />
                  <Route path="/weekly-report" element={<WeeklyReport />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/company-profile" element={<CompanyDetail />} />
                  <Route
                    path="/company-profile/:company_id/health/details"
                    element={<HealthScoreDetails />}
                  />
                  <Route path="/user-management" element={<UserManagement />} />
                </Route>
              </Routes>
            </CompaniesProvider>

            <ScoreDetailsCard />
          </AppShell>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
