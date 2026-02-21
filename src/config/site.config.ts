/**
 * Site Configuration Interface
 * 
 * This is THE interface for the template. Edit this file to customize
 * your business website. Everything else is handled automatically.
 */

export interface SiteConfig {
  // Business basics
  name: string;
  tagline: string;
  description: string; // for meta tags
  url: string;
  
  // Theme colors
  colors: {
    primary: string;    // hex
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  
  // Fonts (Google Fonts family names)
  fonts: {
    heading: string;
    body: string;
  };
  
  // Content sections (each optional — only renders if present)
  hero: { 
    image: string; 
    headline: string; 
    subtext: string; 
    cta?: { text: string; url: string } 
  };
  about?: { 
    label?: string;
    image: string; 
    heading: string; 
    text: string; 
    reverse?: boolean 
  };
  testimonials?: { 
    label?: string;
    quotes: Array<{ 
      text: string; 
      author: string; 
      source?: string 
    }> 
  };
  menu?: { 
    label?: string;
    sections: Array<{ 
      name: string; 
      label?: string;
      items: Array<{ 
        name: string; 
        description?: string; 
        price?: string 
      }> 
    }> 
  };
  gallery?: { 
    label?: string;
    images: Array<{ 
      src: string; 
      alt: string 
    }> 
  };
  hours?: { 
    label?: string;
    schedule: Record<string, string>; 
    address: string; 
    phone: string; 
    mapUrl?: string 
  };
  cta?: { 
    heading: string; 
    text: string; 
    buttonText: string; 
    buttonUrl: string 
  };
  
  // Footer
  footer: {
    social?: Array<{ platform: string; url: string }>;
    links?: Array<{ text: string; url: string }>;
  };
  
  // Meta
  demoMode: boolean; // shows "Demo redesign by Misty Step" footer badge
}

// Example: Summit Works - Generic local business placeholder
export const siteConfig: SiteConfig = {
  name: "Summit Works",
  tagline: "Reliable service for modern local businesses",
  description: "Summit Works helps organizations improve operations, strengthen customer experience, and scale with confidence.",
  url: "https://example.com",
  
  colors: {
    primary: "#1F4E5F",
    secondary: "#163744",
    accent: "#F2B84B",
    background: "#F7FAFC",
    text: "#1E293B",
  },
  
  fonts: {
    heading: "Poppins",
    body: "Inter",
  },
  
  hero: {
    image: "/images/hero.jpg",
    headline: "Build a stronger business foundation",
    subtext: "Practical support for teams that want better systems, happier clients, and steady growth.",
    cta: {
      text: "View Services",
      url: "#menu"
    }
  },
  
  about: {
    label: "About",
    image: "/images/about.jpg",
    heading: "Who We Are",
    text: "Summit Works partners with local businesses to simplify operations and improve client outcomes. We combine strategy, hands-on implementation, and ongoing support so teams can focus on what they do best.",
    reverse: false
  },
  
  testimonials: {
    label: "Testimonials",
    quotes: [
      {
        text: "We finally have a process our team can follow. Delivery is faster and clients notice the difference.",
        author: "Jordan Blake",
        source: "Operations Lead"
      },
      {
        text: "Clear communication, smart planning, and no fluff. They helped us fix what was slowing us down.",
        author: "Priya Patel",
        source: "Business Owner"
      },
      {
        text: "The engagement paid for itself in months. We now run with more confidence and less guesswork.",
        author: "Marcus Nguyen",
        source: "General Manager"
      }
    ]
  },
  
  menu: {
    label: "Services",
    sections: [
      {
        name: "Core Services",
        items: [
          { name: "Business Assessment", description: "Current-state review with priority roadmap", price: "From $750" },
          { name: "Workflow Design", description: "Define and document clear team processes", price: "From $1,200" },
          { name: "Service Playbooks", description: "Reusable operating guides for consistent delivery", price: "From $900" }
        ]
      },
      {
        name: "Implementation",
        items: [
          { name: "Systems Setup", description: "Configure tooling and automations around your workflow", price: "From $1,500" },
          { name: "Team Enablement", description: "Training sessions with role-specific playbooks", price: "From $600" },
          { name: "Launch Support", description: "Guided rollout with metrics and checkpoint reviews", price: "From $800" }
        ]
      },
      {
        name: "Ongoing Support",
        items: [
          { name: "Monthly Advisory", description: "Strategy check-ins and issue triage", price: "$450/mo" },
          { name: "Performance Reviews", description: "Quarterly reporting and optimization plan", price: "$350" },
          { name: "Priority Support", description: "Fast-turn guidance for urgent operational blockers", price: "Custom" }
        ]
      }
    ]
  },
  
  gallery: {
    label: "Gallery",
    images: [
      { src: "/images/gallery-1.jpg", alt: "Team planning session in a meeting space" },
      { src: "/images/gallery-2.jpg", alt: "Workspace setup with project materials" },
      { src: "/images/gallery-3.jpg", alt: "Consultant reviewing workflow documentation" },
      { src: "/images/gallery-4.jpg", alt: "Client workshop with whiteboard planning" },
      { src: "/images/gallery-5.jpg", alt: "Project dashboard on laptop screen" },
      { src: "/images/gallery-6.jpg", alt: "Team collaboration during implementation" },
      { src: "/images/gallery-7.jpg", alt: "One-on-one advisory session" },
      { src: "/images/gallery-8.jpg", alt: "Completed workspace process board" }
    ]
  },
  
  hours: {
    label: "Hours",
    schedule: {
      "Monday": "9:00 AM - 6:00 PM",
      "Tuesday": "9:00 AM - 6:00 PM",
      "Wednesday": "9:00 AM - 6:00 PM",
      "Thursday": "9:00 AM - 6:00 PM",
      "Friday": "9:00 AM - 5:00 PM",
      "Saturday": "By Appointment",
      "Sunday": "Closed"
    },
    address: "123 Main Street, Suite 200, Hometown, ST 12345",
    phone: "(615) 555-0123",
    mapUrl: "https://maps.google.com/?q=123+Main+Street+Hometown"
  },
  
  cta: {
    heading: "Ready to improve how your business runs?",
    text: "Book a short intro call and we will map the fastest path to better operations.",
    buttonText: "Schedule a Call",
    buttonUrl: "https://example.com/contact"
  },
  
  footer: {
    social: [
      { platform: "facebook", url: "https://facebook.com/summitworks" },
      { platform: "instagram", url: "https://instagram.com/summitworks" },
      { platform: "twitter", url: "https://twitter.com/summitworks" }
    ],
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" }
    ]
  },
  
  demoMode: true
};
