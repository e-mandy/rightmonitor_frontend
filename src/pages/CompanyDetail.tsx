import { useLocation, useNavigate } from "react-router-dom";
import { companies } from "../constants/at_risk.constants";
import { useEffect, useState } from "react";
import Overview from "../components/company_detail/Overview";
import Journey from "./Journey";
import Products from "../components/company_detail/Products";
import Contacts from "../components/auth/Contacts";
import Notes from "../components/company_detail/Notes";

type SectionType = "overview" | "journey" | "products" | "contacts" | "notes";

const CompanyDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<SectionType>("overview");
  const id: null | string = state?.id ?? null;

  const company = id ? companies.find((company) => company.id === id) : null;

  useEffect(() => {
    if (id === null) navigate("/dashboard", { replace: true });
  }, [id, navigate]);
  return (
    <div className="view" id="view-company">
      <div className="co-hero">
        <div className="co-logo" id="co-logo">
          {"AA"}
        </div>
        <div style={{ flex: 1 }}>
          <div className="co-name-big" id="co-name-big">
            {company?.name}
          </div>
          <div className="co-meta">
            <span className="co-tag">
              {company?.industry} · {company?.region} · CSA: Amos Ahounou
            </span>
            <span
              id="co-status-badge"
              style={{
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "20px",
                background: "#dcfce7",
                color: "#15803d",
              }}
            >
              ● Active
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "20px",
                background: "var(--bl)",
                color: "var(--bd)",
              }}
            >
              PRO License
            </span>
          </div>
        </div>
        <div className="co-actions">
          <button className="btn btn-ghost">📋 Notes</button>
          <button className="btn btn-ghost">📅 Schedule</button>
          <button className="btn btn-blue">✉ Contact</button>
          <button className="btn btn-primary">+ Log Activity</button>
        </div>
      </div>
      <div className="ptabs">
        <div
          className={`ptab ${currentSection === "overview" && "on"}`}
          data-pane="overview"
          onClick={() => setCurrentSection("overview")}
        >
          Overview
        </div>
        <div
          className={`ptab ${currentSection === "journey" && "on"}`}
          data-pane="pjourney"
          onClick={() => setCurrentSection("journey")}
        >
          Journey Feed
        </div>
        <div
          className={`ptab ${currentSection === "products" && "on"}`}
          data-pane="products"
          onClick={() => setCurrentSection("products")}
        >
          Products
        </div>
        <div
          className={`ptab ${currentSection === "contacts" && "on"}`}
          data-pane="contacts"
          onClick={() => setCurrentSection("contacts")}
        >
          Contacts
        </div>
        <div
          className={`ptab ${currentSection === "notes" && "on"}`}
          data-pane="notes"
          onClick={() => setCurrentSection("notes")}
        >
          Notes
        </div>
      </div>
      <div className="tab-body">
        {currentSection === "overview" && <Overview />}
        {currentSection === "journey" && <Journey />}
        {currentSection === "products" && <Products />}
        {currentSection === "contacts" && <Contacts />}
        {currentSection === "notes" && <Notes />}
      </div>
    </div>
  );
};

export default CompanyDetail;
