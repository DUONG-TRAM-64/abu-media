import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

/**
 * Hero Section cho trang chủ
 * Hiển thị thông điệp chính và CTA buttons
 */
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Trung tâm luyện giọng thế hệ mới
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Khám phá sức mạnh
                <span className="text-primary"> giọng nói</span> của bạn
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Không chỉ học MC, bạn sẽ học tất tần tật về giọng: luyện âm, phát âm, ngữ thanh, biểu cảm,
                cách truyền tải nội dung, thậm chí cả biên soạn và viết bài. Với Nova Media, bạn sẽ làm chủ
                hoàn toàn mọi nghề về giọng nói.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/dich-vu">
                  Xem khóa học ngay
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              {/* <Button variant="outline" size="lg" asChild>
                <Link href="/dich-vu">
                  <Play className="mr-2 w-4 h-4" />
                  Xem demo khóa học
                </Link>
              </Button> */}
            </div>

            {/* Thống kê nhanh */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Giáo trình 3 mô-đun</div>
                <div className="text-sm text-muted-foreground">Bao quát từ nền tảng tới kỹ thuật sân khấu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Mentor truyền hình</div>
                <div className="text-sm text-muted-foreground">Đội ngũ giảng viên đang công tác tại VTV trực tiếp giảng dạy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Coaching 1:1</div>
                <div className="text-sm text-muted-foreground">Theo sát mục tiêu và dự án thực tế của từng học viên</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Buổi luyện giọng chuyên nghiệp"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
