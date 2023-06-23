import { ReactNode } from "react"
import cl from "./Wall.module.scss"


interface IWallProp {
  maxWidth?: number
  children: ReactNode
}

export function Wall({
  maxWidth,
  children
}: IWallProp) {

  const style1 = {
    maxWidth: ""
  }

  if(maxWidth) {
    style1.maxWidth = maxWidth + "px"
  }
  return(<>
    <div className={cl.space}>
      <div className={cl.wall} style={style1}>
      {children}
      </div>
    </div>
  </>)
}