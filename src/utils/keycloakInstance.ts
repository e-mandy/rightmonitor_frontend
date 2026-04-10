import Keycloak from "keycloak-js";

const keyclockConfig = {
  url: import.meta.env.VITE_API_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

const keycloakInstance = new Keycloak(keyclockConfig);

export default keycloakInstance;
