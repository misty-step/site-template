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
    image: string; 
    heading: string; 
    text: string; 
    reverse?: boolean 
  };
  testimonials?: { 
    quotes: Array<{ 
      text: string; 
      author: string; 
      source?: string 
    }> 
  };
  menu?: { 
    sections: Array<{ 
      name: string; 
      items: Array<{ 
        name: string; 
        description?: string; 
        price?: string 
      }> 
    }> 
  };
  gallery?: { 
    images: Array<{ 
      src: string; 
      alt: string 
    }> 
  };
  hours?: { 
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

// Example: The Copper Kettle - A Nashville Restaurant
export const siteConfig: SiteConfig = {
  name: "The Copper Kettle",
  tagline: "Southern Comfort, Reimagined",
  description: "Experience farm-to-table Southern cuisine in the heart of Nashville. Fresh ingredients, bold flavors, and warm hospitality await.",
  url: "https://thecopperkettle.com",
  
  colors: {
    primary: "#8B4513",      // Saddle Brown
    secondary: "#2C1810",   // Dark Brown
    accent: "#D4A574",       // Warm Tan
    background: "#FDF8F3",  // Warm White
    text: "#2C1810",        // Dark Brown
  },
  
  fonts: {
    heading: "Playfair Display",
    body: "Lora",
  },
  
  hero: {
    image: "/images/hero.jpg",
    headline: "Welcome to The Copper Kettle",
    subtext: "Where Southern tradition meets culinary innovation in the heart of Nashville",
    cta: {
      text: "View Menu",
      url: "#menu"
    }
  },
  
  about: {
    image: "/images/about.jpg",
    heading: "Our Story",
    text: "Founded in 2015, The Copper Kettle brings together the rich traditions of Southern cooking with modern culinary techniques. Our chefs source ingredients from local farms to create dishes that honor our heritage while pushing the boundaries of flavor. Every meal is a celebration of community, crafted with love and served with warmth.",
    reverse: false
  },
  
  testimonials: {
    quotes: [
      {
        text: "The best fried chicken I've ever had. Perfectly crispy, incredibly flavorful. This is Nashville comfort food at its finest.",
        author: "James Mitchell",
        source: "Nashville Food Journal"
      },
      {
        text: "A true gem in Music City. The Copper Kettle has become our go-to for special occasions. The hospitality is unmatched.",
        author: "Sarah & David Thompson",
        source: "Local Residents"
      },
      {
        text: "I've traveled all over the South for food, and this place stands out. The attention to detail in every dish is remarkable.",
        author: "Chef Marcus Williams",
        source: "James Beard Nominee"
      }
    ]
  },
  
  menu: {
    sections: [
      {
        name: "Starters",
        items: [
          { name: "Fried Green Tomatoes", description: "Crispy green tomatoes with comeback sauce", price: "$12" },
          { name: "Biscuits & Gravy", description: "House-made biscuits with sausage gravy", price: "$10" },
          { name: "Smoked Wings", description: "Dry-rubbed wings with blue cheese dip", price: "$14" }
        ]
      },
      {
        name: "Mains",
        items: [
          { name: "Southern Fried Chicken", description: "12-hour brined, double-fried, honey glaze", price: "$24" },
          { name: "Catfish & Hushpuppies", description: "Crispy cornmeal-crusted catfish", price: "$22" },
          { name: "Smoked Brisket", description: "14-hour oak-smoked prime brisket", price: "$28" },
          { name: "Shrimp & Grits", description: "Garlic shrimp over cheesy grits", price: "$26" }
        ]
      },
      {
        name: "Sides",
        items: [
          { name: "Collard Greens", description: "Slow-cooked with ham hock", price: "$7" },
          { name: "Mac & Cheese", description: "Three-cheese blend, breadcrumb topping", price: "$8" },
          { name: "Sweet Potato Mash", description: "Brown sugar marshmallow crust", price: "$7" }
        ]
      },
      {
        name: "Desserts",
        items: [
          { name: "Peach Cobbler", description: "House-made with vanilla ice cream", price: "$9" },
          { name: "Banana Pudding", description: "Layered vanilla wafer pudding", price: "$8" },
          { name: "Chocolate Pecan Pie", description: "With bourbon whipped cream", price: "$9" }
        ]
      }
    ]
  },
  
  gallery: {
    images: [
      { src: "/images/gallery-1.jpg", alt: "Restaurant interior with rustic wooden tables" },
      { src: "/images/gallery-2.jpg", alt: "Plated fried chicken with sides" },
      { src: "/images/gallery-3.jpg", alt: "Chef preparing food in the kitchen" },
      { src: "/images/gallery-4.jpg", alt: "Outdoor patio seating area" },
      { src: "/images/gallery-5.jpg", alt: "Smoked brisket on a cutting board" },
      { src: "/images/gallery-6.jpg", alt: "Dessert platter with cobbler and pie" },
      { src: "/images/gallery-7.jpg", alt: "Craft cocktails at the bar" },
      { src: "/images/gallery-8.jpg", alt: "Happy customers at dinner" }
    ]
  },
  
  hours: {
    schedule: {
      "Monday": "Closed",
      "Tuesday": "11:00 AM - 9:00 PM",
      "Wednesday": "11:00 AM - 9:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 10:00 PM",
      "Saturday": "10:00 AM - 10:00 PM",
      "Sunday": "10:00 AM - 8:00 PM"
    },
    address: "123 Broadway, Nashville, TN 37201",
    phone: "(615) 555-0123",
    mapUrl: "https://maps.google.com/?q=123+Broadway+Nashville+TN"
  },
  
  cta: {
    heading: "Reserve Your Table",
    text: "Join us for an unforgettable dining experience. Reservations recommended for weekend visits.",
    buttonText: "Book Now",
    buttonUrl: "https://opentable.com"
  },
  
  footer: {
    social: [
      { platform: "facebook", url: "https://facebook.com/thecopperkettle" },
      { platform: "instagram", url: "https://instagram.com/thecopperkettle" },
      { platform: "twitter", url: "https://twitter.com/thecopperkettle" }
    ],
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" }
    ]
  },
  
  demoMode: true
};
