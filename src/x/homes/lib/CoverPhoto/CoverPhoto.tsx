import Image from "next/image"
import cl from "./CoverPhoto.module.scss"

interface ICoverPhotoProp {
  src: string
  alt: string
  color?: string
  top?: number
}

export default function CoverPhoto({
  src,
  alt,
  color,
  top
}: ICoverPhotoProp) {

  const style1 = {
    backgroundImage: ""
  }
  top = top || 0

  if (color) {
    style1.backgroundImage = `linear-gradient(${color}, white)`
  }

  return(<>
  <div className={cl.coverDiv} style={style1}>
    <div className={cl.coverPhotoDiv}>
      <Image src={src} 
        alt={alt}
        width={1000}
        height={400}
        style={{
          width: "100%", 
          height: "auto",
          position: "relative",
          top: top+"px"
        }}
      />
    </div>
  </div>
  </>)
}