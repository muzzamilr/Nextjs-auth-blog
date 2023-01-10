import jwt from "jsonwebtoken";
import { serialize } from 'cookie';


export default function handler(req, res) {
  if (req.method === 'POST') {
    jwt.verify(req.body.token, "abcdefg");
  }

  res.status(200).json("Invalid Request");

};
