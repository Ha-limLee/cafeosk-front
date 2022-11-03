// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({"drink":[{"id":11,"name":"시그니처 핫 초콜릿","price":4000,"categoryName":"drink","img":"https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/SignatureHotChocolate.jpg"},{"id":12,"name":"아이스 시그니처 초콜릿","price":4500,"categoryName":"drink","img":"https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/IceSignatureChocolate.jpg"}]});
}
