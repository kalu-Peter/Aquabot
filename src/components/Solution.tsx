import { Button } from "@/components/ui/button";
import { CheckCircle, Smartphone, Wrench, Users } from "lucide-react";
import technologyImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (6).jpeg";

const Solution = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "High Quality",
      description: "Monitor the status of water dispensed to keep the water point in top condition"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Smart Delivery", 
      description: "Dashboard and alerts allow timely intervention when sales are low or maintenance is needed"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Easy Payment",
      description: "API and money transfer reduces cost and income loss via non-revenue water"
    }
  ];

  const keyComponents = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Technology",
      description: "High-quality equipment and proper education for building sustainable water systems"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Local engagement from the beginning to ensure successful project implementation"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Maintenance", 
      description: "Automated funding and remote monitoring for long-term system sustainability"
    }
  ];

  return (
    <section id="solution" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Solution = <span className="bg-gradient-water bg-clip-text text-transparent">AquaBot</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The AquaBot provides push button operation, easily dispensing an accurate amount of water 
            to each user at an affordable rate which benefits the community and sustains the operation 
            for many years into the future.
          </p>
        </div>

        {/* Main Solution Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src={technologyImage} 
              alt="AquaBot Technology System"
              className="w-full rounded-2xl shadow-water"
            />
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              Revolutionary Water Access Technology
            </h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="ocean" size="lg" className="w-full md:w-auto">
              Learn More About AquaBot
            </Button>
          </div>
        </div>

        {/* Construction & Function */}
        <div className="bg-gradient-sky rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Construction & Function
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The AquaBot is constructed with a tower and platform supporting a water storage tank. 
              Solar panels are mounted at the top for security and maximum sun exposure. Each community 
              member receives an electronic token that activates the water taps - no caretaker needed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h4 className="font-semibold mb-2">Solar Powered</h4>
              <p className="text-sm text-muted-foreground">
                Sustainable energy with maximum sun exposure
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Token System</h4>
              <p className="text-sm text-muted-foreground">
                Electronic tokens activate water dispensing automatically
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Auto-Management</h4>
              <p className="text-sm text-muted-foreground">
                Funds automatically deposited for maintenance and expansion
              </p>
            </div>
          </div>
        </div>

        {/* Success Components */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Three Key Components for Success
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyComponents.map((component, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center shadow-water hover:shadow-glow transition-all duration-300"
            >
              <div className="text-primary mx-auto mb-6">
                {component.icon}
              </div>
              <h4 className="text-xl font-semibold mb-4 text-card-foreground">
                {component.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;