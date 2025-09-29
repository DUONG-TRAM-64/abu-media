// Nova Media course constants
export const COURSES = {
  BASIC: {
    id: "basic",
    name: "Khóa Cơ Bản",
    price: 6000000,
    duration: "8 tuần",
    description: "Luyện phát âm, giọng chuẩn, ngữ điệu cơ bản",
  },
  ADVANCED: {
    id: "advanced",
    name: "Khóa Nâng Cao",
    price: 9000000,
    duration: "12 tuần",
    description:
      "Cảm xúc, kỹ thuật sân khấu, biên soạn - viết bài, thuyết trình",
  },
  GROUP: {
    id: "group",
    name: "Học Nhóm (4 người)",
    price: 20000000,
    duration: "10 tuần",
    description: "Học tập thể từ 3 cá nhân trở lên, có xuất VAT",
    hasVAT: true,
  },
} as const;

// Contact information
export const CONTACT_INFO = {
  PHONE: "0123456789", // TODO: Replace with actual phone
  EMAIL: "info@novamedia.vn", // TODO: Replace with actual email
  ZALO: "0123456789", // TODO: Replace with actual Zalo
  FACEBOOK: "https://facebook.com/novamedia", // TODO: Replace with actual Facebook
  ADDRESS: "Địa chỉ Nova Media", // TODO: Replace with actual address
} as const;

// Form validation constants
export const VALIDATION = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  MESSAGE_MIN_LENGTH: 10,
  MESSAGE_MAX_LENGTH: 500,
  PHONE_LENGTH: 10,
} as const;

// UI Constants
export const UI = {
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 300,
  TOAST_DURATION: 3000,
} as const;

// SEO Constants
export const SEO = {
  SITE_NAME: "Nova Media",
  SITE_DESCRIPTION:
    "Trung tâm đào tạo kỹ năng giọng nói toàn diện - từ cơ bản đến chuyên nghiệp",
  SITE_URL: "https://novamedia.vn", // TODO: Replace with actual URL
  SITE_KEYWORDS:
    "luyện giọng, MC, thuyết trình, phát âm, giọng nói, Nova Media",
} as const;

// API endpoints (for future use)
export const API_ENDPOINTS = {
  BOOKING: "/api/booking",
  CONTACT: "/api/contact",
  NEWSLETTER: "/api/newsletter",
} as const;

export type CourseType = keyof typeof COURSES;
