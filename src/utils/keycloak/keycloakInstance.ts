import Keycloak from "keycloak-js";
import { env } from "../env";

const keycloakConfig = {
  url: env().keycloak.url,
  realm: env().keycloak.realm,
  clientId: env().keycloak.clientId,
};

export const keycloakInstance = new Keycloak(keycloakConfig);
