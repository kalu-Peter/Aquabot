import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen, TrendingUp } from "lucide-react";
import communityImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (4).jpeg";

const Community = () => {
  const engagementSteps = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Leadership Engagement",
      description: "We engage local community leadership and community health volunteers from the beginning"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Survey",
      description: "Conduct baseline surveys to understand community needs and payment capabilities"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "CHV Training",
      description: "Train Community Health Volunteers to become ambassadors of health and clean water"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Project Launch",
      description: "Public opening with ribbon cutting and ongoing WASH sensitization"
    }
  ];

  return (
    <section className="py-24 bg-gradient-sky">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Local Community Engagement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Community participation is essential for project success. We ensure local ownership 
            and sustainability through comprehensive engagement and training programs.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src={communityImage} 
              alt="Community members using AquaBot"
              className="w-full rounded-2xl shadow-water"
            />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              Empowering Communities
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contrary to popular belief, many communities in Kenya are neither entirely impoverished nor
              incapable of supporting sustainable water services. A comprehensive baseline survey conducted
              across all seven AquaBot communities found that 99% of households are willing to pay for
              reliable, safe water.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              People are already paying for water, often in indirect and more costly ways, through
              medication for waterborne illness, fuel for boiling, and lost income from hours spent
              fetching water. AquaBot channels that existing spending into an affordable, dependable
              system instead.
            </p>
            
            <Button variant="ocean" size="lg">
              Support Our Mission
            </Button>
          </div>
        </div>

        {/* Engagement Process */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-card-foreground">
            Our Community Engagement Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-primary flex-shrink-0 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remote Monitoring */}
        <div className="text-center">
          <div className="bg-gradient-water rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Monitored from Anywhere in the World
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              The AquaBot is under remote surveillance that can be monitored from anywhere in the world! 
              Our smart technology ensures 24/7 oversight and rapid response to maintenance needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Remote Monitoring</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">Real-time</div>
                <div className="text-white/90">Data Analytics</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">Instant</div>
                <div className="text-white/90">Alert System</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;