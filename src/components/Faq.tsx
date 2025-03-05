"use client"
import React from "react"
import { Container } from "@/components/Container"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/24/solid"

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-orange-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  )
}

const faqdata = [
  {
    question: "When can we expect to see results?",
    answer:
      "Every student progresses at their own pace, but most see noticeable improvements within a few months. With regular attendance, consistent effort, and our tailored support, many students gain confidence and achieve better results in their exams within 90 days.",
  },
  {
    question: "What subjects do you provide tuition for?",
    answer:
      "We offer tuition for KS2 English and Maths, as well as GCSE Maths, English, and Science. Currently, Maths tuition is available for A-Level only.",
  },
  {
    question: "Do you offer online lessons?",
    answer:
      "Yes, we do! Our online lessons are available to students across the UK.",
  },
  {
    question: "Is there an entrance exam?",
    answer:
      "Nope! No entrance exams, instead we offer a free trial lesson for all parents, allowing us to identify any weaknesses and strengths in your child's learning.",
  },
]
