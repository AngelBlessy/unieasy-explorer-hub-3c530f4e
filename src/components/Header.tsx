import { Link } from "react-router-dom";
import { User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center gap-2 md:gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full bg-background/20 backdrop-blur-md hover:bg-background/40 w-10 h-10"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-white" />
            ) : (
              <Sun className="w-5 h-5 text-white" />
            )}
          </Button>
          
          <Link to="/profile">
            <Button variant="outline" size="icon" className="rounded-full bg-background/20 backdrop-blur-md border-white/20 hover:bg-background/40 w-10 h-10">
              <User className="w-5 h-5 text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
