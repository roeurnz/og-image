import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center relative z-10 px-6">
        <h1 className="text-8xl md:text-9xl font-bold text-primary-foreground/20 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-primary-foreground/70 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-card"
          >
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
