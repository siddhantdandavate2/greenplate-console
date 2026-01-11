import { ShieldX, ArrowLeft, Home, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useApp } from "@/contexts/AppContext";

export default function AccessDenied() {
  const { user, isAuthenticated } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Icon */}
        <div className="relative mx-auto w-32 h-32">
          <div className="absolute inset-0 bg-destructive/20 rounded-full animate-pulse" />
          <div className="relative flex items-center justify-center w-full h-full bg-destructive/10 rounded-full border-2 border-destructive/30">
            <ShieldX className="w-16 h-16 text-destructive" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-foreground">Access Denied</h1>
          <p className="text-lg text-muted-foreground">
            You don't have permission to access this page.
          </p>
        </div>

        {/* Details Card */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Lock className="w-5 h-5" />
            <span className="font-medium">Administrator Access Required</span>
          </div>
          
          {isAuthenticated && user && (
            <div className="text-sm text-muted-foreground">
              <p>Logged in as: <span className="font-medium text-foreground">{user.email}</span></p>
              <p className="mt-1">
                Role: <span className="font-medium text-foreground capitalize">
                  {user.role || (user.isAdmin ? "Admin" : "Customer")}
                </span>
              </p>
            </div>
          )}

          <p className="text-sm text-muted-foreground">
            If you believe you should have access, please contact your system administrator.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go to Home
            </Link>
          </Button>
          
          {!isAuthenticated && (
            <Button asChild>
              <Link to="/login" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Sign In
              </Link>
            </Button>
          )}
          
          {isAuthenticated && (
            <Button variant="secondary" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          )}
        </div>

        {/* Admin Credentials Hint (for demo) */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Demo admin login: <code className="bg-muted px-1 py-0.5 rounded">admin@healthygreens.com</code> / <code className="bg-muted px-1 py-0.5 rounded">admin123</code>
          </p>
        </div>
      </div>
    </div>
  );
}
