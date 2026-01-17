import { Link } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, MapPin, GraduationCap, BookOpen, Edit2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Profile = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@university.edu",
    phone: "+91 98765 43210",
    city: "Bengaluru",
    university: "Stanford University",
    course: "Computer Science",
    year: "3rd Year",
    avatar: null,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container max-w-2xl mx-auto">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Profile Card */}
          <div className="bg-card rounded-3xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header with gradient */}
            <div className="h-32 hero-gradient relative">
              <div className="absolute -bottom-12 left-8">
                <div className="w-24 h-24 rounded-2xl bg-card shadow-lg flex items-center justify-center">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover rounded-2xl" />
                  ) : (
                    <User className="w-12 h-12 text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-16 px-8 pb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
                  <p className="text-muted-foreground">{user.university}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-accent" />
                  {user.email}
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-accent" />
                  {user.phone}
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  {user.city}
                </div>
              </div>

              <hr className="my-6 border-border" />

              <h2 className="text-lg font-semibold text-foreground mb-4">Academic Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">University</span>
                  </div>
                  <p className="font-medium text-foreground">{user.university}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Course</span>
                  </div>
                  <p className="font-medium text-foreground">{user.course}</p>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-4 mt-4">
                <span className="text-sm text-muted-foreground">Current Year</span>
                <p className="font-medium text-foreground text-lg">{user.year}</p>
              </div>

              <Button
                variant="outline"
                className="w-full mt-8 text-destructive border-destructive/30 hover:bg-destructive hover:text-destructive-foreground"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
