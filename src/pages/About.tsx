import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, HeartHandshake, Wrench, ShieldCheck } from "lucide-react";
import bannerImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (1).jpeg";
import teamImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (2).jpeg";
import visionMissionImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (3).jpeg";
import inspirationImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (6).jpeg";
import approachImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (4).jpeg";
import whatWeDoBg from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (11).jpeg";
import targetAreasImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (9).jpeg";

const whatWeDo = [
  {
    number: "01",
    title: "Project Scoping, Mapping, and Community Baseline Surveys",
    description:
      "We apply an integrated approach that combines project scoping, geospatial mapping, and community baseline surveys to ensure water solutions are well-targeted, data-driven, and responsive to local needs. Through detailed field assessments and geo-mapping, we identify water-stressed communities, existing water sources, population dynamics, and infrastructure gaps."
  },
  {
    number: "02",
    title: "Development of AquaBots Water Systems",
    description:
      "We design and develop AquaBot systems that provide reliable 24/7 access to safe water. The systems combine efficient, automated infrastructure with cutting-edge technology, ensuring continuous service, technological sustainability, affordability, and ease of accessibility for communities."
  },
  {
    number: "03",
    title: "Operation, Maintenance, and Management of AquaBots water systems",
    description:
      "We are responsible for the ongoing operation, maintenance, and management of its water systems, ensuring long-term functionality and sustainability. Communities pay an affordable price for safe water, helping to cover operational costs and promote financial sustainability."
  },
  {
    number: "04",
    title: "WASH promotion",
    description:
      "Raising awareness and promoting improved sanitation and hygiene practices through participatory approaches such as Community-Led Total Sanitation (CLTS), CHAST (Children's Hygiene and Sanitation Training), and PHAST (Participatory Hygiene and Sanitation Transformation)."
  },
  {
    number: "05",
    title: "WASH Trainings and Capacity Building",
    description:
      "Strengthening the knowledge and skills of community members, local leaders, institutions, and service providers through targeted WASH trainings. These include sanitation and hygiene promotion, safe water handling and treatment, operation and maintenance (O&M) of water systems, environmental sanitation, and behavior change communication. The trainings aim to build local capacity, enhance ownership, and ensure the sustainability of WASH interventions."
  },
  {
    number: "06",
    title: "Policy and Advocacy",
    description:
      "Engaging government institutions, community leaders, and key stakeholders to influence, support, and strengthen WASH-related policies, strategies, and regulatory frameworks. This includes evidence-based advocacy, participation in policy development and review processes, alignment with national and county WASH priorities, and promotion of inclusive, sustainable, and community-centered WASH service delivery."
  }
];

const approachPillars = [
  {
    icon: HeartHandshake,
    title: "Government, Community & Stakeholder Engagement",
    description:
      "AquaBot prioritizes inclusive partnerships with local communities, governments, and key stakeholders. Many traditional water projects fail due to a lack of community buy-in and government alignment. Our approach ensures that all stakeholders are actively involved from project inception to execution, fostering acceptance, community buy in and long-term sustainability."
  },
  {
    icon: Wrench,
    title: "Technology & Infrastructure Development",
    lead: "Engineering matters!",
    description:
      "Many rural water projects are poorly constructed and rely on outdated, inefficient, or poorly maintained infrastructure, leading to frequent breakdowns and unreliable access. AquaBot overcomes these challenges by leveraging innovative water technologies and building resilient infrastructure to ensure long-term access to reliable, affordable, and high-quality water."
  },
  {
    icon: ShieldCheck,
    title: "AquaBot Sustainability Approach",
    description:
      "One of the biggest failures of conventional water projects is their lack of Social, Technical, financial and operational sustainability, which often leads to system breakdowns and wasted investments.\n\nSocial sustainable intervention is community integrated, inclusive, culturally sensitive, and community needs-based. To enhance the social sustainability in AquaBot we engage the community during the entire implementation of the project through, Community and stakeholder engagement, Community Baseline survey, WASH Trainings, WASH household door to door campaigns, Community sensitizations, and the final AquaBot community launch."
  }
];

