export interface ContentBlock {
  id: string;
  page: string;
  section: string;
  label: string;
  value: string;
  type: "text" | "textarea";
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  status: "active" | "coming-soon";
  createdAt: string;
}

export interface Submission {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  submittedAt: string;
  read: boolean;
}

export const ADMIN_CREDENTIALS = {
  email: "admin@elshaddai.com",
  password: "Admin@123",
};

export const STORAGE_KEYS = {
  AUTH: "els_admin_auth",
  CONTENT_BLOCKS: "els_content_blocks",
  JOBS: "els_jobs",
  PRODUCTS: "els_products",
  SUBMISSIONS: "els_submissions",
} as const;

export const DEFAULT_CONTENT_BLOCKS: ContentBlock[] = [
  { id: "home-tagline",      page: "Home",     section: "Hero",  label: "Tagline",     value: "PREMIER IT STAFFING & WORKFORCE SOLUTIONS",                                                                        type: "text"     },
  { id: "home-headline",     page: "Home",     section: "Hero",  label: "Headline",    value: "EL-Shaddai Technologies Inc",                                                                                      type: "text"     },
  { id: "home-description",  page: "Home",     section: "Hero",  label: "Description", value: "Connecting America's top businesses with exceptional technology professionals — fast, reliably, and with care.",   type: "textarea" },
  { id: "home-stats-banner", page: "Home",     section: "Stats", label: "Banner Text", value: "Empowering Businesses with Top-Tier IT Talent",                                                                    type: "text"     },
  { id: "about-headline",    page: "About",    section: "Hero",  label: "Headline",    value: "About EL-Shaddai Technologies Inc",                                                                                type: "text"     },
  { id: "about-description", page: "About",    section: "Hero",  label: "Description", value: "Founded on faith, driven by excellence. We are a premier IT staffing firm.",                                      type: "textarea" },
  { id: "services-headline", page: "Services", section: "Hero",  label: "Headline",    value: "Our Services",                                                                                                     type: "text"     },
  { id: "contact-headline",  page: "Contact",  section: "Hero",  label: "Headline",    value: "Let's Start a Conversation",                                                                                       type: "text"     },
];

export const DEFAULT_JOBS: Job[] = [
  {
    id: "job-1",
    title: "Java Developer",
    department: "Developer",
    location: "Hyderabad",
    type: "Full-Time",
    description: "We are looking for an experienced Java Developer to join our team.",
    requirements: "Core Java, Java, JavaScript",
    createdAt: new Date().toISOString(),
  },
];

export const DEFAULT_PRODUCTS: Product[] = [];

export function getStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function setStorage<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function isAdminAuthenticated(): boolean {
  return localStorage.getItem(STORAGE_KEYS.AUTH) === "true";
}

export function adminLogin(email: string, password: string): boolean {
  if (
    email.trim().toLowerCase() === ADMIN_CREDENTIALS.email &&
    password === ADMIN_CREDENTIALS.password
  ) {
    localStorage.setItem(STORAGE_KEYS.AUTH, "true");
    return true;
  }
  return false;
}

export function adminLogout(): void {
  localStorage.removeItem(STORAGE_KEYS.AUTH);
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
