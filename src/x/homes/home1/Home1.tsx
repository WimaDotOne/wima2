import { Wall } from "@/x/libs/lib2/basic/Wall/Wall";
import { AppCard1 } from "../lib/AppCard/AppCard1";
import cl from "./Home1.module.scss"
import AppCard2 from "../lib/AppCard/AppCard2";

export default function Home1() {
  return (<>
    <Wall>
      <AppCard1 
        text1="Math Tutoring"
        text2="UW-Madison & Edgewood"
        text3="Calculus and pre-calculus in person tutoring."
        imageAlt="A picture of website creator"
        imageSrc="/home1/fan3.png"
        backgroundImageSrc="/home1/glitterBlue.webp"
      />
      <div className={cl.app2}>
        <AppCard2
          text1="College Calculus"
          text2="Calculus Courses"
          text3="Crash course for calculus I, calculus II"
          imageAlt="Calculus YouTube Course"
          imageSrc="/home1/unrequitedMath2.jpg"
        />
        <AppCard2
          text1="Chinese for beginners"
          text2="Coming soon..."
          text3="Comming soon..."
          imageAlt="Learn Chinese"
          imageSrc="/home1/questionMark.jpg"
        />
      </div>
    </Wall>
  </>)
}
