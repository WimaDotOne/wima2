import Image from "next/image"
import cl from "./AppCard2.module.scss"

interface IAppCard2Prop {
  text1: string
  text2: string
  text3: string
  imageSrc: string
  imageAlt: string
}

export default function AppCard2({
  text1,
  text2,
  text3,
  imageSrc,
  imageAlt
}: IAppCard2Prop) {
  return(<>
  <div className={cl.card}>
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
  </>)
}