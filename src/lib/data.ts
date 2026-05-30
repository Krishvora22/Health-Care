import {
  Stethoscope, Heart, Sparkles, Bone, Baby, Flower2, Smile, Eye, Activity,
  Award, Users, TrendingUp, Star, ShieldCheck, Microscope, HeartHandshake,
  BadgeIndianRupee, Sofa, CheckCircle2,
  type LucideIcon,
  Scale,
  Droplets,
  Wind,
  Leaf,
} from "lucide-react";

export interface Treatment {
  id: string; title: string; description: string; icon: LucideIcon;
}
export const treatments: Treatment[] = [
  { 
    id: "general",   
    title: "General Homoeopathy", 
    description: "Safe, natural, and root-cause primary care for everyday health concerns without harsh chemicals.", 
    icon: Leaf 
  },
  { 
    id: "skin",      
    title: "Skin Disease Treatment", 
    description: "Effective, steroid-free remedies for chronic acne, eczema, psoriasis, and recurring fungal infections.", 
    icon: Sparkles 
  },
  { 
    id: "allergy",   
    title: "Allergy & Respiratory Care", 
    description: "Long-term relief for dust allergies, asthma, chronic cold, and persistent sinus issues.", 
    icon: Wind 
  },
  { 
    id: "hair",      
    title: "Hair Fall & Scalp Care", 
    description: "Natural homoeopathic solutions to treat severe hair loss, stubborn dandruff, and promote healthy regrowth.", 
    icon: Droplets 
  },
  { 
    id: "diabetes",  
    title: "Diabetes Management", 
    description: "Holistic approach to maintaining stable blood sugar levels and preventing diabetic complications.", 
    icon: Activity 
  },
  { 
    id: "weight",    
    title: "Diet & Weight Loss", 
    description: "Personalized nutrition counseling and natural medicines to support healthy, sustainable weight management.", 
    icon: Scale
  },
  { 
    id: "chronic",   
    title: "Joint & Pain Care", 
    description: "Relief for arthritis, back pain, and joint stiffness using deep-acting homoeopathic healing.", 
    icon: Bone 
  },
  { 
    id: "peds",      
    title: "Pediatric Homoeopathy", 
    description: "Gentle, side-effect-free medicines to boost children's immunity and treat childhood allergies.", 
    icon: Baby 
  },
];

export interface Testimonial {
  id: string; name: string; location: string; rating: number; quote: string; avatar: string;
}
export const testimonials: Testimonial[] = [
  { id: "t1", name: "Rahul Mangukiya", location: "Nana Varachha, Surat", rating: 5, quote: "Dr. Daya completely cured my chronic skin allergy. I had tried multiple allopathic doctors before, but her homoeopathic treatment worked wonders without any side effects.", avatar: "https://placehold.co/80x80/EAF6FF/4DA6FF?text=RM" },
  { id: "t2", name: "Sanjay Patel", location: "Katargam, Surat", rating: 5, quote: "Her approach to diabetes management is excellent. She doesn't just give medicine; she guides you on diet and lifestyle. My sugar levels are finally stable.", avatar: "https://placehold.co/80x80/EAF6FF/4DA6FF?text=SP" },
  { id: "t3", name: "Neha Gajera", location: "Sarthana, Surat", rating: 5, quote: "I was suffering from severe hair fall and dandruff for two years. Within 3 months of consulting at Akshar Clinic, my hair fall has almost stopped entirely.", avatar: "https://placehold.co/80x80/EAF6FF/4DA6FF?text=NG" },
  { id: "t4", name: "Aarti Moradiya", location: "Mota Varachha, Surat", rating: 5, quote: "Very patient and knowledgeable doctor. She listens to all your problems calmly. Her treatment for my daughter's dust allergy has been incredibly effective.", avatar: "https://placehold.co/80x80/EAF6FF/4DA6FF?text=AM" },
  { id: "t5", name: "Keval Vaghasiya", location: "Kamrej, Surat", rating: 5, quote: "Best homoeopathic doctor in Surat! I visited for a stubborn fungal infection. Dr. Daya's diagnosis was spot on, and the recovery was much faster than I expected.", avatar: "https://placehold.co/80x80/EAF6FF/4DA6FF?text=KV" },
  { id: "t6", name: "Pooja Desai", location: "Vesu, Surat", rating: 5, quote: "The clinic environment is very positive. Dr. Daya's weight loss and diet counseling helped me lose 8 kgs naturally over six months alongside her medication.", avatar: "https://placehold.co/80x80/EAF6FF/4DA6FF?text=PD" },
  { id: "t7", name: "Jignesh Dobariya", location: "Adajan, Surat", rating: 4, quote: "I highly recommend Akshar Health & Wellness. True experts in homoeopathy. The medicines are affordable and the results speak for themselves.", avatar: "https://placehold.co/80x80/EAF6FF/4DA6FF?text=JD" },
  { id: "t8", name: "Meera Bhalala", location: "Punagam, Surat", rating: 5, quote: "She is a lifesaver. Had chronic eczema that kept returning. Since starting my course with Dr. Daya, my skin has been completely clear for a whole year.", avatar: "https://placehold.co/80x80/EAF6FF/4DA6FF?text=MB" },
];

