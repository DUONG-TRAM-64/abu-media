import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from "lucide-react"

/**
 * Component Footer cho website Nova Media
 * Chứa thông tin liên hệ, links và social media
 */
export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Thông tin công ty */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-foreground">Nova Media</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trung tâm đào tạo luyện giọng và giao tiếp hàng đầu, giúp bạn tự tin thể hiện bản thân trong mọi tình
              huống.
            </p>
          </div>

          {/* Dịch vụ */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dich-vu" className="text-muted-foreground hover:text-primary transition-colors">
                  Luyện giọng cơ bản
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="text-muted-foreground hover:text-primary transition-colors">
                  Giao tiếp thuyết trình
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="text-muted-foreground hover:text-primary transition-colors">
                  Luyện giọng chuyên nghiệp
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="text-muted-foreground hover:text-primary transition-colors">
                  Khóa học online
                </Link>
              </li>
            </ul>
          </div>

          {/* Liên kết nhanh */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-muted-foreground hover:text-primary transition-colors">
                  Đăng ký khóa học
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Liên hệ</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">0123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@novamedia.vn</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
            </div>

            {/* Social media */}
            <div className="flex space-x-3 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Nova Media. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
