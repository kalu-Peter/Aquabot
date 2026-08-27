import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Smartphone, Wrench, Zap, Landmark } from "lucide-react";
import bannerImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (5).jpeg";
import solutionImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (6).jpeg";
import technologyImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (1).jpeg";

const solutionParagraphs = [
  "In response to the severe water challenges facing many regions in Kenya, we developed AquaBot™, a decentralized water initiative that integrates cutting-edge technology, sustainable management, and innovative financial sustainability to ensure reliable access to clean and safe water.",
  "AquaBot™ is a fully automated, community-integrated water solution designed specifically for rural and underserved communities. This innovative approach ensures long-term sustainability by managing every stage of the process, from scoping and site assessments to drilling and full AquaBot infrastructure development, while also guaranteeing ongoing management, operation, and maintenance.",
  "Each unit serves at least 1,000 people and is installed alongside a professionally drilled deep well to ensure a steady and safe water supply. AquaBot combines a robust water treatment system and a push-button water ATM, offering communities 24/7 access to safe water at an affordable rate.",
  "The AquaBot model also includes community baseline surveys, WASH (Water, Sanitation, and Hygiene) promotion, and continuous local engagement to align the system with community needs and practices. Operating on a pay-for-use model, AquaBot ensures affordability while generating the revenue needed to cover maintenance and upkeep.",
  "Funds collected from water sales are automatically deposited into a dedicated Management Fund Account, which is used exclusively for repairs, parts replacement, and routine servicing of the water system. Our skilled technical team conducts regular preventive maintenance and is committed to a quick response for repairs, minimizing downtime and disruption to service delivery."
];

const solutionFeatures = [
  {
    icon: CheckCircle,
    title: "High Quality",
    description: "Monitor the status of water dispensed to keep the water point in top condition"
  },
  {
    icon: Smartphone,
    title: "Smart Delivery",
    description: "Dashboard and alerts allow timely intervention when sales are low or maintenance is needed"
  },
  {
    icon: Wrench,
    title: "Easy Payment",
    description: "API and money transfer reduces cost and income loss via non-revenue water"
  }
];

const willingnessToPay = [
  {
    percent: "99%",
    title: "Willing to Pay for AquaBot",
    description:
      "A comprehensive community baseline survey conducted across all seven AquaBot™ communities revealed that 99% of households are willing to pay for water and shift from traditional, often unsafe and unreliable water sources to AquaBot™."
  },
  {
    percent: "1%",
    title: "Not Willing to Pay",
    description:
      "This overwhelming willingness is rooted in the tangible benefits that AquaBot™ brings to rural communities, including reliable access to safe drinking water and significant savings on transportation and opportunity costs."
  }
];

const constructionFeatures = [
  {
    icon: Zap,
    title: "Solar Powered",
    description: "Sustainable energy with maximum sun exposure"
  },
  {
    icon: Smartphone,
    title: "Token System",
    description: "Electronic tokens activate water dispensing automatically"
  },
  {
    icon: CheckCircle,
    title: "Auto-Management",
    description: "Funds automatically deposited for maintenance and expansion"
  }
];

const SolutionTechnology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerImage} alt="AquaBot water dispenser in use" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/85" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="text-cyan-300 font-semibold tracking-widest uppercase mb-4">Solution & Technology</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            The Solution = <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">AquaBot</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            The AquaBot provides push button operation, easily dispensing an accurate amount of water to each user
            at an affordable rate which benefits the community and sustains the operation for many years into the
            future.
          </p>
        </div>
      </section>

      {/* What is the Solution */}
      <section id="solution" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img src={solutionImage} alt="AquaBot in use by the community" className="w-full rounded-2xl shadow-water" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">What is the Solution?</h2>
              {solutionParagraphs.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-water">
            <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">
              Revolutionary Water Access Technology
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutionFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="text-primary flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Community Willingness to Pay */}
      <section className="py-24 bg-gradient-sky">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Community Willingness to Pay</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Contrary to popular belief, many communities in Kenya and across Africa are neither entirely
              impoverished nor incapable of supporting sustainable water services. In fact, when provided with
              access to clean, safe and reliable water systems, many communities are both willing and able to pay
              a modest, affordable fee to ensure continued access, operation, and maintenance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {willingnessToPay.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-8 shadow-water">
                <div className="text-5xl font-bold text-primary mb-4">{item.percent}</div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Technical Sustainability: Technology & Infrastructure Development
              </h2>
              <p className="text-xl font-semibold text-primary">Engineering matters!</p>
              <p className="text-muted-foreground leading-relaxed">
                Many rural water projects are poorly constructed and rely on outdated, inefficient, or poorly
                maintained infrastructure, leading to frequent breakdowns and unreliable access. AquaBot overcomes
                these challenges by leveraging innovative water technologies and building resilient infrastructure
                to ensure long-term access to reliable, affordable, and high-quality water.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Technological sustainability in water services is achieved when the necessary hardware continues to
                function reliably over time, with systems in place for routine maintenance, timely repairs, and
                eventual replacement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The AquaBot addresses these needs by incorporating robust and durable infrastructure, featuring a
                fully automated and solar-powered water dispensing system.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team ensures that each AquaBot is regularly maintained and supported to operate efficiently for
                many years, consistently serving the communities where they are installed.
              </p>
            </div>
            <div>
              <img src={technologyImage} alt="AquaBot water ATM control panel" className="w-full rounded-2xl shadow-water" />
            </div>
          </div>

          {/* Construction & Function */}
          <div className="bg-gradient-sky rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Construction & Function</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The AquaBot is constructed with a tower and platform supporting a water storage tank. Solar panels
                are mounted at the top for security and maximum sun exposure. Each community member receives an
                electronic token that activates the water taps - no caretaker needed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {constructionFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Financial Sustainability */}
          <div className="bg-gradient-water rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-8 h-8" />
              <h3 className="text-2xl font-bold">AquaBot Financial Sustainability</h3>
            </div>
            <p className="text-white/90 leading-relaxed max-w-4xl">
              Financial sustainability ensures that water services can continue uninterrupted over the long term.
              The AquaBot offers a cost-effective alternative by integrating an ATM system that accepts payment for
              dispensed water at affordable and fair rates. Each community member receives an electronic token that
              activates the water taps, ensuring equitable and reliable access. The funds collected from water
              sales are reinvested into the ongoing maintenance, repair, and eventual replacement of the system,
              creating a self-sustaining solution for safe and reliable water access.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionTechnology;
