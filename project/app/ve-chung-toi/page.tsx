import {
  AboutHeroSection,
  MissionVisionSection,
  FounderStorySection,
  InstructorTeamSection,
  AboutCtaSection
} from "@/features/about"
import { TimelineSection, AchievementsSection } from "@/components/common"
import { AboutTestimonialsSection } from "@/features/testimonials"

/**
 * Trang Về chúng tôi - Giới thiệu về Nova Media, founder và đội ngũ
 * Xây dựng lòng tin và thuyết phục khách hàng về chất lượng dịch vụ
 */
export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHeroSection />
      <MissionVisionSection />
      <FounderStorySection />
      <TimelineSection />
      <InstructorTeamSection />
      <AchievementsSection />
      <AboutTestimonialsSection />
      <AboutCtaSection />
    </div>
  )
}
