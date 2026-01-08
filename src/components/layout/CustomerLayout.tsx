import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AnnouncementBar } from "./AnnouncementBar";

interface CustomerLayoutProps {
  children: ReactNode;
  cartItemCount?: number;
  showAnnouncement?: boolean;
}

export function CustomerLayout({ 
  children, 
  cartItemCount = 0,
  showAnnouncement = true 
}: CustomerLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showAnnouncement && <AnnouncementBar />}
      <Navbar cartItemCount={cartItemCount} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
