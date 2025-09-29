"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

/**
 * Component Navigation chính cho website Nova Media
 *
 * CHỨC NĂNG CHÍNH:
 * - Sticky navigation bar với logo và menu
 * - Responsive: desktop menu + mobile hamburger menu
 * - Thông tin liên hệ và CTA button
 * - Active state management cho mobile menu
 *
 * RESPONSIVE BEHAVIOR:
 * - Desktop (md+): Hiển thị full menu ngang + contact info + CTA
 * - Mobile (<md): Logo + hamburger button, menu dropdown khi click
 *
 * ACCESSIBILITY:
 * - Keyboard navigation support
 * - Screen reader friendly
 * - Focus management cho mobile menu
 */
export function Navigation() {
  /**
   * MOBILE MENU STATE:
   * - isMenuOpen: boolean để control hiển thị mobile menu
   * - Toggle bằng hamburger button
   * - Auto close khi click vào menu item
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * NAVIGATION STRUCTURE:
   * - Danh sách các trang chính của website
   * - href: đường dẫn tương ứng
   * - label: text hiển thị trong menu
   *
   * TODO: Có thể move ra constants file khi cần internationalization
   * TODO: Thêm active state detection dựa trên current route
   */
  const navigationItems = [
    { href: "/trang-chu", label: "Trang chủ" },
    { href: "/dich-vu", label: "Dịch vụ" },
    { href: "/ve-chung-toi", label: "Về chúng tôi" },
    { href: "/lien-he", label: "Liên hệ" },
    { href: "/chatbot", label: "Chatbot" },
    // { href: "/booking", label: "Đăng ký" },
  ]

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 
            LOGO SECTION:
            - Logo chữ "N" trong hình vuông với background primary
            - Tên công ty "Nova Media" 
            - Click vào logo sẽ về trang chủ
          */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-foreground">Nova Media</span>
          </Link>

          {/* 
            DESKTOP MENU:
            - Hiển thị khi screen >= md (768px)
            - Horizontal layout với space-x-8
            - Hover effect: text color chuyển sang primary
            - Transition smooth 200ms
          */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 
            CONTACT & CTA SECTION (Desktop only):
            - Phone number với icon
            - CTA button "Đăng ký ngay" dẫn đến /booking
            - Chỉ hiển thị trên desktop để tiết kiệm space
          */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>0123 456 789</span>
            </div>
            <Button asChild>
              <Link href="/lien-he">Liên hệ tư vấn</Link>
            </Button>
          </div>

          {/* 
            MOBILE MENU BUTTON:
            - Chỉ hiển thị khi screen < md
            - Toggle giữa Menu và X icon
            - Ghost variant để không có background
          */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* 
          MOBILE MENU DROPDOWN:
          - Conditional rendering dựa trên isMenuOpen state
          - Vertical layout với border-t separator
          - Menu items + contact info + CTA button
          - Auto close menu khi click vào item (UX improvement)
          
          LAYOUT:
          1. Navigation items (vertical)
          2. Border separator  
          3. Contact info (phone + email)
          4. CTA button
        */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {/* Navigation items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)} // Auto close menu
                >
                  {item.label}
                </Link>
              ))}

              {/* Contact info section */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground px-2">
                  <Phone className="w-4 h-4" />
                  <span>0123 456 789</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground px-2">
                  <Mail className="w-4 h-4" />
                  <span>info@novamedia.vn</span>
                </div>
                <Button asChild className="mt-2">
                  <Link href="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
