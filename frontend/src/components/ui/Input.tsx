'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-brand-charcoal"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-1" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          className={cn(
            'w-full px-4 py-2.5 text-sm text-brand-charcoal bg-white',
            'border border-gray-200 rounded-sm',
            'placeholder:text-brand-gray-warm',
            'focus:outline-none focus:ring-2 focus:ring-brand-burgundy focus:border-transparent',
            'transition-colors duration-200',
            error && 'border-red-400 focus:ring-red-400',
            props.disabled && 'opacity-60 cursor-not-allowed bg-brand-cream',
            className
          )}
          {...props}
        />

        {error && (
          <p id={`${inputId}-error`} className="text-xs text-red-500" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-xs text-brand-gray-warm">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
