import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Users, Award } from "lucide-react"

/**
 * Section "Tại sao chọn Nova Media"
 * Hiển thị các lợi thế cạnh tranh của trung tâm
 */
export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Tại sao nhiều người học MC vẫn không hiệu quả?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Vì họ chỉ học kỹ thuật bề mặt, thiếu nền tảng vững chắc về luyện âm và ngữ thanh.
            Nova Media khắc phục triệt để từ gốc rễ - đào tạo toàn diện từ cơ bản nhất đến chuyên nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Phương pháp khoa học</CardTitle>
              <CardDescription>
                Kết hợp kỹ thuật truyền thống và công nghệ hiện đại để tối ưu hóa quá trình học
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Lớp học nhỏ</CardTitle>
              <CardDescription>Tối đa 8 học viên/lớp để đảm bảo sự chú ý và hướng dẫn cá nhân hóa</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Giảng viên chuyên nghiệp</CardTitle>
              <CardDescription>Đội ngũ có nhiều năm kinh nghiệm trong lĩnh vực truyền thông và đào tạo</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
