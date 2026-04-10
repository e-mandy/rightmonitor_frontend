import { useEffect, useState } from "react";
import keycloakInstance from "../utils/keycloakInstance";

export const useAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      try {
        setIsLoading(true);
        const authenticated = await keycloakInstance.init({
          onLoad: "login-required",
        });

        setIsAuthenticated(authenticated);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    authenticate();
  }, []);

  return { isAuthenticated, isLoading, error };
};
