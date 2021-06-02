import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function SocialTile(props) {
  return (
    <div style={{ backgroundColor: props.color }}>
      <StaticImage src={props.src} height="50" width="50"></StaticImage>
      <h3>{props.text}</h3>
    </div>
  )
}
