"use client"

import { useState, useEffect } from "react"
import { Phone, X, Plus, Zap } from "lucide-react"
import { SiZalo, SiYoutube } from "react-icons/si"
import { FaFacebook } from "react-icons/fa6"
import { cn } from "@/lib/utils"

export function ContactFloating() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [pulse, setPulse] = useState(true)

    // Hiện floating buttons sau khi user scroll xuống một chút
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 300
            setIsVisible(scrolled)
            // Tắt pulse sau khi user đã scroll (đã thấy content)
            if (scrolled && pulse) {
                setTimeout(() => setPulse(false), 3000)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pulse])

    // Auto pulse mỗi 10s để thu hút attention
    useEffect(() => {
        if (!pulse) {
            const interval = setInterval(() => {
                setPulse(true)
                setTimeout(() => setPulse(false), 2000)
            }, 10000)
            return () => clearInterval(interval)
        }
    }, [pulse])

    const contacts = [
        {
            icon: SiZalo,
            label: "Chat Zalo",
            href: "https://zalo.me/0376899568", // Thay số Zalo thật
            bgColor: "bg-blue-500 hover:bg-blue-600",
            hoverText: "Tư vấn miễn phí qua Zalo",
            delay: "delay-75"
        },
        {
            icon: Phone,
            label: "Gọi ngay",
            href: "tel:0376899568", // Thay số phone thật
            bgColor: "bg-green-500 hover:bg-green-600",
            hoverText: "Hotline: 037.689.9568",
            delay: "delay-150"
        },
        {
            icon: FaFacebook,
            label: "Messenger",
            href: "https://m.me/novamedia.vn", // Thay link Facebook thật
            bgColor: "bg-blue-600 hover:bg-blue-700",
            hoverText: "Chat Facebook Messenger",
            delay: "delay-300"
        }
    ]

    if (!isVisible) return null

    return (
        <div className="fixed bottom-6 left-6 z-[45]">
            {/* Contact buttons */}
            <div className="flex flex-col-reverse space-y-reverse space-y-3 mb-3">
                {contacts.map((contact, index) => (
                    <div key={index} className="relative group">
                        <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110",
                                contact.bgColor,
                                contact.delay,
                                isExpanded
                                    ? "opacity-100 scale-100 translate-x-0"
                                    : "opacity-0 scale-0 -translate-x-4"
                            )}
                            aria-label={contact.label}
                        >
                            <contact.icon size={20} />
                        </a>

                        {/* Tooltip */}
                        {isExpanded && (
                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                                {contact.hoverText}
                                <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-800"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Main toggle button */}
            <div className="relative group">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={cn(
                        "flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                        isExpanded && "rotate-45",
                        pulse && "animate-pulse"
                    )}
                    aria-label={isExpanded ? "Đóng menu liên hệ" : "Mở menu liên hệ"}
                >
                    {isExpanded ? <X size={24} /> : <Plus size={24} />}
                </button>

                {/* Notification badge */}
                {!isExpanded && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <Zap size={12} className="text-white animate-bounce" />
                    </div>
                )}

                {/* Main button tooltip */}
                {!isExpanded && (
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                        🔥 Tư vấn MIỄN PHÍ ngay!
                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-800"></div>
                    </div>
                )}
            </div>

            {/* Ripple effect */}
            {pulse && !isExpanded && (
                <div className="absolute inset-0 rounded-full border-4 border-orange-400 animate-ping opacity-30"></div>
            )}
        </div>
    )
}
