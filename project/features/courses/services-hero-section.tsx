import { Badge } from "@/components/ui/badge"

/**
 * Hero Section cho trang dịch vụ
 * Giới thiệu tổng quan về các khóa học
 */
export default function ServicesHeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mx-auto">
            Khóa học chất lượng cao
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Khóa học luyện giọng toàn diện
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Không chỉ học MC, mà học tất tần tật về giọng: luyện âm, phát âm, ngữ thanh, biểu cảm, cách truyền tải nội dung, biên soạn và viết bài
          </p>
        </div>

        {/* Thống kê */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Giáo trình chuẩn hóa</div>
            <div className="text-sm text-muted-foreground">Thiết kế bởi đội ngũ truyền hình và chuyên gia giọng nói</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Lớp học giới hạn</div>
            <div className="text-sm text-muted-foreground">Cam kết tối đa 8 học viên để đảm bảo chất lượng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Coaching cá nhân</div>
            <div className="text-sm text-muted-foreground">Kèm 1:1 cho mục tiêu nghề nghiệp cụ thể</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Studio luyện giọng</div>
            <div className="text-sm text-muted-foreground">Không gian ghi hình, thu âm phục vụ thực hành</div>
          </div>
        </div>
      </div>
    </section>
  )
}
