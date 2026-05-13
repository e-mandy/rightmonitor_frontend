import { useEnvironment } from "@keycloak/keycloak-ui-shared";
import { KyConfigs } from "../utils/kyInstance";
import { useQuery } from "@tanstack/react-query";
import { userRoles } from "../constants/user.constants";
import type { UserType } from "../types/user.types";

type ClientType = "rightq" | "rightsurvey" | "rightdesk";

type UserApiParamsType = {
  token: string;
  clients: ClientType[];
  company: string;
  roles: string[];
};

export const getUserWithRolesApi = async (
  configs: UserApiParamsType,
): Promise<UserType[]> => {
  const result = await KyConfigs(import.meta.env.VITE_XP_BACKEND_URL)
    .kyInstance.post("orgUsersWithRoles", {
      json: {
        token: configs.token,
        clients: configs.clients,
        roles: configs.roles,
        page: 1,
        limit: 1000,
        company: configs.company,
      },
    })
    .json<{ result: UserType[] }>();

  return result.result;
};

export const useSettings = () => {
  const context = useEnvironment();
  const companyToken = context.keycloak.token;
  const currentCompany = window.location.hostname.split(".")[0].trim();
  const roles = userRoles.map((role) => `rightq_${role}`);

  const getUserUserWithRoles = useQuery<UserType[] | null>({
    queryKey: ["user_with_roles", currentCompany, roles],
    queryFn: async () => {
      if (!companyToken) return null;
      const configs: UserApiParamsType = {
        token: companyToken,
        clients: ["rightq"],
        company: currentCompany,
        roles: roles,
      };

      return getUserWithRolesApi(configs);
    },
  });

  return { getUserUserWithRoles };
};
