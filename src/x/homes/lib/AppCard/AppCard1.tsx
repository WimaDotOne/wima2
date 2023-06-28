import Image from "next/image"
import cl from "./AppCard1.module.scss"

interface IAppCard1Prop {
  text1: string
  text2: string
  text3: string
  imageSrc: string
  imageAlt: string
  backgroundImageSrc: string
}

export function AppCard1({
  text1,
  text2,
  text3,
  imageSrc,
  imageAlt,
  backgroundImageSrc
}: IAppCard1Prop) {

  const cardStyle = {
    backgroundImage: `url(${backgroundImageSrc})`
  }

  return(<>
  <div className={cl.card} style={cardStyle}>
    <div className={cl.textArea}>
      <div className={cl.text1}>{text1}</div>
      <div className={cl.text2}>{text2}</div>
      <div className={cl.text3}>{text3}</div>
    </div>
    <div className={cl.imageArea}>
      <div className={cl.imageDiv}>
        <Image fill src={imageSrc}
            alt={imageAlt}
        />
      </div>
    </div>
  </div>
  {/* {use app store card design} */}
  </>)
}