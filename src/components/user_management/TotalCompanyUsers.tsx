import { useSettings } from "../../hooks/useSettings";

const TotalCompanyUsers = () => {
  const {
    getUserUserWithRoles: { data },
  } = useSettings();
  return (
    <div>
      <h3 className="d-flex flex-column align-items-start fs-7">
        <span className="fs-1">{data?.length}</span> users
      </h3>
    </div>
  );
};

export default TotalCompanyUsers;
