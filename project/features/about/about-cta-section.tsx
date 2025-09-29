import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

/**
 * CTA Section cho trang About
 * Kêu gọi hành động cuối trang về chúng tôi
 */
export default function AboutCTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-balance">Sẵn sàng bắt đầu hành trình của bạn?</h2>
        <p className="text-xl opacity-90 text-pretty">
          Tìm hiểu chi tiết về phương pháp đào tạo toàn diện và các khóa học phù hợp với nhu cầu của bạn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/dich-vu">
              Xem khóa học chi tiết
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="/dich-vu">Xem khóa học</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
