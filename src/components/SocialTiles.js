import React from "react"
import SocialTile from "./SocialTile"

export default function SocialTiles() {
  let properties = [
    {
      key: 1,
      src: "../images/binarysearchlogo.png",
      text: "Binary Search",
      color: "rgba(224,223,224,100%)",
      url: "https://binarysearch.com/@/LilyHeart"
    },
    {
      key: 2,
      src: "../images/atcoderlogo.png",
      text: "AtCoder",
      color: "rgba(224,223,224,100%)",
      url: "https://atcoder.jp/users/LilyHeart"

    },
    {
      key: 3,
      src: "../images/codeforceslogo.png",
      text: "CodeForces",
      color: "rgba(224,223,224,100%)",
      url: "https://codeforces.com/profile/lilyheartt"

    },
    {
      key: 4,
      src: "../images/dmojlogo.png",
      text: "DMOJ",
      color: "rgba(224,223,224,100%)",
      url: "https://dmoj.ca/user/andrewchenanyuan"

    }
  ]
  let listTiles = properties.map((tileProperties) => 
    <SocialTile
      key={tileProperties.key}
      src={tileProperties.src}
      text={tileProperties.text}
      color={tileProperties.color}
      url={tileProperties.url}
    >
    </SocialTile>
  )
  return <div>{listTiles}
  </div>
}
