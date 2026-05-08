import { useEnvironment } from "@keycloak/keycloak-ui-shared";
import { KyConfigs } from "../utils/kyInstance";
import { useQuery } from "@tanstack/react-query";
import { userRoles } from "../constants/user.constants";

type ClientType = "rightq" | "rightsurvey" | "rightdesk";

type UserApiParamsType = {
  token: string;
  clients: ClientType[];
  company: string;
  roles: string[];
};

export const getUserWithRolesApi = async (configs: UserApiParamsType) => {
  return await KyConfigs(import.meta.env.VITE_XP_BACKEND_URL)
    .kyInstance.post("/orgUsersWithRoles", {
      json: {
        token: configs.token,
        clients: configs.clients,
        roles: configs.roles,
        page: 1,
        limit: 1000,
        company: configs.company,
      },
    })
    .json();
};

export const useSettings = () => {
  const context = useEnvironment();
  const companyToken = context.keycloak.token;
  const currentCompany = window.location.hostname.split(".")[0].trim();
  const roles = userRoles.map((role) => `rightq_${role}`);

  const getUserUserWithRoles = useQuery({
    queryKey: ["user_with_roles", currentCompany, roles],
    queryFn: () => {
      if (!companyToken) return null;
      const configs: UserApiParamsType = {
        token: companyToken,
        clients: ["rightq"],
        company: currentCompany,
        roles: roles,
      };

      return getUserWithRolesApi(configs);
    },
    enabled: !!companyToken,
  });

  return { getUserUserWithRoles };
};
