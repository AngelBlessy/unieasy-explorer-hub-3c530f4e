import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { Megaphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://videos.pexels.com/video-files/3769790/3769790-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <Link to="/merchant">
              <Button variant="outline" size="sm" className="gap-2">
                <Megaphone className="w-4 h-4" />
                Run Your Advertisement
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up">
              Welcome to{" "}
              <span className="text-primary">UniEasy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up stagger-1">
              Your one-stop platform for discovering food, accommodation, and amazing places around your university campus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2">
              <Link to="/signup">
                <Button variant="hero" size="xl">
                  Get Started
                </Button>
              </Link>
              <Link to="/home">
                <Button variant="outline" size="xl">
                  Explore as Guest
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted-foreground animate-fade-up stagger-3">
              Already have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
