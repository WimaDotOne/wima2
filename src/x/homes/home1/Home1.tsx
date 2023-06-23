import { Wall } from "@/x/libs/lib2/basic/Wall/Wall";
import CoverPhoto from "../lib/CoverPhoto/CoverPhoto";
import ProfilePhoto from "../lib/ProfilePhoto/ProfilePhoto";

export default function Home1() {
  return (<>
    <CoverPhoto src="/home1/ariel.jpg"
      alt="Cover photo. Ariel sitting at the bottom of sea looking up."
      color="#5399d5"
      top={-30}
    />
    <Wall>
      <ProfilePhoto src="/home1/fan.jpg"
        alt="Profile picture of Fan"
        text="College Math Tutoring"
      />
    </Wall>
  </>)
}
