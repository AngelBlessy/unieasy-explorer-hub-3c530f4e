import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        
        <Link to="/profile">
          <Button variant="glass" size="icon" className="rounded-full">
            <User className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
