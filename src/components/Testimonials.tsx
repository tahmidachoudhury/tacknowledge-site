import Image from "next/image"
import React from "react"
import { Container } from "@/components/Container"

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Aydin <Mark>improved so much</Mark> in Maths. Thank you so much
              for bringing us to this point.
            </p>

            <Avatar name="Shemailah Syed" title="Parent" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              I left the classroom with <Mark>something to build on</Mark> each
              week.
            </p>

            <Avatar name="Yasim Hosseini" title="Year 11 Student" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              If you are planning for your child or yourself to come I{" "}
              <Mark>recommend it.</Mark>
            </p>

            <Avatar name="Habib Ullah" title="Year 10 Student" />
          </div>
        </div>
      </div>
    </Container>
  )
}

interface AvatarProps {
  name: string
  title: string
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  )
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-[#d86e45] bg-orange-100 rounded-md ring-orange-100 ring-4 dark:ring-orange-900/30 dark:bg-orange-900/30 dark:text-orange-300">
        {props.children}
      </mark>{" "}
    </>
  )
}
