import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

/**
 * Hero Section cho trang Về chúng tôi
 * Giới thiệu tổng quan về Nova Media và câu chuyện thương hiệu
 */
export default function AboutHeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              Câu chuyện của chúng tôi
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Tại sao học MC vẫn
              <span className="text-primary"> không hiệu quả?</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Đa phần mọi người chỉ tham gia các lớp học MC nhưng vẫn không cải thiện được giọng nói vì họ mắc các lỗi
              căn bản trong việc luyện âm, luyện giọng. Tại Nova Media, bạn sẽ được học tất tần tật về giọng từ cơ bản nhất:
              luyện âm, phát âm, ngữ thanh, ngôn ngữ, cảm xúc, hình thái, cách truyền tải nội dung, thậm chí cả biên soạn và viết bài.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/dich-vu">
                  Xem khóa học
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/dich-vu">Xem khóa học</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Studio luyện giọng chuyên nghiệp Nova Media"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
