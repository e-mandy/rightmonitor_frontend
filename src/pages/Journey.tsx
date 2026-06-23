import {
  BookmarkFill,
  ChatDotsFill,
  ClockFill,
  PersonFill,
  SquareFill,
  Vinyl,
} from "react-bootstrap-icons";

const Journey = () => {
  return (
    <div className="view" id="view-journey">
      <div className="ph">
        <div>
          <div className="ph-title">Journey Feed</div>
          <div className="ph-sub">All customer events · Live</div>
        </div>
      </div>
      <div className="jf-filters">
        <div className="jf-chip on" data-filter="all">
          All Events
        </div>
        <div className="jf-chip" data-filter="RightQ">
          RightQ
        </div>
        <div className="jf-chip" data-filter="RightSurvey">
          RightSurvey
        </div>
        <div className="jf-chip" data-filter="RightDesk">
          RightDesk
        </div>
        <div className="jf-chip" data-filter="RightTime">
          RightTime
        </div>
        <div className="jf-chip" data-filter="XP">
          RightCom XP
        </div>
        {/* <input
          className="jf-search"
          id="jf-search"
          placeholder="Search company or event…"
        /> */}
      </div>
      <div className="jf-list" id="jf-list">
        <div className="jf-item" data-prod="RightQ" data-co="Ecobank GH">
          <div
            className="jf-dot"
            style={{
              background: "#f0f7e0",
              borderColor: "#c6e68a",
            }}
          >
            <Vinyl size={16} color="#2B8AC9" />
          </div>
          <div className="jf-body">
            <div className="jf-ev">Ticket #SNK017 served</div>
            <div className="jf-meta">Agent Martial · Counter 3 · 8m 14s</div>
            <div className="jf-desc">Customer served within SLA.</div>
            <span className="ji-prod jp-g">RightQ</span>
            <div
              className="jf-co co-link"
              data-name="Ecobank GH"
              data-init="EG"
              data-bg="#e8f3fb"
              data-col="#2B8AC9"
              data-score="82"
              data-sbg="#dcfce7"
              data-scol="#15803d"
            >
              Ecobank GH →
            </div>
          </div>
          <div className="jf-time">
            <div>Today</div>
            <div>2m ago</div>
          </div>
        </div>
        <div className="jf-item" data-prod="RightSurvey" data-co="Ecobank GH">
          <div
            className="jf-dot"
            style={{
              background: "#f0f7e0",
              borderColor: "#c6e68a",
            }}
          >
            <ChatDotsFill size={16} color="#80B500" />
          </div>
          <div className="jf-body">
            <div className="jf-ev">Survey submitted — 2/5 ★ low score</div>
            <div className="jf-meta">
              Auto-triggered · Rule: score &lt; 3 → escalate
            </div>
            <div className="jf-desc">
              "The agent was not helpful and I waited over 30 minutes."
            </div>
            <span className="ji-prod jp-g">RightSurvey</span>
            <div
              className="jf-co co-link"
              data-name="Ecobank GH"
              data-init="EG"
              data-bg="#e8f3fb"
              data-col="#2B8AC9"
              data-score="82"
              data-sbg="#dcfce7"
              data-scol="#15803d"
            >
              Ecobank GH →
            </div>
          </div>
          <div className="jf-time">
            <div>Today</div>
            <div>4m ago</div>
          </div>
        </div>
        <div className="jf-item" data-prod="RightDesk" data-co="Ecobank GH">
          <div
            className="jf-dot"
            style={{
              background: "#fef9ee",
              borderColor: "#fde68a",
            }}
          >
            <BookmarkFill size={16} color="#f59e0b" />
          </div>
          <div className="jf-body">
            <div className="jf-ev">Complaint #D-441 opened</div>
            <div className="jf-meta">
              Auto-created · Category: Service Quality · Priority: High
            </div>
            <div className="jf-desc">Escalation from low survey score.</div>
            <span className="ji-prod jp-a">RightDesk</span>
            <div
              className="jf-co co-link"
              data-name="Ecobank GH"
              data-init="EG"
              data-bg="#e8f3fb"
              data-col="#2B8AC9"
              data-score="82"
              data-sbg="#dcfce7"
              data-scol="#15803d"
            >
              Ecobank GH →
            </div>
          </div>
          <div className="jf-time">
            <div>Today</div>
            <div>5m ago</div>
          </div>
        </div>
        <div className="jf-item" data-prod="RightTime" data-co="Ecobank GH">
          <div
            className="jf-dot"
            style={{
              background: "#e8f3fb",
              borderColor: "#bfdbfe",
            }}
          >
            <ClockFill size={16} color="#2B8AC9" />
          </div>
          <div className="jf-body">
            <div className="jf-ev">Appointment booked — 22 Mar 10:00</div>
            <div className="jf-meta">
              Complaint unresolved · With: Amos Ahounou
            </div>
            <div className="jf-desc">Linked to complaint #D-441.</div>
            <span className="ji-prod jp-b">RightTime</span>
            <div
              className="jf-co co-link"
              data-name="Ecobank GH"
              data-init="EG"
              data-bg="#e8f3fb"
              data-col="#2B8AC9"
              data-score="82"
              data-sbg="#dcfce7"
              data-scol="#15803d"
            >
              Ecobank GH →
            </div>
          </div>
          <div className="jf-time">
            <div>Today</div>
            <div>10m ago</div>
          </div>
        </div>
        <div className="jf-item" data-prod="RightQ" data-co="MTN Ghana">
          <div
            className="jf-dot"
            style={{
              background: "#f0f7e0",
              borderColor: "#c6e68a",
            }}
          >
            <Vinyl size={16} color="#2B8AC9" />
          </div>
          <div className="jf-body">
            <div className="jf-ev">Ticket #AS2001 served</div>
            <div className="jf-meta">Agent Amos · Counter 1 · 12m 05s</div>
            <div className="jf-desc">
              Handling time above SLA threshold (10 min). Flagged.
            </div>
            <span className="ji-prod jp-g">RightQ</span>
            <div
              className="jf-co co-link"
              data-name="MTN Ghana"
              data-init="MT"
              data-bg="#f0f7e0"
              data-col="#80B500"
              data-score="76"
              data-sbg="#dcfce7"
              data-scol="#15803d"
            >
              MTN Ghana →
            </div>
          </div>
          <div className="jf-time">
            <div>Today</div>
            <div>18m ago</div>
          </div>
        </div>
        <div className="jf-item" data-prod="XP" data-co="MTN Ghana">
          <div
            className="jf-dot"
            style={{
              background: "#f3f4f6",
              borderColor: "#e0e0e0",
            }}
          >
            <PersonFill size={16} color="#888" />
          </div>
          <div className="jf-body">
            <div className="jf-ev">New contact created in CRM</div>
            <div className="jf-meta">Origin: RightQ ticket · Auto-created</div>
            <span className="ji-prod jp-n">RightCom XP</span>
            <div
              className="jf-co co-link"
              data-name="MTN Ghana"
              data-init="MT"
              data-bg="#f0f7e0"
              data-col="#80B500"
              data-score="76"
              data-sbg="#dcfce7"
              data-scol="#15803d"
            >
              MTN Ghana →
            </div>
          </div>
          <div className="jf-time">
            <div>Today</div>
            <div>22m ago</div>
          </div>
        </div>
        <div className="jf-item" data-prod="RightDesk" data-co="Standard Bank">
          <div
            className="jf-dot"
            style={{
              background: "#fef9ee",
              borderColor: "#fde68a",
            }}
          >
            <SquareFill size={16} color="#f59e0b" />
          </div>
          <div className="jf-body">
            <div className="jf-ev">Complaint #D-438 escalated</div>
            <div className="jf-meta">SLA breach — unresolved 3 days</div>
            <span className="ji-prod jp-a">RightDesk</span>
            <div
              className="jf-co co-link"
              data-name="Standard Bank"
              data-init="SB"
              data-bg="#fef3c7"
              data-col="#b45309"
              data-score="58"
              data-sbg="#fef3c7"
              data-scol="#b45309"
            >
              Standard Bank →
            </div>
          </div>
          <div className="jf-time">
            <div>Yesterday</div>
            <div>2:14 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
