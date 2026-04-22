const Contacts = () => {
  return (
    <div className="tp active" id="pane-contacts">
      <div className="sec-t">
        Company Contacts<span className="sec-link">+ Add contact</span>
      </div>
      <table className="ct">
        <thead>
          <tr>
            <th style={{ width: "32%" }}>Name</th>
            <th>Role</th>
            <th>Source</th>
            <th>Email</th>
            <th>Last contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  className="ct-av"
                  style={{ background: "#dcfce7", color: "#15803d" }}
                >
                  KM
                </div>
                <div>
                  <div className="ct-name">Kofi Mensah</div>
                  <div className="ct-role">Branch Manager</div>
                </div>
              </div>
            </td>
            <td>
              <span className="bx bx-b">Decision Maker</span>
            </td>
            <td>
              <span
                className="bx"
                style={{ background: "var(--gl)", color: "var(--gd)" }}
              >
                RightQ
              </span>
            </td>
            <td style={{ color: "var(--t2)" }}>k.mensah@ecobank.com</td>
            <td style={{ color: "var(--t3)" }}>Today</td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  className="ct-av"
                  style={{ background: "var(--bl)", color: "var(--bd)" }}
                >
                  AA
                </div>
                <div>
                  <div className="ct-name">Abena Asante</div>
                  <div className="ct-role">IT Manager</div>
                </div>
              </div>
            </td>
            <td>
              <span className="bx bx-gy">Technical</span>
            </td>
            <td>
              <span
                className="bx"
                style={{ background: "var(--gl)", color: "var(--gd)" }}
              >
                RightQ
              </span>
            </td>
            <td style={{ color: "var(--t2)" }}>a.asante@ecobank.com</td>
            <td style={{ color: "var(--t3)" }}>3 days ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
