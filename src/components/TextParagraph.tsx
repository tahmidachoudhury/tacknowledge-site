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
      className={`w-full py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 ${className}`}
    >
      {children}
    </p>
  )
}
