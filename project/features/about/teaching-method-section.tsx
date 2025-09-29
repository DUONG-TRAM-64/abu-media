import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookOpen, Mic, Video, MessageSquare } from "lucide-react"

/**
 * Component giới thiệu phương pháp giảng dạy độc quyền của Nova Media
 * Tập trung vào 4 trụ cột chính của phương pháp
 */
export default function TeachingMethodSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Phương pháp giảng dạy độc quyền
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kết hợp khoa học hiện đại và kinh nghiệm thực tiễn để mang lại hiệu quả tối ưu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Lý thuyết khoa học</CardTitle>
              <CardDescription>Dựa trên nghiên cứu về âm học và tâm lý học giao tiếp</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Thực hành tích cực</CardTitle>
              <CardDescription>70% thời gian dành cho luyện tập và thực hành trực tiếp</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Ghi hình phân tích</CardTitle>
              <CardDescription>Sử dụng công nghệ để ghi lại và phân tích tiến bộ</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Hỗ trợ cá nhân</CardTitle>
              <CardDescription>Tư vấn và hướng dẫn riêng cho từng học viên</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
