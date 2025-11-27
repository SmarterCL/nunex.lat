'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const phoneNumber = '+5491126569822'
  const message = encodeURIComponent('Hola! Me interesa conocer más sobre Nunex.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all hover:scale-110 hover:shadow-2xl active:scale-95"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  )
}
