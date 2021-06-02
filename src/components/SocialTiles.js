import React from "react"
import SocialTile from "./SocialTile"

export default function SocialTiles() {
  let properties = [
    {
      key: 1,
      src: "../images/binarysearchlogo.png",
      text: "Binary Search",
      color: "rgba(224,223,224,100%)",
    },
  ]
  let listTiles = properties.map((tileProperties) => 
    <SocialTile
      key={tileProperties.key}
      src={tileProperties.src}
      text={tileProperties.text}
      color={tileProperties.color}
    >
    </SocialTile>
  )
  return <div>{listTiles}
  </div>
}
