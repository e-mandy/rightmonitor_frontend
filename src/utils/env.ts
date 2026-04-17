export const env = () => ({
  keycloak: {
    url: import.meta.env.VITE_APP_SSO_URL,
    realm: import.meta.env.VITE_APP_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_APP_KEYCLOAK_CLIENT_ID,
  },
});
