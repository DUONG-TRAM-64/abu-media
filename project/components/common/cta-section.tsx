import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

/**
 * Call-to-Action Section
 * Khuyến khích người dùng đăng ký khóa học
 */
export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-balance">Sẵn sàng thay đổi giọng nói của bạn?</h2>
        <p className="text-xl opacity-90 text-pretty">
          Khám phá các khóa học toàn diện về giọng nói và tìm hiểu phương pháp đào tạo độc quyền của Nova Media
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
            <Link href="/dich-vu">Xem tất cả khóa học</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