export interface BlogPost {
  id: string; title: string; excerpt: string; category: string; author: string; date: string; readTime: string; image: string;
}
export const blogPosts: BlogPost[] = [
  { id: "b1", title: "Managing Dust Allergies Naturally in Surat", excerpt: "How homoeopathy builds your immune response against common environmental triggers instead of just suppressing symptoms.", category: "Allergy Care", author: "Dr. Daya Vekariya", date: "May 20, 2026", readTime: "4 min read", image: "https://placehold.co/600x340/EAF6FF/4DA6FF?text=Allergy+Care" },
  { id: "b2", title: "Diet & Homoeopathy: The Perfect Match for Diabetes", excerpt: "Why medication alone isn't enough, and how combining natural remedies with the right Gujarati diet controls blood sugar.", category: "Diabetes",   author: "Dr. Daya Vekariya", date: "May 05, 2026", readTime: "6 min read", image: "https://placehold.co/600x340/EAF6FF/4DA6FF?text=Diabetes+Diet" },
  { id: "b3", title: "Why Steroid Creams Fail for Chronic Skin Issues",          excerpt: "Understanding the rebound effect of topical steroids and how homoeopathy heals skin conditions from the inside out.",                category: "Dermatology", author: "Dr. Daya Vekariya", date: "Apr 18, 2026", readTime: "5 min read", image: "https://placehold.co/600x340/EAF6FF/4DA6FF?text=Skin+Care" },
];

