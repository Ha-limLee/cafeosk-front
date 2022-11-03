// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({"tea":[{"id":9,"name":"말차 샷 아포가토","price":4500,"categoryName":"tea","img":"https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/MalchaShotAffogato.jpg"},{"id":10,"name":"민트 블렌드 티","price":4500,"categoryName":"tea","img":"https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/MintBlendedBrewedTea.jpg"}]});
}
