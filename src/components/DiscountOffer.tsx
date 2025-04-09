"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Brain, Coffee, HandCoins, Lightbulb, Unlink, Zap } from "lucide-react"
import Link from "next/link"
import { Mark } from "./Testimonials"

export function DiscountPopup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-screen flex justify-center">
          <span className="w-full text-center text-sm md:text-base bg-secondary hover:bg-secondary/80 text-black font-semibold py-2 px-4 transition-colors duration-300 cursor-pointer">
            20% off when you enrol with another parent. Book a meeting today.
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[1000px] rounded-xl bg-white">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card className="overflow-hidden ">
            <CardContent className="grid p-0 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <h1 className="text-3xl ">Bring a Friend. Save Together!</h1>
                  <p className="text-balance text-muted-foreground">
                    Sign up with another parent and get{" "}
                    <Mark>20% off all group classes</Mark> — here’s why it’s
                    better together:
                  </p>
                  <div className="flex items-center gap-2">
                    <Lightbulb />
                    <span>Boost motivation with a familiar face</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HandCoins />
                    <span>Save money while learning smarter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Unlink />
                    <span>No long-term contracts — cancel anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap />
                    <span>
                      Learn social and teamwork skills alongside academics
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee />
                    <span>
                      Enjoy the journey together — share wins, insights, and
                      encouragement
                    </span>
                  </div>
                  <DialogClose asChild>
                    <Button variant="secondary" className="w-full">
                      Book a Call
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full">
                      Maybe later
                    </Button>
                  </DialogClose>

                  {/* <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="underline underline-offset-4">
                      Sign up
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="relative hidden bg-muted md:block">
                <img
                  src="/img/benefit-one.png"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
