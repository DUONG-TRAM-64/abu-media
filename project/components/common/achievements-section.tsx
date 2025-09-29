/**
 * Section thành tựu
 * Nêu bật các giá trị cốt lõi và cam kết chất lượng của Nova Media
 */
export default function AchievementsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Giá trị nổi bật</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Những cam kết giúp học viên và đối tác yên tâm lựa chọn Nova Media
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-muted/30 rounded-xl p-6 space-y-2 text-center md:text-left">
            <div className="text-lg font-semibold text-primary">Lớp học giới hạn</div>
            <p className="text-sm text-muted-foreground">
              Quy mô 8 học viên/lớp giúp mentor theo sát và phản hồi chi tiết từng buổi.
            </p>
          </div>
          <div className="bg-muted/30 rounded-xl p-6 space-y-2 text-center md:text-left">
            <div className="text-lg font-semibold text-primary">Giáo trình 3 mô-đun</div>
            <p className="text-sm text-muted-foreground">
              Lộ trình Cơ bản – Nâng cao – Học nhóm được thiết kế linh hoạt cho nhu cầu cá nhân và doanh nghiệp.
            </p>
          </div>
          <div className="bg-muted/30 rounded-xl p-6 space-y-2 text-center md:text-left">
            <div className="text-lg font-semibold text-primary">Mentor nòng cốt</div>
            <p className="text-sm text-muted-foreground">
              Đội ngũ giảng viên đang công tác tại các đài truyền hình lớn trực tiếp xây dựng và giảng dạy khóa học.
            </p>
          </div>
          <div className="bg-muted/30 rounded-xl p-6 space-y-2 text-center md:text-left">
            <div className="text-lg font-semibold text-primary">Hạ tầng chuyên nghiệp</div>
            <p className="text-sm text-muted-foreground">
              Đầu tư vào studio luyện giọng, hệ thống ghi hình và thư viện bài tập để nâng cao trải nghiệm học viên.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
