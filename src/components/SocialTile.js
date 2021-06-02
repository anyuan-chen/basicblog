import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {tile} from "./SocialTile.module.css"

export default function SocialTile(props) {
  if (props.src.includes("binarysearch")) {
    return (
      <div className={tile}>
        <StaticImage
          src="../images/binarysearchlogo.png"
          width="50"
        ></StaticImage>
        <h3>{props.text}</h3>
      </div>
    )
  } else if (props.src.includes("atcoder")) {
    return (
      <div className={tile}>
        <StaticImage src="../images/atcoderlogo.png" width="50"></StaticImage>
        <h3>{props.text}</h3>
      </div>
    )
  } else if (props.src.includes("codeforces")) {
    return (
      <div className={tile}>
        <StaticImage
          src="../images/codeforceslogo.png"
          width="50"
        ></StaticImage>
        <h3>{props.text}</h3>
      </div>
    )
  } else if (props.src.includes("dmoj")) {
    return (
      <div className={tile}>
        <StaticImage src="../images/dmojlogo.png" width="50"></StaticImage>
        <h3>{props.text}</h3>
      </div>
    )
  }
}
