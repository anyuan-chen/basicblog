import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { tile, image, borderLink } from "./SocialTile.module.css"

export default function SocialTile(props) {
  if (props.src.includes("binarysearch")) {
    return (
      <a className={borderLink} href={props.url} target="blank">
        <div className={tile}>
          <StaticImage
            src="../images/binarysearchlogo.png"
            width="45"
            className={image}
          ></StaticImage>
          <h4>{props.text}</h4>
        </div>
      </a>
    )
  } else if (props.src.includes("atcoder")) {
    return (
      <a className={borderLink} href={props.url} target="blank">
        <div className={tile}>
          <StaticImage src="../images/atcoderlogo.png" width="50"></StaticImage>
          <h4>{props.text}</h4>
        </div>
      </a>
    )
  } else if (props.src.includes("codeforces")) {
    return (
      <a className={borderLink} href={props.url} target="blank">
        <div className={tile}>
          <StaticImage
            src="../images/codeforceslogo.png"
            width="50"
          ></StaticImage>
          <h4>{props.text}</h4>
        </div>
      </a>
    )
  } else if (props.src.includes("dmoj")) {
    return (
      <a className={borderLink} href={props.url} target="blank">
        <div className={tile}>
          <StaticImage src="../images/dmojlogo.png" width="50"></StaticImage>
          <h4>{props.text}</h4>
        </div>
      </a>
    )
  }
}
