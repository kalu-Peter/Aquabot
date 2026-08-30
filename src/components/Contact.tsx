import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Send us a message about your current or upcoming project. 
            Let's work together to bring clean water access to communities that need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-water">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              Get In Touch
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  Organization
                </label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your organization or company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or how you'd like to get involved..."
                  rows={6}
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-water rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                AquaBot - Bridging the Gap
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                AquaBot is bridging the gap between need and supply, providing sustainable access
                to safe water, sanitation, and hygiene for rural and underserved communities in
                Kenya and beyond.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-white/90">info@aquabots.org</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-white/90">+254-757-594-469</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-white/90">Karen, Karengata Park - Nairobi County</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Formula */}
            <div className="bg-card rounded-xl p-8 shadow-water">
              <h4 className="text-xl font-bold text-card-foreground mb-6 text-center">
                Our Success Formula
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Appropriate Technology</span>
                </div>
                <div className="text-center text-2xl font-bold text-primary">+</div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Community Participation</span>
                </div>
                <div className="text-center text-2xl font-bold text-primary">+</div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Maintenance Support</span>
                </div>
                <div className="text-center text-2xl font-bold text-primary">=</div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-water bg-clip-text text-transparent">
                    SUCCESS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;