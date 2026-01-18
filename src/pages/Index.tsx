import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Campus life"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6">
          <Logo />
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

        {/* Footer */}
        <footer className="p-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} UniEasy. Built with ❤️ by students, for students.
        </footer>
      </div>
    </div>
  );
};

export default Index;
