// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { docsConfig } from "@/config/docs"

export default async function getData(_: NextApiRequest, res: NextApiResponse) {
  {
    docsConfig.sidebarNav.map((item, index) => {
      axios
        .get(
          `https://api.unsplash.com/photos?page=1&query=${item.title}&client_id=_AdFcnEst-tD7ACzxbMpUMzlFiXS4tpD7WQoAeRo8Bk`
        )
        .then((response: any) => {
          let data = response.data.urls.small;
          res.status(200).json(data);
        })
        .catch((error: any) => {
            res.status(500).json({ error: 'An error occurred' });
        })
    })
  }
}
