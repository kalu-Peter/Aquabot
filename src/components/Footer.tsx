import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import aquabotLogo from "@/assets/logo.jpeg";
import youtubeIcon from "@/assets/youtube.png";
import linkedinIcon from "@/assets/linkedin.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center mb-4 hover:opacity-80 transition-opacity"
            >
              <img src={aquabotLogo} alt="AquaBot" className="h-12 w-auto rounded-md shadow-sm" />
            </button>

            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Changing the way we think about water. AquaBot brings sustainable,
              smart water access to communities across Africa through revolutionary
              technology and community empowerment.
            </p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span>info@aquabots.org</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+254-757-594-469</span>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>Karen, Karengata Park - Nairobi County</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/@AquaBotsclg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AquaBot on YouTube"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <img src={youtubeIcon} alt="" className="w-9 h-9" />
              </a>
              <a
                href="http://linkedin.com/company/aquabots-clg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AquaBot on LinkedIn"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <img src={linkedinIcon} alt="" className="w-9 h-9" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-background/80 hover:text-background transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/solution-technology"
                className="block text-background/80 hover:text-background transition-colors"
              >
                Solution & Technology
              </Link>
              <button
                onClick={() => scrollToSection('community')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Community
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h4 className="font-semibold mb-4">Our Mission</h4>
            <div className="space-y-2 text-background/80">
              <div>Clean Water Access</div>
              <div>Community Empowerment</div>
              <div>Sustainable Technology</div>
              <div>Remote Monitoring</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © 2025 AquaBot. All rights reserved. Bridging the gap between need and supply.
            </div>
            
            <div className="flex gap-6 text-sm text-background/80">
              <button className="hover:text-background transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-background transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;