import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Mic, Users } from "lucide-react"

/**
 * Section đội ngũ giảng viên
 * Trình bày tổng quát về đội ngũ mà không nêu tên cụ thể
 */
export default function InstructorTeamSection() {
  const teamHighlights = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Kinh nghiệm thực chiến",
      description:
        "Đội ngũ Nova Media quy tụ các chuyên gia đang công tác tại những đài truyền hình lớn, am hiểu nhu cầu thực tế của nghề.",
    },
    {
      icon: <Mic className="w-6 h-6 text-primary" />,
      title: "Phương pháp toàn diện",
      description:
        "Kết hợp luyện âm, ngữ thanh, cảm xúc và kỹ thuật sân khấu để học viên làm chủ giọng nói trong mọi bối cảnh.",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Tận tâm đồng hành",
      description:
        "Mỗi lớp học đều được thiết kế nhỏ gọn để giảng viên theo sát từng học viên và đo lường tiến bộ rõ ràng.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Đội ngũ giảng viên</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Đội ngũ Nova Media giàu kinh nghiệm, đang công tác tại các đài truyền hình lớn như VTV và HTV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamHighlights.map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="mx-auto">
            Thông tin sẽ được cập nhật
          </Badge>
          <p className="text-muted-foreground">
            Hồ sơ chi tiết từng giảng viên đang được hoàn thiện và sẽ được bổ sung khi khách hàng cung cấp thông tin
            chính thức.
          </p>
        </div>
      </div>
    </section>
  )
}
