import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiTiktok, SiYoutube, SiZalo } from "react-icons/si"
import { FaFacebook } from "react-icons/fa6"

// Placeholder links - bạn có thể thay thế sau
const contactLinks = {
    zalo: "https://zalo.me/your-zalo-link", // Thay bằng link Zalo thực tế
    facebook: "https://facebook.com/your-page", // Thay bằng link Facebook thực tế  
    tiktok: "https://tiktok.com/@your-account", // Thay bằng link TikTok thực tế
    youtube: "https://youtube.com/@your-channel" // Thay bằng link YouTube thực tế
}

export default function ContactMethodsSection() {
    return (
        <section id="lien-he" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                        Kết nối với Nova Media
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Chọn kênh liên hệ phù hợp để được tư vấn nhanh chóng và chuyên nghiệp
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Zalo */}
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="text-center pb-2">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                                <SiZalo className="w-8 h-8 text-blue-600" />
                            </div>
                            <CardTitle className="text-xl">Zalo Chat</CardTitle>
                            <CardDescription>Tư vấn trực tiếp qua Zalo</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-sm text-muted-foreground mb-4">
                                Chat nhanh, nhận tư vấn chi tiết về khóa học và lịch học
                            </p>
                            <Button
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                asChild
                            >
                                <a
                                    href={contactLinks.zalo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiZalo className="mr-2 w-4 h-4" />
                                    Chat Zalo
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Facebook */}
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="text-center pb-2">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                                <FaFacebook className="w-8 h-8 text-blue-600" />
                            </div>
                            <CardTitle className="text-xl">Facebook</CardTitle>
                            <CardDescription>Fanpage chính thức</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-sm text-muted-foreground mb-4">
                                Theo dõi thông tin mới nhất và tương tác với cộng đồng
                            </p>
                            <Button
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                asChild
                            >
                                <a
                                    href={contactLinks.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook className="mr-2 w-4 h-4" />
                                    Theo dõi
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* TikTok */}
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="text-center pb-2">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
                                <SiTiktok className="w-8 h-8 text-white" />
                            </div>
                            <CardTitle className="text-xl">TikTok</CardTitle>
                            <CardDescription>Kệnh TikTok chính thức</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-sm text-muted-foreground mb-4">
                                Theo dõi thông tin mới nhất và tương tác với cộng đồng
                            </p>
                            <Button
                                className="w-full bg-black hover:bg-gray-800"
                                asChild
                            >
                                <a
                                    href={contactLinks.tiktok}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiTiktok className="mr-2 w-4 h-4" />
                                    Xem TikTok
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* YouTube */}
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="text-center pb-2">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                                <SiYoutube className="w-8 h-8 text-red-600" />
                            </div>
                            <CardTitle className="text-xl">YouTube</CardTitle>
                            <CardDescription>Kênh YouTube chính thức</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-sm text-muted-foreground mb-4">
                                Theo dõi thông tin mới nhất và tương tác với cộng đồng
                            </p>
                            <Button
                                className="w-full bg-red-600 hover:bg-red-700"
                                asChild
                            >
                                <a
                                    href={contactLinks.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <SiYoutube className="mr-2 w-4 h-4" />
                                    Xem YouTube
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Info */}
                <div className="mt-16 text-center">
                    <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Thông tin liên hệ khác
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">Địa chỉ</h4>
                                <p className="text-muted-foreground">
                                    Số XX, Đường ABC, Quận XYZ<br />
                                    Thành phố Hồ Chí Minh
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">Điện thoại</h4>
                                <p className="text-muted-foreground">
                                    <a href="tel:+84123456789" className="hover:text-primary">
                                        +84 123 456 789
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                                <p className="text-muted-foreground">
                                    <a href="mailto:info@novamedia.vn" className="hover:text-primary">
                                        info@novamedia.vn
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-muted-foreground">
                                <strong>Giờ làm việc:</strong> Thứ 2 - Chủ nhật, 8:00 - 20:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
