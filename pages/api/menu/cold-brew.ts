// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({"cold-brew":[{"id":1,"name":"나이트로 콜드 브루","price":5500,"categoryName":"cold-brew","img":"https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/coffee/NitroColdBrew.jpg"},{"id":2,"name":"돌체 콜드 브루","price":4500,"categoryName":"cold-brew","img":"https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/coffee/DolceColdBrew.jpg"}]});
}
