import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Download, FileText, Newspaper } from "lucide-react";
import bannerImage from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (1).jpeg";
import newsImage1 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (9).jpeg";
import newsImage2 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (11).jpeg";
import newsImage3 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (3).jpeg";
import newsImage4 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (5).jpeg";
import impactReportPdf from "@/assets/AquaBot Impact Report 2025.pdf";
import profilePdf from "@/assets/AquaBot Profile.pdf";

const categories = ["All", "News", "Community", "Impact"];

const newsItems = [
  {
    category: "Impact",
    date: "June 2025",
    image: newsImage1,
    title: "AquaBot Surpasses 100,000 Lives Reached Across Kenya",
    excerpt:
      "Our decentralized water systems now serve rural and underserved communities across multiple counties, providing 24/7 access to safe, affordable water through the AquaBot token system.",
  },
  {
    category: "Community",
    date: "April 2025",
    image: newsImage2,
    title: "Community Baseline Survey Reveals 99% Willingness to Pay for Safe Water",
    excerpt:
      "A comprehensive survey across seven AquaBot communities confirmed strong demand for reliable water access, reinforcing the sustainability of our pay-for-use model.",
  },
  {
    category: "News",
    date: "February 2025",
    image: newsImage3,
    title: "AquaBot Expands WASH Training and Capacity Building Programs",
    excerpt:
      "New trainings on safe water handling, hygiene promotion, and system operation and maintenance are equipping local leaders and technicians to sustain water access long-term.",
  },
  {
    category: "News",
    date: "December 2024",
    image: newsImage4,
    title: "Solar-Powered AquaBot Units Roll Out to New ASAL Communities",
    excerpt:
      "New installations in Arid and Semi-Arid Lands bring resilient, solar-powered water infrastructure to communities where water scarcity remains a critical challenge.",
  },
];

const reports = [
  {
    title: "AquaBot Impact Report 2025",
    description:
      "A detailed look at our reach, outcomes, and community impact across the AquaBot program over the past year.",
    file: impactReportPdf,
    fileName: "AquaBot Impact Report 2025.pdf",
  },
  {
    title: "AquaBot Organisation Profile",
    description:
      "An overview of who we are, our mission, and the AquaBot™ model for sustainable water access.",
    file: profilePdf,
    fileName: "AquaBot Profile.pdf",
  },
];

const Newsletter = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredNews =
    activeCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerImage} alt="AquaBot news and reports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/85" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="text-cyan-300 font-semibold tracking-widest uppercase mb-4">Stay Informed</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Newsletter</h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            The latest news, community stories, and impact reports from AquaBot's work bringing sustainable
            water access to communities across Kenya.
          </p>
        </div>
      </section>

      {/* News */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Newspaper className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-widest text-sm">Latest Updates</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">News</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNews.map((item) => (
              <article
                key={item.title}
                className="bg-card rounded-2xl overflow-hidden shadow-water flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge>{item.category}</Badge>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-24 bg-gradient-sky">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <FileText className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-widest text-sm">Publications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Reports</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download our latest reports to learn more about AquaBot's impact and organisational profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reports.map((report) => (
              <div key={report.title} className="bg-card rounded-2xl p-8 shadow-water flex flex-col">
                <div className="text-primary mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-xl text-card-foreground mb-3">{report.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{report.description}</p>
                <Button asChild className="w-fit">
                  <a href={report.file} download={report.fileName}>
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 bg-gradient-water text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-8 leading-relaxed">
            Get news, community stories, and impact reports delivered straight to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg text-foreground bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button type="submit" variant="secondary" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
