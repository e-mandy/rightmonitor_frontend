import { Outlet } from "react-router-dom";
import { useAuthenticated } from "../../hooks/useAuthenticated";

const ProtectedRoutes = () => {
  const { isLoading, isAuthenticated } = useAuthenticated();

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (isAuthenticated) return <Outlet />;
};

export default ProtectedRoutes;