const benefits = [
  {
    title: "User Friendly Design",
    description:
      "Prioritizing accessibility, AquaBot™ features simple to use allowing everyone in the community, regardless of age, technical expertise, or literacy level, to dispense water the with ease."
  },
  {
    title: "Durability and Reliability",
    description:
      "Built to withstand harsh environments and constant use, AquaBot™ utilizes robust, weather-resistant materials designed for low maintenance. This ensures long-term functionality in remote locations, minimizing disruptions to clean and safe water access."
  },
  {
    title: "Scalable and Modular Design",
    description:
      "AquaBot™ is designed with scalability in mind, enabling expansion to underserved regions across Kenya. This includes replicating the model in areas with similar challenges and leveraging data driven strategies to identify and prioritize high-need communities nationwide. AquaBot™ units are also designed in a modular fashion, allowing for easy expansion within a community as water needs grow. This flexibility ensures the system can adapt to changing population dynamics and accommodate future growth, future-proofing the solution."
  },
  {
    title: "Self-Sustaining Model",
    description:
      "The token system promotes community involvement and covers maintenance costs, potentially creating a more long term solution compared to options requiring constant external funding. Collected token fees from users are channeled towards maintenance, repairs, and potential upgrades."
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerImage} alt="AquaBot community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/85" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="text-cyan-300 font-semibold tracking-widest uppercase mb-4">Organisation Profile</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">AquaBots</h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We provide sustainable access to safe water, sanitation, and hygiene for rural and underserved
            communities in Kenya and beyond.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AQUABOTS is a registered social enterprise dedicated to providing sustainable access to safe water,
                sanitation, and hygiene (WASH) for rural and underserved communities in Kenya and beyond. We achieve
                this through innovative, market-based solutions that address the unique challenges of these
                communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are the developers of AquaBot™ systems, a revolutionary decentralized water technology designed
                for rural and underserved areas. Our systems combine cutting-edge technology, sustainable
                management practices, and a resilient financial model to ensure communities have reliable access to
                clean and safe water.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our holistic approach combines community engagement, results-oriented WASH programs, and enhanced
                sustainability to deliver lasting community impact.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={teamImage} alt="The AquaBot team" className="w-full rounded-2xl shadow-water" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-sky">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <img
            src={visionMissionImage}
            alt="AquaBot water in action"
            className="w-full h-full min-h-[320px] object-cover rounded-2xl shadow-water"
          />
          <div className="flex flex-col gap-8">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-water">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading provider of sustainable access to safe water, sanitation, and hygiene for rural
                and underserved communites in Kenya and beyond.
              </p>
            </div>
            <div className="bg-gradient-water rounded-2xl p-8 md:p-10 text-white shadow-water">
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To transform lives in rural and underserved communities by providing sustainable access to safe
                water through decentralised AquaBot systems and a holistic, impact-driven WASH programmatic approach
                grounded in sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={inspirationImage}
                alt="A child tapping their AquaBot card"
                className="w-full rounded-2xl shadow-water"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Inspiration Behind AquaBot</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The AquaBot was inspired out of a deep commitment to transform lives by providing sustainable,
                long-term solutions to water challenges in rural and underserved communities and the need to ensure
                that every donor contribution leads to real, measurable change going beyond temporary aid to
                establish water systems that remain functional, accessible, and impactful for generations. By
                integrating innovative technology, community engagement, and financial sustainability, AquaBot
                ensures that investments in clean and safe water create lasting health, economic empowerment, and
                social benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={whatWeDoBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeDo.map((item) => (
              <div key={item.number} className="bg-card rounded-2xl p-8 shadow-water flex gap-5">
                <div className="text-2xl font-bold text-primary shrink-0">{item.number}</div>
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Approach</h2>
              <h3 className="text-xl font-semibold text-primary">A Brief Story About The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                In response to the severe water challenges facing many regions in Kenya, we developed AquaBot™, a
                decentralized water initiative that integrates cutting-edge technology, sustainable management, and
                innovative financial sustainability to ensure reliable access to clean and safe water.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                AquaBot™ is a fully automated, community-integrated water solution designed specifically for rural
                and underserved communities. This innovative approach ensures long-term sustainability by managing
                every stage of the process, from scoping and site assessments to drilling and full AquaBot
                infrastructure development, while also guaranteeing ongoing management, operation, and maintenance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each unit serves at least 1,000 people and is installed alongside a professionally drilled deep well
                to ensure a steady and safe water supply. AquaBot combines a robust water treatment system and a
                push-button water ATM, offering communities 24/7 access to safe water at an affordable rate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The AquaBot model also includes community baseline surveys, WASH (Water, Sanitation, and Hygiene)
                promotion, and continuous local engagement to align the system with community needs and practices.
                Operating on a pay-for-use model, AquaBot ensures affordability while generating the revenue needed
                to cover maintenance and upkeep.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Funds collected from water sales are automatically deposited into a dedicated Management Fund
                Account, which is used exclusively for repairs, parts replacement, and routine servicing of the
                water system. Our skilled technical team conducts regular preventive maintenance and is committed
                to a quick response for repairs, minimizing downtime and disruption to service delivery.
              </p>
            </div>
            <div>
              <img src={approachImage} alt="AquaBot solar-powered water tower" className="w-full rounded-2xl shadow-water" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-card rounded-2xl p-8 shadow-water">
                  <div className="text-primary mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-lg text-card-foreground mb-3">{pillar.title}</h4>
                  {pillar.lead && <p className="font-medium text-foreground mb-2">{pillar.lead}</p>}
                  {pillar.description.split("\n\n").map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Areas */}
      <section className="py-24 bg-gradient-water text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Target Areas</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col gap-8">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-5xl font-bold mb-4">90%</div>
                <h3 className="text-xl font-semibold mb-3">Arid and Semi-Arid Lands (ASALs)</h3>
                <p className="text-white/90 leading-relaxed">
                  Rural communities where water scarcity is prevalent and access to clean water is a critical need.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-5xl font-bold mb-4">10%</div>
                <h3 className="text-xl font-semibold mb-3">Urban Informal Settlements (Slums)</h3>
                <p className="text-white/90 leading-relaxed">
                  Densely populated areas characterized by inadequate access to clean water and sanitation
                  facilities. The World Bank report while 85% of Kenya's urban population has access to safe
                  drinking water.
                </p>
              </div>
            </div>
            <img
              src={targetAreasImage}
              alt="A community member collecting water in an arid region"
              className="w-full h-full min-h-[320px] object-cover rounded-2xl shadow-water"
            />
          </div>
        </div>
      </section>

      {/* Benefit & Gain */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Benefit & Gain</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`rounded-2xl p-8 ${index % 2 === 0 ? "bg-secondary" : "bg-gradient-water text-white"}`}
              >
                <h3 className={`font-semibold text-xl mb-3 ${index % 2 === 0 ? "text-foreground" : "text-white"}`}>
                  {benefit.title}
                </h3>
                <p className={`leading-relaxed ${index % 2 === 0 ? "text-muted-foreground" : "text-white/90"}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You / Closing */}
      <section className="py-24 bg-gradient-sky">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Thank You</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Join us in transforming water access for over 100,000 People
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-water flex flex-col items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-card-foreground">Karen, Karengata Park - Nairobi County</span>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-water flex flex-col items-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-card-foreground">+254-757-594-469</span>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-water flex flex-col items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-card-foreground">info@aquabots.org</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
