import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const developers = [
  { name: "Developer One", role: "Full Stack Developer" },
  { name: "Developer Two", role: "Frontend Developer" },
  { name: "Developer Three", role: "Backend Developer" },
];

const Footer = () => {
  return (
    <footer className="bg-slate text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Uni<span className="text-primary">Easy</span>
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Your trusted companion for discovering the best spots around your campus. Built by students, for students.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/home" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-primary" />
                support@unieasy.com
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Tech Hub, Innovation Park, Bengaluru, India 560001
              </li>
            </ul>
          </div>

          {/* Development Team */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Development Team</h3>
            <ul className="space-y-3">
              {developers.map((dev, index) => (
                <li key={index} className="text-white/70">
                  <span className="font-medium text-white">{dev.name}</span>
                  <br />
                  <span className="text-sm">{dev.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} UniEasy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
