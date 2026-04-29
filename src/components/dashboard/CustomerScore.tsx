import { useCurrentCompanyStore } from "../../store/current-company.store";
import type { CompanyMetricType, CompanyType } from "../../types/company.type";
import { getCompanyStatus } from "../../utils/functions/getCompanyStatus";
import { getFormatDate } from "../../utils/functions/getFormatDate";
import { getScoreColor } from "../../utils/functions/getScoreColor";

export type CustomerScoreType = CompanyType & CompanyMetricType;

const CustomerScore = ({ ...data }: CustomerScoreType) => {
  const setIsOpenedModal = useCurrentCompanyStore.getState().setIsOpenedModal;

  const handleModal = () => {
    setIsOpenedModal(true, data.company_id);
  };
  return (
    <>
      <td>
        <div className="cname">{data.name}</div>
        <div className="csince">Since {getFormatDate(data.created_at)}</div>
      </td>
      <td>
        <div className="sbar-w">
          <div
            className="sbar"
            style={{
              backgroundColor: getScoreColor(data.overall_health).color,
              width: data.overall_health + "%",
            }}
          ></div>
        </div>
        <div className="sv">{Math.round(data.overall_health)}</div>
      </td>
      <td>
        <span
          className="bx"
          style={{
            backgroundColor: getScoreColor(data.saas_health).bg,
            color: getScoreColor(data.saas_health).color,
          }}
        >
          {Math.round(data.saas_health)}%
        </span>
      </td>
      <td>
        <span
          className="bx"
          style={{
            backgroundColor: getScoreColor(data.hardware_health).bg,
            color: getScoreColor(data.hardware_health).color,
          }}
        >
          {Math.round(data.hardware_health)}%
        </span>
      </td>
      <td>
        <span
          className="bx"
          style={{
            backgroundColor: getScoreColor(data.relationship_health).bg,
            color: getScoreColor(data.relationship_health).color,
          }}
        >
          {Math.round(data.relationship_health)}%
        </span>
      </td>
      <td>
        <span
          className="bx"
          style={{
            backgroundColor: getScoreColor(data.overall_health).bg,
            color: getScoreColor(data.overall_health).color,
          }}
        >
          {getCompanyStatus(data.overall_health)}
        </span>
      </td>
      <td>
        <button className="open-modal btn btn-ghost" onClick={handleModal}>
          View →
        </button>
      </td>
    </>
  );
};

export default CustomerScore;
