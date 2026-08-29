import Link from 'next/link'
import { cn } from '@/lib/utils'
import { WhatsappIcon } from '@/components/brand-icons'
import { whatsappLink } from '@/lib/site'

type Props = {
  message?: string
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'green' | 'primary' | 'outline'
  showIcon?: boolean
}

const sizeMap = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-[0.95rem] gap-2',
  lg: 'h-14 px-8 text-base gap-2.5',
}

const variantMap = {
  green: 'bg-whatsapp text-white hover:brightness-105 shadow-lg shadow-whatsapp/25',
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25',
  outline: 'border border-primary/30 bg-white text-primary hover:bg-primary/5',
}

export function WhatsappButton({
  message,
  children,
  className,
  size = 'md',
  variant = 'green',
  showIcon = true,
}: Props) {
  return (
    <Link
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40',
        sizeMap[size],
        variantMap[variant],
        className,
      )}
    >
      {showIcon && <WhatsappIcon className="size-[1.2em]" />}
      {children}
    </Link>
  )
}
