import styles from "../styles/Home.module.css"
import Image from "next/image"

type CardProps = {
  url: string
  title: string
  imageUrl?: string
}

export default function Card({ url, title, imageUrl }: CardProps) {
  return (
    <a href={url} className={styles.card}>
      <h2>{title}</h2>
      {imageUrl ? <Image alt={title} src={imageUrl} /> : ""}
    </a>
  )
}
