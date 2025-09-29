import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Target, Lightbulb } from "lucide-react"

/**
 * Section Sứ mệnh, Tầm nhìn và Giá trị cốt lõi
 * Thể hiện triết lý và định hướng của Nova Media
 */
export default function MissionVisionSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Sứ mệnh</CardTitle>
              <CardDescription>
                Giúp mọi người tự tin thể hiện bản thân thông qua giọng nói, từ đó mở ra những cơ hội mới trong cuộc
                sống và sự nghiệp.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Tầm nhìn</CardTitle>
              <CardDescription>
                Trở thành trung tâm đào tạo luyện giọng và giao tiếp hàng đầu Việt Nam, được công nhận về chất lượng và
                phương pháp giảng dạy.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Giá trị cốt lõi</CardTitle>
              <CardDescription>
                Chất lượng, tận tâm, sáng tạo và luôn đặt học viên làm trung tâm trong mọi hoạt động của chúng tôi.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
