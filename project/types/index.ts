/**
 * TYPES DEFINITION CHO NOVA MEDIA WEBSITE
 *
 * File này chứa tất cả TypeScript interfaces và types
 * được sử dụng trong toàn bộ ứng dụng
 */

// ===== COURSE TYPES =====
export interface Course {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  duration: string;
  sessions: string;
  students: string;
  level: "Cơ bản" | "Trung cấp" | "Nâng cao" | "Linh hoạt";
  popular?: boolean;
  description: string;
  features: string[];
  benefits: string[];
  suitable: string[];
  hasVAT?: boolean;
}

// ===== INSTRUCTOR TYPES =====
export interface Instructor {
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  achievements: string[];
  description: string;
  avatar?: string;
}

// ===== TESTIMONIAL TYPES =====
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  course?: string;
}

// ===== BOOKING FORM TYPES =====
export interface BookingFormData {
  // Thông tin cá nhân
  fullName: string;
  email: string;
  phone: string;

  // Thông tin khóa học
  courseId: string;
  experience: "Chưa có kinh nghiệm" | "Có ít kinh nghiệm" | "Có kinh nghiệm";
  goals: string[];

  // Lịch học
  preferredSchedule: string[];
  startDate: string;

  // Ghi chú
  notes?: string;

  // Marketing
  hearAboutUs: string;
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}

// ===== NAVIGATION TYPES =====
export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

// ===== COMPANY INFO TYPES =====
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  socialMedia: {
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
}

// ===== STATS TYPES =====
export interface Stat {
  label: string;
  value: string;
  description?: string;
}
