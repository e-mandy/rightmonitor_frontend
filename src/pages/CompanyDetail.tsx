import { useState } from "react";
import Overview from "../components/company_detail/Overview";
import Journey from "./Journey";
import Products from "../components/company_detail/Products";
import Contacts from "../components/auth/Contacts";
import { useCompany } from "../hooks/useCompany";
import { Spinner } from "react-bootstrap";
type SectionType = "overview" | "journey" | "products" | "contacts";

const CompanyDetail = () => {
  const {
    fetchCurrentCompany: { data: company, isPending: isPendingCompany },
  } = useCompany();

  const [currentSection, setCurrentSection] = useState<SectionType>("overview");

  return (
    <div className="view" id="view-company">
      <div className="co-hero">
        <div className="co-logo" id="co-logo">
          {"AA"}
        </div>
        <div style={{ flex: 1 }}>
          <div className="co-name-big" id="co-name-big">
            {isPendingCompany ? <Spinner /> : company?.name}
          </div>
          <div className="co-meta">
            <span className="co-tag">
              {company?.industry} · {company?.region} · CSA: Amos Ahounou
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
      </div>
      <div className="tab-body">
        {currentSection === "overview" && <Overview />}
        {currentSection === "journey" && <Journey />}
        {currentSection === "products" && <Products />}
        {currentSection === "contacts" && <Contacts />}
      </div>
    </div>
  );
};

export default CompanyDetail;
