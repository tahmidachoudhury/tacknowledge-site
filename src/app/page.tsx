"use client"

import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { SectionTitle } from "@/components/SectionTitle"
import { Benefits } from "@/components/Benefits"
import { Video } from "@/components/Video"
import { Testimonials } from "@/components/Testimonials"
import { Faq } from "@/components/Faq"
import { Cta } from "@/components/Cta"

import { benefitOne, benefitTwo, benefitThree } from "@/components/data"
import { Calendly } from "@/components/Calendly"
import { Maps } from "@/components/Maps"

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Our services"
        title="Why Parents choose us"
      ></SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      <div id="testimonials">
        <SectionTitle
          preTitle="Testimonials"
          title="Real Feedback, Real Results"
        >
          Hear from parents and students about their experiences with us.
        </SectionTitle>

        <Testimonials />
      </div>

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
      <div id="book-a-meeting">
        <SectionTitle preTitle="Book a meeting" title="Ready to meet?">
          Visit our tuition centre this weekend at Global Academy and find out
          how we can help your child.
        </SectionTitle>

        <Calendly />
      </div>

      <SectionTitle
        preTitle="location"
        title="Visit Our Hayes Centre"
      ></SectionTitle>
      <Maps />
    </Container>
  )
}
