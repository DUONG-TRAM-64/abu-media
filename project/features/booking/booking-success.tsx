import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Mail } from "lucide-react"

/**
 * Component hiển thị thông báo thành công sau khi đăng ký
 * Bao gồm thông tin liên hệ và nút quay về trang chủ
 */
export default function BookingSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="pt-8 pb-8 space-y-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Đăng ký thành công!</h2>
            <p className="text-muted-foreground">
              Cảm ơn bạn đã đăng ký khóa học tại Nova Media. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để xác nhận
              thông tin và sắp xếp lịch học.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Hotline: 0123 456 789</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Email: info@novamedia.vn</span>
            </div>
          </div>
          <Button asChild className="w-full">
            <a href="/">Về trang chủ</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
