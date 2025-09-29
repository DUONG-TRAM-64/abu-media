import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { courses } from "@/lib/data/courses"

/**
 * Section hiển thị các khóa học nổi bật
 * Giới thiệu 3 khóa học chính với thông tin cơ bản
 */
export default function FeaturedCoursesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Khóa học phù hợp với bạn</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Từ cơ bản đến nâng cao, chúng tôi có chương trình phù hợp với mọi nhu cầu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="relative overflow-hidden">
              <CardHeader>
                {course.popular && (
                  <Badge variant="secondary" className="w-fit">
                    Phổ biến nhất
                  </Badge>
                )}
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">{course.price}đ</div>
                  {course.hasVAT ? (
                    <div className="text-sm text-green-600 font-medium">✓ Giá đã bao gồm VAT</div>
                  ) : (
                    <div className="text-sm text-orange-600 font-medium">⚠ Giá chưa bao gồm VAT</div>
                  )}
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {course.sessions} ({course.duration})
                  </li>
                  {course.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={course.popular ? "w-full" : "w-full"}
                  variant={course.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/dich-vu">Tìm hiểu thêm</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
