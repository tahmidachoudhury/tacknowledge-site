import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  RocketLaunchIcon,
  ScaleIcon,
  UsersIcon,
  AcademicCapIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  BellAlertIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/solid"

import benefitOneImg from "../../public/img/benefit-one.png"
import benefitTwoImg from "../../public/img/benefit-two.png"
import benefitThreeImg from "../../public/img/benefit-three.png"

const benefitOneColor = "#d86e45"
const benefitTwoColor = "#f7bf05"
const benefitThreeColor = "#93c3d3"
import { color } from "framer-motion"
//import benefitFourImg from "../../public/img/benefit-four.png"

const benefitOne = {
  title: "Small group classes",
  desc: "Our group classes are small and focused, with no more than five students per class. This ensures each student gets the focused attention they need.",
  image: benefitOneImg,
  bullets: [
    {
      color: benefitOneColor,
      title: "Individual Support",
      desc: "Tutors can give each student the attention they need.",
      icon: <UsersIcon />,
    },
    {
      color: benefitOneColor,
      title: "Level-Matched Groups",
      desc: "Students learn with peers at a similar skill level.",
      icon: <ScaleIcon />,
    },
    {
      color: benefitOneColor,
      title: "Faster Progress",
      desc: "A smaller, focused setting helps students improve quickly.",
      icon: <RocketLaunchIcon />,
    },
  ],
}

const benefitTwo = {
  title: "Monthly Exams",
  desc: "Our monthly exams are carefully designed by our tutors, tailored to the specific topics your child has covered in the previous 4 weeks.",
  image: benefitTwoImg,
  bullets: [
    {
      color: benefitTwoColor,
      title: "Personalised Assessments",
      desc: "Each exam is custom-made to match the topics being covered in school.",
      icon: <AcademicCapIcon />,
    },
    {
      color: benefitTwoColor,
      title: "Targeted Improvement",
      desc: "We can identify strengths and target areas that need more focus.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      color: benefitTwoColor,
      title: "Build Exam Confidence",
      desc: "Regular practice helps your child become familiar with exam conditions and improve performance.",
      icon: <ArrowTrendingUpIcon />,
    },
  ],
}

const benefitThree = {
  title: "We keep you in the loop",
  desc: "Clear communication is key. We keep you updated on your child's progress and any exams right away.",
  image: benefitThreeImg,
  bullets: [
    {
      color: benefitThreeColor,
      title: "Open Communication",
      desc: "Reach out anytime with questions or concerns.",
      icon: <BellAlertIcon />,
    },
    {
      color: benefitThreeColor,
      title: "Regular Updates",
      desc: "Stay informed about your child's progress and achievements.",
      icon: <ArrowsUpDownIcon />,
    },
  ],
}

// const benefitFour = {
//   title: "Preparing for the future",
//   desc: "We hold career workshops and insight events, open to students and undergraduates.",
//   image: benefitFourImg,
//   bullets: [
//     {
//       title: "Essential Skills",
//       desc: "Understand CVs, cover letters, and interviews to prepare for the future.",
//       icon: <BellAlertIcon />,
//     },
//     {
//       title: "Insight Events",
//       desc: "Explore different career paths with people in the industry.",
//       icon: <ArrowsUpDownIcon />,
//     },
//   ],
// }

export { benefitOne, benefitTwo, benefitThree }
