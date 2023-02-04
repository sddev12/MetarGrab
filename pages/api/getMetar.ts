// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'POST') {

    let { icao } = req.body

    let reqConfig = {
      method: 'get',
      baseURL: 'https://api.checkwx.com/',
      url: `metar/${icao}/decoded`,
      headers: {
        'X-API-KEY': process.env.API_KEY
      }
    }

    const data = axios.request(reqConfig)
    .then((response) => {
      res.status(200).json(response.data.data[0])
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
}
