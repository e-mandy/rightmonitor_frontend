const Products = () => {
  return (
    <div className="tp active" id="pane-products">
      <div className="sec-t">Product &amp; License Overview</div>
      <div
        className="prod-grid"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <div className="prod-card">
          <div className="prod-head">
            <svg width="20" height="20" viewBox="0 0 36 36">
              <circle cx="14" cy="18" r="9" fill="#2B8AC9" />
              <circle cx="22" cy="18" r="6" fill="#80B500" />
            </svg>
            <span className="prod-name">RightQ — PRO</span>
            <span className="prod-status ps-g">Active</span>
          </div>
          <div className="prod-metric">
            <span>License</span>
            <b>PRO · 16 devices</b>
          </div>
          <div className="prod-metric">
            <span>Renewal</span>
            <b>Jan 2027</b>
          </div>
          <div className="prod-metric">
            <span>MRR</span>
            <b className="c-b">$1,200</b>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-head">
            <svg width="20" height="20" viewBox="0 0 36 36">
              <rect x="4" y="9" width="22" height="14" rx="5" fill="#80B500" />
            </svg>
            <span className="prod-name">RightSurvey — Standard</span>
            <span className="prod-status ps-g">Active</span>
          </div>
          <div className="prod-metric">
            <span>Renewal</span>
            <b>Jan 2027</b>
          </div>
          <div className="prod-metric">
            <span>MRR</span>
            <b className="c-b">$400</b>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-head">
            <svg width="20" height="20" viewBox="0 0 36 36">
              <rect x="4" y="9" width="28" height="18" rx="4" fill="#80B500" />
            </svg>
            <span className="prod-name">RightPlayer — PRO</span>
            <span className="prod-status ps-g">Active</span>
          </div>
          <div className="prod-metric">
            <span>License</span>
            <b>6 screens</b>
          </div>
          <div className="prod-metric">
            <span>MRR</span>
            <b className="c-b">$300</b>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-head">
            <svg width="20" height="20" viewBox="0 0 36 36">
              <rect
                x="6"
                y="20"
                width="6"
                height="10"
                rx="1.5"
                fill="#2B8AC9"
              />
              <rect
                x="15"
                y="14"
                width="6"
                height="16"
                rx="1.5"
                fill="#80B500"
              />
            </svg>
            <span className="prod-name">RightData — Not adopted</span>
            <span className="prod-status ps-n">Upsell</span>
          </div>
          <div className="prod-metric">
            <span>Est. value</span>
            <b>$4,200/yr</b>
          </div>
          <div className="prod-metric">
            <span>Action</span>
            <b className="c-b">Send proposal →</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
