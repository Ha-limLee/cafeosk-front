// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({"blended":[{"id":8,"name":"망고 바나나 블렌디드","price":5000,"categoryName":"blended","img":"https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/MangoBananaBlended.jpg"}]});
}
