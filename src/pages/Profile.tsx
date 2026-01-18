import { Link } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, MapPin, GraduationCap, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@university.edu",
    phone: "+91 98765 43210",
    city: "Bengaluru",
    university: "Stanford University",
    course: "Computer Science",
    year: "3rd Year",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container max-w-md mx-auto">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          {/* Profile Card */}
          <div className="bg-card rounded-2xl shadow-md p-6 animate-fade-up">
            {/* Avatar & Name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">{user.name}</h1>
                <p className="text-muted-foreground text-sm">{user.course} • {user.year}</p>
              </div>
            </div>

            {/* Info List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{user.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{user.city}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{user.university}</span>
              </div>
            </div>

            <hr className="my-6 border-border" />

            <Button variant="outline" className="w-full text-destructive hover:bg-destructive hover:text-destructive-foreground">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
