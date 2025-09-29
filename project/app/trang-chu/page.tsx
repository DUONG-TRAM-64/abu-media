import { HeroSection, WhyChooseSection, CTASection } from "@/components/common"
import { FeaturedCoursesSection } from "@/features/courses"
import { TestimonialsSection } from "@/features/testimonials"

/**
 * Trang chủ Nova Media - Giới thiệu công ty và dịch vụ
 * Thiết kế thu hút, thuyết phục khách hàng đăng ký khóa học
 */
export default function HomePage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <HeroSection />

            {/* Tại sao chọn Nova Media */}
            <WhyChooseSection />

            {/* Dịch vụ nổi bật */}
            <FeaturedCoursesSection />

            {/* Testimonials */}
            <TestimonialsSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    )
}
