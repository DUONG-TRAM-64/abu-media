import type React from "react"
import type { Metadata } from "next"
import { Manrope, Mulish } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactFloating } from "@/components/contact-floating"
import { FloatingChatbot } from "@/components/chatbot"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nova Media - Trung tâm luyện giọng và giao tiếp",
  description:
    "Trung tâm đào tạo luyện giọng và giao tiếp hàng đầu, giúp bạn tự tin thể hiện bản thân trong mọi tình huống.",
  generator: "v0.app",
}

const manrope = Manrope({ subsets: ["latin", "vietnamese"], variable: "--font-manrope" })
const mulish = Mulish({ subsets: ["latin", "vietnamese"], variable: "--font-mulish" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body
        className={`font-sans ${mulish.variable} ${manrope.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ContactFloating />
          <FloatingChatbot />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
