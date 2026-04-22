const Notes = () => {
  return (
    <div className="tp active" id="pane-notes">
      <div className="sec-t">
        CSA Notes<span className="sec-link">+ Add note</span>
      </div>
      <div className="note-item">
        <div className="note-head">
          <div
            className="ct-av"
            style={{
              background: "#dcfce7",
              color: "#15803d",
              width: "26px",
              height: "26px",
              fontSize: "9px",
            }}
          >
            AA
          </div>
          <span className="note-author">Amos Ahounou</span>
          <span className="note-date">17 Mar 2026 · 3:42 PM</span>
        </div>
        <div className="note-text">
          Spoke with Kofi Mensah about today's complaint. Key issue: agent
          training at branch 4. Scheduled video call for 22 March.
        </div>
      </div>
      <div className="note-item">
        <div className="note-head">
          <div
            className="ct-av"
            style={{
              background: "#dcfce7",
              color: "#15803d",
              width: "26px",
              height: "26px",
              fontSize: "9px",
            }}
          >
            AA
          </div>
          <span className="note-author">Amos Ahounou</span>
          <span className="note-date">10 Mar 2026 · 11:00 AM</span>
        </div>
        <div className="note-text">
          Monthly check-in completed. NPS improved to +68. Interested in
          RightData. Renewal Jan 2027, no concerns.
        </div>
      </div>
      <div className="note-add">+ Add a note</div>
    </div>
  );
};

export default Notes;
