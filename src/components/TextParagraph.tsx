"use client"

interface TextParagraphPrompts {
  children: React.ReactNode
  className?: string
}

export const TextParagraph = ({
  children,
  className,
}: TextParagraphPrompts) => {
  return (
    <p
      className={`w-full py-4 text-lg leading-normal text-muted-foreground  lg:text-xl xl:text-xl ${className}`}
    >
      {children}
    </p>
  )
}
