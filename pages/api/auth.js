import jwt from "jsonwebtoken";
import { serialize } from 'cookie';


export default function handler(req, res) {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  //
  //
  if (req.method === 'POST') {

    const user = {
      "username": req.body.username,
      "password": req.body.password,
      "status": 200,
    }
    const token = jwt.sign({
      user: user
    }, process.env.NEXT_PUBLIC_JWT_KEY, { expiresIn: '12h' })

    res.send(token);
  }

  res.status(200).json("Invalid Request");

};