export interface FaqItem { id: string; question: string; answer: string; }
export const faqItems: FaqItem[] = [
  { id: "f1", question: "How do I book an appointment with Dr. Daya?", answer: "You can book directly on this site using the Book Appointment button, message us on WhatsApp, or call our front desk at Akshar Clinic during working hours." },
  { id: "f2", question: "Does homoeopathic medicine act slowly?", answer: "This is a common myth. For acute conditions like fevers or sudden allergies, homoeopathy can act very fast. For chronic issues like old skin diseases, it takes time because it removes the disease from the root." },
  { id: "f3", question: "Do I need to avoid certain foods during treatment?", answer: "It depends on your condition. Dr. Daya generally advises avoiding very strong-smelling foods (like raw onion or garlic) immediately before or after taking the sweet pills, as it can neutralize the medicine's effect." },
  { id: "f4", question: "Are homoeopathic medicines safe for children?", answer: "Absolutely. Homoeopathic medicines are completely natural, chemical-free, and have no side effects, making them highly recommended for infants and children." },
  { id: "f5", question: "Can I take homoeopathy along with my allopathic medicines?", answer: "Yes, you can. Especially for conditions like diabetes or blood pressure, you should not stop your allopathic medicines abruptly. Dr. Daya will guide you on how to manage both safely." },
  { id: "f6", question: "What is included in the consultation?", answer: "A detailed case-taking process where Dr. Daya understands your physical symptoms, medical history, and emotional well-being to prescribe the exact constitutional remedy for you." },
  { id: "f7", question: "Do you offer courier services for medicines?", answer: "Yes, for our regular and out-of-town patients, we offer medicine courier services after an online or telephone consultation." },
  { id: "f8", question: "What payment methods do you accept?", answer: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and direct bank transfers." },
];

export interface Stat { id: string; value: number; suffix: string; label: string; icon: LucideIcon; }
export const stats: Stat[] = [
  { id: "s1", value: 20,    suffix: "+",    label: "Years of Experience", icon: Award },
  { id: "s2", value: 10000, suffix: "+",    label: "Patients Treated",    icon: Users },
  { id: "s3", value: 95,    suffix: "%",    label: "Success Rate",        icon: TrendingUp },
  { id: "s4", value: 4.9,   suffix: "/5",   label: "Patient Rating",      icon: Star },
];

export interface PricingPlan {
  id: string; name: string; price: number; currency: string; features: string[]; isPopular: boolean;
}
export const pricingPlans: PricingPlan[] = [
  { id: "p1", name: "Consultation Only",    price: 400,  currency: "₹", isPopular: false, features: ["In-depth case taking", "First diagnosis", "Dietary advice", "Valid for 7 days"] },
  { id: "p2", name: "15-Days Course", price: 800, currency: "₹", isPopular: true,  features: ["Doctor consultation", "15 days homoeopathic medicine", "Diet chart", "Follow-up support on WhatsApp"] },
  { id: "p3", name: "1-Month Package",  price: 1500, currency: "₹", isPopular: false, features: ["Doctor consultation", "1 month complete medicine course", "Lifestyle & diet planning", "Priority appointment for follow-up"] },
];

export interface WhyReason { id: string; title: string; description: string; icon: LucideIcon; }
export const whyChooseUs: WhyReason[] = [
  { id: "w1", title: "20+ Years Experience",   description: "Decades of successful clinical practice across complex chronic diseases.", icon: Award },
  { id: "w2", title: "Safe & Zero Side Effects",   description: "100% natural homoeopathic remedies safe for all ages, including infants.",     icon: ShieldCheck },
  { id: "w3", title: "Root Cause Treatment",    description: "We don't just suppress symptoms; we eliminate the disease from its core.",   icon: Leaf },
  { id: "w4", title: "Holistic Healing",  description: "Treatment plans considering your physical, mental, and emotional health.",                       icon: HeartHandshake },
  { id: "w5", title: "Affordable Care", description: "Transparent, reasonable pricing with medicine packages included.",             icon: BadgeIndianRupee },
  { id: "w6", title: "Personalized Diet Plans",       description: "Customized nutrition guidance to accelerate your healing process.",             icon: CheckCircle2 },
];

export interface GalleryImage { id: string; src: string; alt: string; category: string; height: number; }
export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://placehold.co/600x800/EAF6FF/4DA6FF?text=Clinic+Entrance",       alt: "Akshar Clinic entrance",          category: "Reception",   height: 380 },
  { id: "g2", src: "https://placehold.co/600x600/EAF6FF/4DA6FF?text=Consultation",    alt: "Dr. Daya's Consultation room",         category: "Consultation",height: 280 },
  { id: "g3", src: "https://placehold.co/600x900/EAF6FF/4DA6FF?text=Pharmacy",       alt: "Homoeopathic Medicines",      category: "Equipment",   height: 440 },
  { id: "g4", src: "https://placehold.co/600x700/EAF6FF/4DA6FF?text=Waiting+Area",    alt: "Patient waiting area",       category: "Waiting Area",height: 340 },
  { id: "g5", src: "https://placehold.co/600x600/EAF6FF/4DA6FF?text=Front+Desk",      alt: "Front desk",                category: "Reception",   height: 280 },
  { id: "g6", src: "https://placehold.co/600x800/EAF6FF/4DA6FF?text=Treatment+Room",  alt: "Examination area",            category: "Consultation",height: 380 },
  { id: "g7", src: "https://placehold.co/600x700/EAF6FF/4DA6FF?text=Remedies",             alt: "Natural remedies dispensing",               category: "Equipment",   height: 320 },
  { id: "g8", src: "https://placehold.co/600x900/EAF6FF/4DA6FF?text=Lounge",          alt: "Patient seating",            category: "Waiting Area",height: 440 },
  { id: "g9", src: "https://placehold.co/600x600/EAF6FF/4DA6FF?text=Doctor+Desk",       alt: "Doctor's desk",          category: "Consultation",height: 260 },
];

export const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Treatments",   href: "#treatments" },
  { label: "Results",      href: "#results" },
  { label: "Pricing",      href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog",         href: "#blog" },
  { label: "Contact",      href: "#contact" },
];