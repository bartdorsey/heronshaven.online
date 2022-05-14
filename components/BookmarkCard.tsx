import styles from "../styles/Home.module.css"
import Image from "next/image"
import { Bookmark } from '@prisma/client'
import { Card, CardContent, Typography, Link } from '@mui/material';
export default function BookmarkCard({ url, title, imageUrl }: Bookmark) {
  return (
    <Card>
      <CardContent>
      <Link underline="hover" href={url}>
        {title}
      </Link>
      </CardContent>
    </Card>
  )
}
