import { KyConfigs } from "../utils/kyInstance";

const { kyInstance } = KyConfigs(import.meta.env.VITE_XP_BACKEND_URL);

export const getUserWithRoles = async (token: string) => {
  return kyInstance
    .post("/orgUsersWithRoles", {
      json: {
        token: token,
      },
    })
    .json();
};
