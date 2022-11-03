// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({"espresso": [{ "id": 3, "name": "에스프레소", "price": 2500, "categoryName": "espresso", "img": "https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/coffee/espresso.jpg" }, { "id": 4, "name": "카페 아메리카노", "price": 3500, "categoryName": "espresso", "img": "https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/coffee/CoffeAmericano.jpg" }, { "id": 5, "name": "아이스 카페 아메리카노", "price": 4500, "categoryName": "espresso", "img": "https://cafe-osk-img.s3.ap-northeast-2.amazonaws.com/coffee/IcedCoffeeAmericano.jpg" }]});
}
