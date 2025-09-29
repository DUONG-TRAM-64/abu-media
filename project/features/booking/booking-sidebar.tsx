import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, Mail, Users, Star } from "lucide-react"

/**
 * Sidebar thông tin hỗ trợ và cam kết chất lượng
 * Hiển thị thông tin liên hệ và đánh giá
 */
export default function BookingSidebar() {
  return (
    <div className="space-y-6">
      {/* Thông tin liên hệ */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Cần hỗ trợ?</CardTitle>
          <CardDescription>Liên hệ với chúng tôi để được tư vấn chi tiết</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="font-semibold">Hotline</div>
              <div className="text-sm text-muted-foreground">0123 456 789</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-muted-foreground">info@novamedia.vn</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="font-semibold">Giờ làm việc</div>
              <div className="text-sm text-muted-foreground">T2-T6: 8:00-17:00</div>
              <div className="text-sm text-muted-foreground">T7: 8:00-12:00</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cam kết chất lượng */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Cam kết của chúng tôi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">Tư vấn miễn phí trước khi học</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">Lớp học nhỏ, chất lượng cao</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">Giảng viên có chứng chỉ</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">Hỗ trợ sau khóa học</span>
          </div>
        </CardContent>
      </Card>

      {/* Đánh giá */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-3">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary" />
              ))}
            </div>
            <div className="text-lg font-semibold text-foreground">Minh bạch phản hồi</div>
            <div className="text-sm text-muted-foreground">
              Feedback học viên được cập nhật định kỳ và sẵn sàng chia sẻ khi bạn liên hệ tư vấn.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
