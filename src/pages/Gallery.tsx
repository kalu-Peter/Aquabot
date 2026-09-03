import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Images, ChevronDown } from "lucide-react";

import elijahPhoto from "@/assets/Elijah Nzuki.jpeg";
import estherPhoto from "@/assets/Esther Photo.jpg";
import boardChairPhoto from "@/assets/Board Chairman.jpeg";
import calebPhoto from "@/assets/Wash PC.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (1).jpeg";
import img3 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (2).jpeg";
import img4 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (3).jpeg";
import img5 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (4).jpeg";
import img6 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (5).jpeg";
import img7 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (6).jpeg";
import img8 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (7).jpeg";
import img9 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (8).jpeg";
import img10 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (9).jpeg";
import img11 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (10).jpeg";
import img12 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (11).jpeg";
import img13 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (12).jpeg";
import img14 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (13).jpeg";
import img15 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.04 (14).jpeg";
import img16 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05.jpeg";
import img17 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (1).jpeg";
import img18 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (2).jpeg";
import img19 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (3).jpeg";
import img20 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (4).jpeg";
import img21 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (5).jpeg";
import img22 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (6).jpeg";
import img23 from "@/assets/WhatsApp Image 2026-08-26 at 10.38.05 (7).jpeg";
import founderPartnersImage from "@/assets/founder partners.jpeg";

const teamImages = [
  { src: elijahPhoto, alt: "Elijah Nzuki, Managing Director" },
  { src: estherPhoto, alt: "Esther, Director of Operations" },
  { src: boardChairPhoto, alt: "Board Chairperson" },
  { src: calebPhoto, alt: "Caleb Mukwabi Simiyu, WASH Programme Coordinator" },
];

const communityImages = [
  img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, founderPartnersImage,
].map((src, index) => ({ src, alt: `AquaBot community photo ${index + 1}` }));

const galleryImages = [...teamImages, ...communityImages];

const PAGE_SIZE = 20;

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [lightboxApi, setLightboxApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!lightboxApi) return;
    setActiveIndex(lightboxApi.selectedScrollSnap());
    lightboxApi.on("select", () => setActiveIndex(lightboxApi.selectedScrollSnap()));
  }, [lightboxApi]);

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;
  const activeImage = selectedIndex !== null ? visibleImages[activeIndex] : null;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Banner */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-water">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-white/90 mb-4">
            <Images className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-widest text-sm">Our Moments</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            A look at AquaBot's work in communities across Kenya, from installations
            to training sessions and the people we serve.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {visibleImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group aspect-square overflow-hidden rounded-xl shadow-water bg-card cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < PAGE_SIZE ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                See More
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
      >
        <DialogContent className="max-w-none w-screen h-screen sm:h-auto sm:max-w-5xl bg-black/95 border-none shadow-none p-0 sm:rounded-none flex items-center justify-center">
          <DialogTitle className="sr-only">
            {activeImage?.alt ?? "Gallery image"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Swipe or use the arrow buttons to browse gallery images.
          </DialogDescription>

          {selectedIndex !== null && (
            <Carousel
              opts={{ startIndex: selectedIndex, loop: true }}
              setApi={setLightboxApi}
              className="w-full"
            >
              <CarouselContent className="-ml-0">
                {visibleImages.map((image) => (
                  <CarouselItem key={image.src} className="pl-0 flex items-center justify-center">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="max-h-[85vh] w-auto max-w-full object-contain select-none"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white" />
              <CarouselNext className="right-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                {activeIndex + 1} / {visibleImages.length}
              </div>
            </Carousel>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
