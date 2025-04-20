import Link from "next/link"
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"

export const metadata = {
  title: "Contact Us | Tacknowledge",
  description:
    "Get in touch with Tacknowledge — the leading tuition service in town. We're here to answer your questions and help your child succeed.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsappButton from "./WhatsappButton"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We&apos;re here to help you achieve academic excellence. Reach out to
          us today.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="mr-4 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">
                    <a href="tel:+447356202485">+44 7356 202 485</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    <a href="mailto:contact@tacknowledge.co.uk">
                      contact@tacknowledge.co.uk
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Address</p>

                  <p className="text-muted-foreground">
                    1 Record Walk
                    <br />
                    The Old Vinyl Factory
                    <br />
                    Hayes, UB3 1DH
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="mr-4 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Opening Hours</p>
                  <div className="text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-8">
              <h3 className="mb-4 text-lg font-medium">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="rounded-full p-2 hover:bg-muted"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>

                <Link
                  href="https://instagram.com"
                  className="rounded-full p-2 hover:bg-muted"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="rounded-full p-2 hover:bg-muted"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div> */}
          </CardContent>
        </Card>

        <div className="flex flex-col space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Our Location</h2>
              <div className="aspect-video w-full overflow-hidden rounded-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4705801010127!2d-0.4276032911027068!3d51.5045821346928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876731f725afb59%3A0x820ea5df77a04064!2sTacknowledge!5e0!3m2!1sen!2suk!4v1745180417430!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="mt-4 text-muted-foreground">
                Conveniently located near Hayes and Harlington Station, with
                ample parking and public transportation options nearby.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Send Us a Message</h2>
              <WhatsappButton />

              <p className="mt-4 text-center text-sm text-muted-foreground">
                We typically respond within minutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
