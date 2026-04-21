import { KeycloakProvider } from "@keycloak/keycloak-ui-shared";
import { Provider } from "react-redux";
import { store } from "../reduxStore";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <KeycloakProvider
      environment={{
        serverBaseUrl: import.meta.env.VITE_APP_SSO_URL,
        realm: window.location.hostname.split(".")[0],
        clientId: "localhost",
        resourceUrl: "",
        logo: "",
        logoUrl: "",
        authUrl: import.meta.env.VITE_APP_SSO_URL,
        authServerUrl: import.meta.env.VITE_APP_SSO_URL,
        locale: "en",
        referrerName: "",
        referrerUrl: "",
        features: {
          isRegistrationEmailAsUsername: true,
          isEditUserNameAllowed: true,
          isInternationalizationEnabled: true,
          isLinkedAccountsEnabled: true,
          isMyResourcesEnabled: false,
          isViewOrganizationsEnabled: false,
          deleteAccountAllowed: true,
          updateEmailFeatureEnabled: false,
          updateEmailActionEnabled: false,
          isViewGroupsEnabled: true,
          isOid4VciEnabled: false,
        },
        scope: "openid",
      }}
    >
      <Provider store={store}>{children}</Provider>
    </KeycloakProvider>
  );
};

export default AuthProvider;
