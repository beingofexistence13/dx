// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

import { docsConfig } from "@/config/docs"

export default async function getData(_: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get("https://api.unsplash.com/photos?page=1&query=superman&client_id=_AdFcnEst-tD7ACzxbMpUMzlFiXS4tpD7WQoAeRo8Bk");
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}
