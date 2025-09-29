import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

/**
 * Component hiển thị ưu đãi đặc biệt để khuyến khích đăng ký
 * Sử dụng gradient và CTA mạnh mẽ để thu hút sự chú ý
 */
export default function SpecialOfferSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <CardContent className="p-8 text-center space-y-6">
            <Badge variant="secondary" className="bg-primary-foreground text-primary">
              Ưu đãi đặc biệt
            </Badge>
            <h3 className="text-2xl lg:text-3xl font-bold">Đăng ký ngay - Nhận ưu đãi 20%</h3>
            {/* <p className="text-lg opacity-90">
              Áp dụng cho 50 học viên đầu tiên đăng ký trong tháng này. Cơ hội có hạn!
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/dich-vu">
                  Xem khóa học
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/about">Tìm hiểu thêm</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
