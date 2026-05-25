const CustomerHealthChanges = () => {
  return (
    <div className="wr-sec w-50">
      <div className="wr-sec-head">
        <div className="wr-sec-title">Health Score Changes</div>
      </div>
      <div className="wr-sec-body">
        <table className="wr-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Prev.</th>
              <th>Current</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 700, color: "var(--t1)" }}>
                Ecobank GH
              </td>
              <td>79</td>
              <td style={{ color: "#15803d", fontWeight: 700 }}>82</td>
              <td style={{ color: "#15803d", fontWeight: 700 }}>▲ +3</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: "var(--t1)" }}>MTN Ghana</td>
              <td>74</td>
              <td style={{ color: "#15803d", fontWeight: 700 }}>76</td>
              <td style={{ color: "#15803d", fontWeight: 700 }}>▲ +2</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: "var(--t1)" }}>
                Standard Bank
              </td>
              <td>63</td>
              <td style={{ color: "#b45309", fontWeight: 700 }}>58</td>
              <td style={{ color: "#b91c1c", fontWeight: 700 }}>▼ −5</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: "var(--t1)" }}>
                BCEAO Sénégal
              </td>
              <td>44</td>
              <td style={{ color: "#b91c1c", fontWeight: 700 }}>38</td>
              <td style={{ color: "#b91c1c", fontWeight: 700 }}>▼ −6</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 700, color: "var(--t1)" }}>
                Airtel Nigeria
              </td>
              <td>49</td>
              <td style={{ color: "#b91c1c", fontWeight: 700 }}>43</td>
              <td style={{ color: "#b91c1c", fontWeight: 700 }}>▼ −6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerHealthChanges;
