"use client"

import { Container } from "@/components/Container"
import Image from "next/image"
import { SectionTitle } from "@/components/SectionTitle"
import { TextParagraph } from "@/components/TextParagraph"
import Link from "next/link"
import { Mark } from "@/components/Testimonials"
import { Maps } from "@/components/Maps"

export default function About() {
  return (
    <Container>
      <SectionTitle
        preTitle="tacknowledge"
        title="Hayes Tuition Centre"
      ></SectionTitle>
      <div className="relative w-full h-80 lg:h-[800px]">
        <Image
          src="/img/global-academy-sunny.jpg"
          fill
          alt="global-academy"
          className={"object-cover"}
        />
      </div>

      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className="flex flex-col lg:w-1/2">
          <SectionTitle
            align="left"
            title="Discover Exceptional Tuition in Hayes with Tacknowledge"
          ></SectionTitle>
          <TextParagraph>
            At Tacknowledge, we are dedicated to providing high-quality,
            personalized tutoring in Hayes to help your child succeed
            academically. Whether your child is struggling with foundational
            concepts or aiming for top grades in their GCSEs or A-Levels, our
            experienced and qualified tutors are here to guide them every step
            of the way. Our tuition centre at Global Academy, Hayes, offers a
            comfortable and supportive environment where students can thrive and
            build confidence in subjects like Maths, English, and Science. We
            understand that every student is unique, which is why our approach
            is tailored to meet their individual learning needs, ensuring they
            get the most out of each session.
          </TextParagraph>
          <SectionTitle
            align="left"
            title="Why Choose Tacknowledge in Hayes?"
          ></SectionTitle>
          <TextParagraph>
            Choosing the right tuition centre for your child is an important
            decision. At Tacknowledge, we stand out for our commitment to
            excellence and student-centred approach. Our tutors are not only
            qualified and experienced but also passionate about helping students
            achieve their academic goals. From providing structured lessons to
            offering flexible timetables that work around your family’s
            schedule, we ensure that your child’s education is both effective
            and convenient. Whether they need extra help with coursework or are
            preparing for important exams, we’re here to support their learning
            journey every step of the way.
          </TextParagraph>
          <SectionTitle
            align="left"
            title="Success Stories from Hayes Parents and Students"
          ></SectionTitle>
          <TextParagraph>
            We take pride in the results our students achieve and the positive
            impact our tutoring has on their academic performance. Parents in
            Hayes trust us to help their children overcome challenges and reach
            their full potential. With tailored lessons, consistent feedback,
            and a focus on building confidence, many of our students have
            improved their grades and gone on to achieve excellent results in
            their exams. Don’t just take our word for it—
            <Mark>
              <Link href="/#testimonials">read our testimonials</Link>
            </Mark>{" "}
            to see how Tacknowledge has helped students in Hayes excel. We
            invite you to contact us today for a free consultation or to book
            your child’s first lesson.
          </TextParagraph>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
          <div className="relative w-full h-80 lg:h-[600px]">
            <Image
              src="/img/jibreel-lesson.jpg"
              fill
              alt="1-on-1-lesson"
              className={"object-cover"}
            />
          </div>
        </div>
      </Container>
      <Maps />
    </Container>
  )
}
