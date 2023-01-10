import jwt from "jsonwebtoken";

export default function handler(req, res) {
	if (req.method === "POST") {
		const user = {
			username: req.body.username,
			// password: req.body.password,
			status: "got it",
		};
		const token = jwt.sign(
			{
				user: user,
			},
			process.env.NEXT_PUBLIC_JWT_KEY,
			{ expiresIn: "12h" },
		);

		return res.json(token);
	}

	return res.status(401).json("Invalid Request");
}
