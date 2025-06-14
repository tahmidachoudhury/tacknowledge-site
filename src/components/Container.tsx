import React from "react"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container p-6 mx-auto bg-background xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  )
}
