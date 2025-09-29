/**
 * DỮ LIỆU ĐỘI NGŨ GIẢNG VIÊN
 *
 * File này chứa thông tin về đội ngũ giảng viên
 * Dễ dàng cập nhật thông tin mà không cần sửa components
 */

import type { Instructor } from "@/types";

export const instructors: Instructor[] = [
  {
    name: "Giảng viên A",
    title: "Chuyên gia đào tạo giọng nói",
    experience: "15+ năm kinh nghiệm",
    specialties: [
      "Luyện giọng chuyên nghiệp",
      "Đào tạo MC",
      "Kỹ thuật phát thanh",
    ],
    achievements: [
      "Kinh nghiệm làm việc tại VTV",
      "Chuyên gia đào tạo giọng nói",
      "Chứng chỉ Voice Coach quốc tế",
      "Đào tạo hơn 1000 học viên",
    ],
    description:
      "Với hơn 15 năm kinh nghiệm trong lĩnh vực truyền thông và đào tạo, đội ngũ giảng viên đã giúp hàng nghìn học viên tự tin với giọng nói của mình.",
  },
  {
    name: "Giảng viên B",
    title: "Chuyên gia giao tiếp",
    experience: "10+ năm kinh nghiệm",
    specialties: [
      "Kỹ năng giao tiếp",
      "Thuyết trình công sở",
      "Tâm lý học ứng dụng",
    ],
    achievements: [
      "Chuyên môn về Tâm lý học",
      "Chuyên gia đào tạo doanh nghiệp",
      "Tác giả sách về giao tiếp",
      "Huấn luyện viên chuyên nghiệp",
    ],
    description:
      "Chuyên về phát triển kỹ năng giao tiếp và thuyết trình, giúp học viên tự tin trong mọi tình huống giao tiếp.",
  },
  {
    name: "Giảng viên C",
    title: "Chuyên gia kỹ thuật giọng nói",
    experience: "8+ năm kinh nghiệm",
    specialties: [
      "Kỹ thuật phát âm",
      "Luyện giọng cơ bản",
      "Điều trị rối loạn giọng nói",
    ],
    achievements: [
      "Chuyên khoa về giọng nói",
      "Chứng chỉ Speech Therapy",
      "Nghiên cứu về Âm học",
      "Chuyên gia tư vấn giọng nói",
    ],
    description:
      "Kết hợp kiến thức chuyên môn và kỹ thuật để giúp học viên khắc phục các vấn đề về giọng nói một cách khoa học và hiệu quả.",
  },
];

// Helper functions
export const getInstructorByName = (name: string): Instructor | undefined => {
  return instructors.find((instructor) => instructor.name === name);
};

export const getInstructorsBySpecialty = (specialty: string): Instructor[] => {
  return instructors.filter((instructor) =>
    instructor.specialties.some((s) =>
      s.toLowerCase().includes(specialty.toLowerCase()),
    ),
  );
};
