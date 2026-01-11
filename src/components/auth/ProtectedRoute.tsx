import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import AccessDenied from "@/pages/AccessDenied";

export type UserRole = "super_admin" | "operations" | "marketing" | "support" | "customer";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
  requireAuth?: boolean;
}

export default function ProtectedRoute({ 
  children, 
  allowedRoles = ["super_admin", "operations", "marketing", "support"],
  requireAuth = true 
}: ProtectedRouteProps) {
  const { user, isAuthenticated } = useApp();

  // Not logged in
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check role access
  if (allowedRoles.length > 0 && user) {
    const userRole = user.role || (user.isAdmin ? "super_admin" : "customer");
    if (!allowedRoles.includes(userRole)) {
      return <AccessDenied />;
    }
  }

  // If user is not admin and trying to access admin routes
  if (user && !user.isAdmin && !user.role) {
    return <AccessDenied />;
  }

  return <>{children}</>;
}
