'use client';

import { Phone } from 'lucide-react';
import { clsx } from 'clsx';
import { WHATSAPP_LINK } from '@/lib/contact';

interface CTAWhatsAppProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'green' | 'light' | 'dark';
  fullWidth?: boolean;
  className?: string;
}

export default function CTAWhatsApp({
  size = 'medium',
  variant = 'green',
  fullWidth = false,
  className,
}: CTAWhatsAppProps) {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    green: 'bg-green-500 hover:bg-green-600 text-white',
    light: 'bg-white hover:bg-gray-100 text-brand-dark',
    dark: 'bg-brand-dark hover:bg-gray-800 text-white border border-gray-300',
  };

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'inline-flex items-center justify-center space-x-2 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105',
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && 'w-full',
        className
      )}
    >
      <Phone className={clsx(
        size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-6 h-6' : 'w-5 h-5'
      )} />
      <span>Contact WhatsApp</span>
    </a>
  );
}
