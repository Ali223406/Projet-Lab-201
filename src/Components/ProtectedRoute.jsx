import { Navigate } from "react-router-dom";  // Importing Navigate component from react-router-dom for redirecting unauthenticated users
import { useAuth } from "../context/AuthContext";  // Importing useAuth hook from the AuthContext to access the current user's authentication status

export default function ProtectedRoute({ children }) {  // Defining the ProtectedRoute component which takes children as a prop to render if the user is authenticated
  const { user } = useAuth();  // Using the useAuth hook to get the current user from the authentication context

  if (!user) {  // If there is no user (i.e., the user is not authenticated), redirect to the login page
    return <Navigate to="/login" />;
  }

  return children;
}