import { Droplets, AlertTriangle, Clock, DollarSign } from "lucide-react";

const Problem = () => {
  const challenges = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Contaminated Water Sources",
      description: "Most available water sources are unprotected shallow wells, rivers, dams, and springs causing waterborne diseases including cholera, typhoid, and amoeba."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Intensive Collection",
      description: "Women and children travel long distances in search of water during dry seasons, preventing income generation and school attendance."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Safety Risks",
      description: "In African culture, water collection responsibility falls to women and children, putting them at higher risk of assault during their quest for water."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Hidden Costs",
      description: "People already pay for water through medical expenses from contaminated water, fuel for boiling, and lost productivity from collection time."
    }
  ];

  return (
    <section className="py-24 bg-gradient-sky">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Global Water Crisis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Water is accessible almost everywhere in developed countries, yet 2.6 billion people worldwide 
            lack access to clean water. That's almost eight times the population of the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-water hover:shadow-glow transition-all duration-300"
            >
              <div className="text-primary mb-4">
                {challenge.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                {challenge.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-water">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-card-foreground">
                Faulty Infrastructure
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Over the years billions of dollars have been spent to address water problems, 
                yet the problems still exist. There are over 50,000 dysfunctional water supply 
                infrastructures across Africa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many are failing for one simple and avoidable reason: <strong>Lack of sustainability.</strong>
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h4 className="font-semibold text-destructive mb-2">Poor Technology</h4>
                <p className="text-sm text-muted-foreground">
                  Contractors often lack proper education and access to quality equipment
                </p>
              </div>
              
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h4 className="font-semibold text-destructive mb-2">Lack of Community Engagement</h4>
                <p className="text-sm text-muted-foreground">
                  Projects fail without proper community participation from the beginning
                </p>
              </div>
              
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h4 className="font-semibold text-destructive mb-2">No Maintenance Support</h4>
                <p className="text-sm text-muted-foreground">
                  Communities lack expertise and funds for repairs and maintenance
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">= FAILURE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;