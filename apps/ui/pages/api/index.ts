import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'

export default function index(req: NextApiRequest, res: NextApiResponse) {
  axios.get("http://localhost:3333/api").then(response => {
    res.status(response.status).json(response.data);
  }).catch(console.error);
}