// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({"frappuccino":[{"id":6,"name":"모카 프라푸치노","price":6500,"categoryName":"frappuccino","img":"https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/MochaFrappuccino.jpg"},{"id":7,"name":"에스프레소 프라푸치노","price":5500,"categoryName":"frappuccino","img":"https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/EspressoFrappuccino.jpg"}]});
}
