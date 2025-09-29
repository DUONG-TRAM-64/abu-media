/**
 * DỮ LIỆU KHÓA HỌC
 *
 * File này chứa tất cả thông tin về các khóa học
 * Dễ dàng chỉnh sửa nội dung mà không cần động vào components
 */

import type { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "co-ban",
    title: "Khóa Cơ Bản",
    subtitle: "Luyện phát âm, giọng chuẩn, ngữ điệu cơ bản",
    price: "6.000.000",
    originalPrice: "7.000.000",
    duration: "8 tuần",
    sessions: "16 buổi",
    students: "6-8 học viên",
    level: "Cơ bản",
    popular: true,
    description:
      "Học tất tần tật về giọng từ những gì cơ bản nhất: luyện âm, luyện phát âm, luyện ngữ thanh. Bổ sung mặt ngôn ngữ, cảm xúc, hình thái.",
    features: [
      "Luyện âm cơ bản từ A-Z",
      "Luyện phát âm chuẩn mực",
      "Luyện ngữ thanh và điệu bộ",
      "Ngôn ngữ cơ thể và biểu cảm",
      "Cảm xúc và hình thái",
      "Kỹ thuật thở đúng cách",
      "Khắc phục lỗi phát âm căn bản",
      "Thực hành hàng ngày có hướng dẫn",
    ],
    benefits: [
      "Giọng nói chuẩn chỉnh, rõ ràng",
      "Tự tin giao tiếp hàng ngày",
      "Khắc phục triệt để lỗi phát âm",
      "Nền tảng vững cho phát triển nâng cao",
    ],
    suitable: [
      "Người mới bắt đầu hoàn toàn",
      "Học sinh, sinh viên muốn cải thiện giọng nói",
      "Nhân viên văn phòng cần giao tiếp tốt hơn",
      "Ai muốn khắc phục lỗi phát âm căn bản",
      "Cần xây dựng nền tảng vững chắc về giọng nói",
      "Muốn tự tin hơn khi giao tiếp hàng ngày",
    ],
    hasVAT: false,
  },
  {
    id: "nang-cao",
    title: "Khóa Nâng Cao",
    subtitle: "Cảm xúc, kỹ thuật sân khấu, biên soạn - viết bài, thuyết trình",
    price: "9.000.000",
    originalPrice: "11.000.000",
    duration: "12 tuần",
    sessions: "24 buổi",
    students: "4-6 học viên",
    level: "Nâng cao",
    popular: false,
    description:
      "Phát triển toàn diện kỹ năng giọng nói chuyên nghiệp: cảm xúc, kỹ thuật sân khấu, biên soạn nội dung, thuyết trình và cách truyền tải.",
    features: [
      "Kỹ thuật sân khấu chuyên nghiệp",
      "Cách lấy cảm xúc bằng phương pháp chân thật",
      "Cách truyền tải nội dung hiệu quả",
      "Biên soạn và viết bài chuyên nghiệp",
      "Thuyết trình và dẫn chương trình",
      "Phát triển phong cách cá nhân",
      "Kỹ thuật MC chuyên nghiệp",
      "Thực hành với các tình huống thực tế",
    ],
    benefits: [
      "Trở thành ngôi sao giọng nói toàn diện",
      "Làm chủ mọi nghề về giọng nói",
      "Kỹ năng MC và dẫn chương trình chuyên nghiệp",
      "Khả năng biên soạn nội dung sáng tạo",
    ],
    suitable: [
      "Đã hoàn thành khóa cơ bản hoặc có nền tảng tương đương",
      "MC, người dẫn chương trình muốn nâng cao kỹ năng",
      "Giáo viên, giảng viên cần kỹ năng truyền đạt tốt",
      "Nhân viên kinh doanh, marketing cần thuyết trình",
      "Content creator, YouTuber, Podcaster",
      "Người muốn phát triển sự nghiệp trong lĩnh vực truyền thông",
      "Ai muốn trở thành chuyên gia về giọng nói toàn diện",
    ],
    hasVAT: false,
  },
  {
    id: "hoc-nhom",
    title: "Học Nhóm (4 người)",
    subtitle: "Học tập thể từ 3 cá nhân trở lên, có xuất VAT",
    price: "20.000.000",
    originalPrice: "24.000.000",
    duration: "10 tuần",
    sessions: "20 buổi",
    students: "3-4 học viên",
    level: "Linh hoạt",
    popular: false,
    description:
      "Gói học nhóm dành cho từ 3 cá nhân trở lên với chương trình linh hoạt theo nhu cầu nhóm. Bao gồm cả nội dung cơ bản và nâng cao.",
    features: [
      "Chương trình tùy chỉnh theo nhóm",
      "Học từ cơ bản đến nâng cao",
      "Tương tác và thực hành nhóm",
      "Giá ưu đãi cho nhóm từ 3-4 người",
      "Giá đã bao gồm VAT",
      "Lịch học linh hoạt",
      "Hỗ trợ cá nhân hóa trong nhóm",
      "Thời gian học tập trung cao",
    ],
    benefits: [
      "Tiết kiệm chi phí học",
      "Động lực học tập từ nhóm",
      "Hỗ trợ lẫn nhau trong quá trình học",
      "Có hóa đơn VAT hợp pháp",
    ],
    suitable: [
      "Nhóm bạn bè, đồng nghiệp muốn cùng học (3-4 người)",
      "Doanh nghiệp muốn đào tạo nhân viên (cần hóa đơn VAT)",
      "Gia đình muốn cùng phát triển kỹ năng giao tiếp",
      "Nhóm startup cần kỹ năng thuyết trình, pitch",
      "Câu lạc bộ, tổ chức muốn nâng cao kỹ năng thành viên",
      "Ai muốn tiết kiệm chi phí học nhóm",
      "Cần xuất hóa đơn VAT hợp pháp",
    ],
    hasVAT: true,
  },
];

// Helper functions để làm việc với course data
export const getCourseById = (id: string): Course | undefined => {
  return courses.find((course) => course.id === id);
};

export const getPopularCourses = (): Course[] => {
  return courses.filter((course) => course.popular);
};

export const getCoursesByLevel = (level: Course["level"]): Course[] => {
  return courses.filter((course) => course.level === level);
};
