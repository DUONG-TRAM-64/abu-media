import { Card, CardContent } from "@/components/ui/card"
import { Info, Receipt, Users } from "lucide-react"

/**
 * Section giải thích về giá cả và VAT
 * Thông tin quan trọng về chính sách giá
 */
export default function PricingNoteSection() {
    return (
        <section className="py-12 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-8">
                    <h2 className="text-2xl font-bold text-foreground text-balance">Thông tin quan trọng về giá cả</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="text-center">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Khóa Cá Nhân</h3>
                            <div className="text-sm text-muted-foreground space-y-1">
                                <div>✓ Khóa Cơ Bản: 6.000.000đ</div>
                                <div>✓ Khóa Nâng Cao: 9.000.000đ</div>
                                <div className="text-orange-600 font-medium">⚠ Giá chưa bao gồm VAT</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Receipt className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Học Nhóm</h3>
                            <div className="text-sm text-muted-foreground space-y-1">
                                <div>✓ 20.000.000đ cho 4 người</div>
                                <div>✓ Từ 3 cá nhân trở lên</div>
                                <div className="text-green-600 font-medium">✓ Giá đã bao gồm VAT</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Info className="w-6 h-6 text-amber-600" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Về VAT</h3>
                            <div className="text-sm text-muted-foreground space-y-1">
                                <div>• VAT = Thuế GTGT (10%)</div>
                                <div>• Cá nhân thường không cần VAT</div>
                                <div>• Doanh nghiệp cần để quyết toán thuế</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-blue-800">
                            <p className="font-medium mb-1">Lưu ý quan trọng:</p>
                            <ul className="space-y-1 text-blue-700">
                                <li>• Học viên cá nhân: Giá niêm yết, VAT xuất thêm khi có yêu cầu hóa đơn</li>
                                <li>• Doanh nghiệp/Tổ chức: Chọn gói học nhóm để nhận hóa đơn VAT hợp lệ</li>
                                <li>• Chi phí đã bao gồm tài liệu và chứng chỉ; VAT áp dụng theo quy định</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
