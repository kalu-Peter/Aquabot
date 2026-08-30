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
            The Water Crisis in Kenya
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Constitution of Kenya guarantees every citizen the right to clean and safe water, yet a 2019
            WASREB guideline found that 33% of rural water systems in Kenya are non-functional, while a
            further 67% begin to deteriorate within just 3-5 years of construction.
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
                Rural Kenya has long relied on the community management model, handing full
                operation and maintenance of water systems over to volunteer committees with
                little technical or financial capacity to run them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many are failing for one simple and avoidable reason: <strong>Lack of sustainability.</strong>
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h4 className="font-semibold text-destructive mb-2">Insufficient Technical Support</h4>
                <p className="text-sm text-muted-foreground">
                  Management committees often receive only a few days of training to run complex,
                  multi-million-shilling water systems
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h4 className="font-semibold text-destructive mb-2">Limited Community Integration</h4>
                <p className="text-sm text-muted-foreground">
                  Projects fail without proper community participation and ownership from the beginning
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h4 className="font-semibold text-destructive mb-2">Lack of Financial Sustainability</h4>
                <p className="text-sm text-muted-foreground">
                  Without a funding model built for long-term upkeep, systems break down within
                  years and communities are left waiting for outside aid
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