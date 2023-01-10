import jwt from "jsonwebtoken";

export default function handler(req, res) {
	if (req.method === "POST") {
		const user = {
			username: req.body.username,
			password: req.body.password,
			status: 200,
		};
		const token = jwt.sign(
			{
				user: user,
			},
			`${process.env.NEXT_PUBLIC_JWT_KEY}`,
			{ expiresIn: "12h" },
		);

		return res.send(token);
	}

	return res.status(200).json("Invalid Request");
}
