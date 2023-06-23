import Image from "next/image"
import cl from "./ProfilePhoto.module.scss"

interface IProfilePhotoProp {
  src: string
  alt: string
  text: string
}

export default function ProfilePhoto({
  src,
  alt,
  text
}: IProfilePhotoProp) {
  return(<>
  <div className={cl.row1}>
    <div className={cl.photoDivWrap}>
      <div className={cl.photoDiv}>
        <Image src={src} alt={alt} 
          fill
        />
      </div>
    </div>
    <div className={cl.photoSpace} />
    <div className={cl.textSpace}>
      <div className={cl.textDiv}>{text}</div>
    </div>
  </div>
  </>)
}