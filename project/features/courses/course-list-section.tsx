import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Clock, Users, ArrowRight, Calendar, Target, CheckCircle, Star, User, Award, TrendingUp } from "lucide-react"
import { courses } from "@/lib/data/courses"

/**
 * Component hiển thị danh sách các khóa học với thông tin chi tiết
 *
 * CHỨC NĂNG CHÍNH:
 * - Hiển thị 3 khóa học chính với thông tin đầy đủ
 * - Sử dụng Tabs để tổ chức thông tin: Tổng quan, Nội dung, Lợi ích, Phù hợp
 * - Responsive design cho mobile và desktop
 * - CTA button dẫn đến trang booking
 *
 * CẤU TRÚC DỮ LIỆU:
 * - courses: Array chứa thông tin chi tiết từng khóa học
 * - Mỗi course có: thông tin cơ bản, features, benefits, suitable
 * - popular: boolean để highlight khóa học được recommend
 */
export default function CourseListSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* 
            COURSE CARD LAYOUT:
            - Grid 3 columns: 1 cột thông tin cơ bản + 2 cột chi tiết
            - Responsive: mobile sẽ stack vertically
            - Left sidebar: giá, thời gian, CTA button
            - Right content: tabs với thông tin chi tiết
          */}
          {courses.map((course, index) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* 
                  SIDEBAR - THÔNG TIN CƠ BẢN:
                  - Badge "Phổ biến nhất" nếu course.popular = true
                  - Tên khóa học và subtitle
                  - Giá hiện tại vs giá gốc (tính discount)
                  - Grid 2x2 hiển thị: thời gian, số buổi, số học viên, trình độ
                  - CTA button dẫn đến /booking
                */}
                <div className="lg:col-span-1 p-8 bg-muted/30">
                  <div className="space-y-4">
                    {course.popular && (
                      <Badge variant="default" className="w-fit">
                        Phổ biến nhất
                      </Badge>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
                      <p className="text-muted-foreground mt-1">{course.subtitle}</p>
                    </div>

                    {/* Pricing với discount calculation */}
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">{course.price}đ</span>
                        <span className="text-lg text-muted-foreground line-through">{course.originalPrice}đ</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Tiết kiệm {Number.parseInt(course.originalPrice.replace(/\./g, '')) - Number.parseInt(course.price.replace(/\./g, ''))}đ
                      </div>
                      {course.hasVAT ? (
                        <div className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                          ✓ Giá đã bao gồm VAT
                        </div>
                      ) : (
                        <div className="text-sm text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded">
                          ⚠ Giá chưa bao gồm VAT
                        </div>
                      )}
                    </div>

                    {/* Grid thông tin khóa học */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{course.sessions}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        <span>{course.level}</span>
                      </div>
                    </div>

                    <Button className="w-full" size="lg" asChild>
                      <Link href="/dich-vu">
                        Tìm hiểu thêm
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* 
                  TABS CONTENT AREA:
                  - 4 tabs: Tổng quan, Nội dung, Lợi ích, Phù hợp
                  - overview: mô tả + 2 cột kỹ năng cốt lõi & cam kết chất lượng
                  - curriculum: danh sách features với CheckCircle icons
                  - benefits: danh sách benefits với Star icons  
                  - suitable: danh sách đối tượng phù hợp với Users icons
                */}
                <div className="lg:col-span-2 p-8">
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                      <TabsTrigger value="curriculum">Nội dung</TabsTrigger>
                      <TabsTrigger value="benefits">Lợi ích</TabsTrigger>
                      <TabsTrigger value="suitable">Phù hợp</TabsTrigger>
                    </TabsList>

                    {/* TAB CONTENT 1: Tổng quan */}
                    <TabsContent value="overview" className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Giới thiệu khóa học</h3>
                          <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-foreground flex items-center gap-2">
                              <Award className="w-5 h-5 text-primary" />
                              Kỹ năng cốt lõi
                            </h4>
                            <ul className="space-y-2">
                              {course.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 font-medium">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-semibold text-foreground flex items-center gap-2">
                              <TrendingUp className="w-5 h-5 text-primary" />
                              Cam kết chất lượng
                            </h4>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Giảng viên giàu kinh nghiệm từ VTV</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Lớp học quy mô nhỏ, chăm sóc cá nhân</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Hỗ trợ sau khóa học trong 3 tháng</span>
                              </li>
                              {/* <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Chứng chỉ hoàn thành khóa học</span>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* TAB CONTENT 2: Nội dung chi tiết */}
                    <TabsContent value="curriculum" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Nội dung khóa học chi tiết</h3>
                        <div className="grid gap-3">
                          {course.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all hover:shadow-md">
                              <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-white">{idx + 1}</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">{feature}</p>
                              </div>
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-sm text-blue-800">
                            <strong>Lưu ý:</strong> Tất cả nội dung sẽ được thực hành thông qua các bài tập thực tế và tình huống mô phỏng.
                            Học viên sẽ được ghi âm và phân tích tiến bộ định kỳ.
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    {/* TAB CONTENT 3: Lợi ích */}
                    <TabsContent value="benefits" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Lợi ích khi học xong</h3>
                        <div className="grid gap-4">
                          {course.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors shadow-sm">
                              <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <p className="font-medium text-blue-900">{benefit}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2">Ngắn hạn (1-3 tháng)</h4>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• Cải thiện rõ rệt chất lượng giọng nói</li>
                              <li>• Tự tin hơn trong giao tiếp hàng ngày</li>
                              <li>• Khắc phục được các lỗi phát âm cơ bản</li>
                            </ul>
                          </div>

                          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-2">Dài hạn (6+ tháng)</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• Cơ hội thăng tiến trong công việc</li>
                              <li>• Phát triển kỹ năng lãnh đạo</li>
                              <li>• Có thể chuyển nghề sang lĩnh vực truyền thông</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* TAB CONTENT 4: Đối tượng phù hợp */}
                    <TabsContent value="suitable" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Khóa học này phù hợp với ai?</h3>
                        <div className="grid gap-3">
                          {course.suitable.map((target, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-sm transition-all hover:shadow-md">
                              <User className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-slate-900 font-medium">{target}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                            <Target className="w-5 h-5" />
                            Yêu cầu tham gia
                          </h4>
                          <ul className="text-sm text-amber-700 space-y-1">
                            {course.level === "Cơ bản" ? (
                              <>
                                <li>• Không cần kinh nghiệm trước đó</li>
                                <li>• Có mong muốn cải thiện giọng nói</li>
                                <li>• Sẵn sàng thực hành đều đặn</li>
                              </>
                            ) : course.level === "Nâng cao" ? (
                              <>
                                <li>• Đã hoàn thành khóa cơ bản hoặc có nền tảng tương đương</li>
                                <li>• Có khả năng giao tiếp cơ bản tốt</li>
                                <li>• Muốn phát triển chuyên nghiệp</li>
                              </>
                            ) : (
                              <>
                                <li>• Tối thiểu 3 người, tối đa 4 người</li>
                                <li>• Cam kết học hết khóa cùng nhau</li>
                                <li>• Có thể sắp xếp lịch học chung</li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
