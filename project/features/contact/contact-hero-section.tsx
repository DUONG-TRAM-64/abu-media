import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactHeroSection() {
    return (
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge variant="secondary" className="w-fit">
                            Kết nối với chúng tôi
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                            Liên hệ tư vấn
                            <span className="text-primary"> miễn phí</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                            Đội ngũ chuyên gia Nova Media sẵn sàng tư vấn chi tiết về các khóa học phù hợp với nhu cầu của bạn.
                            Liên hệ ngay để được hỗ trợ tận tình và chuyên nghiệp.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <Link href="#lien-he">
                                    Liên hệ ngay
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/dich-vu">
                                    <MessageCircle className="mr-2 w-4 h-4" />
                                    Xem khóa học
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square max-w-md mx-auto">
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <MessageCircle className="w-20 h-20 text-primary mx-auto" />
                                    <h3 className="text-2xl font-bold text-foreground">Tư vấn 24/7</h3>
                                    <p className="text-muted-foreground">
                                        Chuyên gia luôn sẵn sàng hỗ trợ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
