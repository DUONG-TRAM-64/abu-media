import { ContactHeroSection, ContactMethodsSection } from "@/features/contact"
import { SpecialOfferSection, FAQSection } from "@/components/common"

export const metadata = {
    title: "Liên hệ | Nova Media",
    description: "Liên hệ với Nova Media qua Zalo, Facebook, TikTok, YouTube để được tư vấn về các khóa học luyện giọng toàn diện.",
}

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <ContactHeroSection />
            <ContactMethodsSection />
            <SpecialOfferSection />
            <FAQSection />
        </div>
    )
}
