import { ServicesHeroSection, CourseListSection } from "@/features/courses"
import { TeachingMethodSection } from "@/features/about"
import { SpecialOfferSection, FAQSection, PricingNoteSection } from "@/components/common"

/**
 * Trang Dịch vụ - Giới thiệu chi tiết các khóa học luyện giọng và giao tiếp
 * Bao gồm thông tin đầy đủ về nội dung, giá cả và lợi ích của từng khóa học
 */
export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHeroSection />
      <CourseListSection />
      <PricingNoteSection />
      <TeachingMethodSection />
      <SpecialOfferSection />
      <FAQSection />
    </div>
  )
}
