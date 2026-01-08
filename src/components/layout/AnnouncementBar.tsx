import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Announcement {
  id: string;
  text: string;
  link?: string;
  linkText?: string;
}

const defaultAnnouncements: Announcement[] = [
  {
    id: "1",
    text: "🎉 Flat 20% OFF on your first subscription!",
    link: "/subscriptions",
    linkText: "Subscribe Now",
  },
  {
    id: "2",
    text: "🥤 FREE Detox Juice on orders above ₹999",
    link: "/menu",
    linkText: "Order Now",
  },
  {
    id: "3",
    text: "⚡ New Year Special: Extra meal FREE on weekly plans!",
    link: "/subscriptions",
    linkText: "Claim Offer",
  },
];

interface AnnouncementBarProps {
  announcements?: Announcement[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

export function AnnouncementBar({
  announcements = defaultAnnouncements,
  autoRotate = true,
  rotateInterval = 5000,
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate || announcements.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, announcements.length, rotateInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  if (!isVisible || announcements.length === 0) return null;

  const currentAnnouncement = announcements[currentIndex];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="relative bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 py-2.5 text-sm">
          {announcements.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentAnnouncement.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-center"
            >
              <span className="font-medium">{currentAnnouncement.text}</span>
              {currentAnnouncement.link && (
                <a
                  href={currentAnnouncement.link}
                  className="underline underline-offset-2 font-semibold hover:no-underline"
                >
                  {currentAnnouncement.linkText || "Learn More"}
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          {announcements.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              onClick={goToNext}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
        onClick={() => setIsVisible(false)}
      >
        <X className="w-4 h-4" />
      </Button>

      {/* Progress indicators */}
      {announcements.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-1">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary-foreground"
                  : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
