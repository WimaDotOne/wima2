import { Wall } from "@/x/libs/lib2/basic/Wall/Wall";
import { AppCard1 } from "../lib/AppCard/AppCard1";

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
    </Wall>
  </>)
}
