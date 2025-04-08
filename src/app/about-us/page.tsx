import { Container } from "@/components/Container"
import Image from "next/image"
import { SectionTitle } from "@/components/SectionTitle"
import { TextParagraph } from "@/components/TextParagraph"

export const metadata = {
  title: "About Us | Tacknowledge",
  description:
    "Learn more about our mission, our expert tutors, and how Tacknowledge is helping students unlock their potential.",
}

export default function About() {
  return (
    <Container>
      <SectionTitle
        preTitle="about us"
        title="Welcome to Tacknowledge"
      ></SectionTitle>
      <div className="relative w-full h-80">
        <Image
          src="/img/about-us-hero.jpg"
          fill
          alt="table"
          className="object-cover"
        />
      </div>
      <SectionTitle
        align="left"
        preTitle="2023-present"
        title="How did we get here?"
      ></SectionTitle>

      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap px-0">
        <div className="flex flex-col lg:w-1/2">
          <TextParagraph>
            Founded in 2023, Tacknowledge set out to provide high-quality
            tuition in Maths, English & Science for students from KS2 to
            A-Level. What began as small group and 1-on-1 lessons in libraries
            around Hillingdon quickly gained recognition as parents saw rapid
            improvements in their children’s grades, confidence, and motivation.
          </TextParagraph>

          <TextParagraph>
            To meet growing demand, we opened our first tuition centre at Global
            Academy, Hayes, providing expert in-person tutoring for students in
            Hayes and surrounding areas such as Uxbridge, Southall, Harlington
            and throughout West London. In addition to face-to-face tuition, we
            have expanded our services to offer online tuition, making
            high-quality support accessible to students nationwide.
          </TextParagraph>
          <TextParagraph>
            At Tacknowledge, we go beyond standard GCSE tutoring and KS2
            tutoring by offering A-Level support, 11+ preparation, and tailored
            guidance to help students achieve top grades and build a strong
            academic foundation. Our comprehensive services also include career
            workshops, skills-based training, and school assemblies, which
            prepare students for their future career paths and equip them with
            essential life skills. Whether your child aspires to become a
            doctor, lawyer, or pursue another career, Tacknowledge provides
            expert tuition and the guidance they need to succeed in exams and
            beyond.
          </TextParagraph>

          <TextParagraph>
            We believe in holistic support, focusing not just on exam success
            but also on personal development. From GCSE mastery to A-Level
            tutoring, Tacknowledge prepares students for success in West London
            and beyond, ensuring they gain the knowledge, confidence, and skills
            they need to thrive in school and in life.
          </TextParagraph>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 lg:order-1">
          <div>
            <Image
              src="/img/benefit-two.png"
              width={521}
              height={521}
              alt="Benefits"
              className={"object-cover"}
            />
          </div>
        </div>
      </Container>
    </Container>
  )
}
