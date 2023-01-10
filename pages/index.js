import { getCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/auth/action-creators";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async ({ req, res }) => {
	const cookie = getCookie("token", { req, res });
	if (!cookie) return { props: { isAuthenticated: false } };

	try {
		const isAuthenticated = await jwt.verify(
			cookie,
			`${process.env.NEXT_PUBLIC_JWT_KEY}`,
		);
		return { props: { isAuthenticated: isAuthenticated } };
	} catch (err) {
		return { props: { isAuthenticated: false } };
	}
};

export default function Home({ isAuthenticated }) {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
	const router = useRouter();

	useEffect(() => {
		// rome-ignore lint/complexity/useSimplifiedLogicExpression: <explanation>
		if (!isAuthenticated || !isLoggedIn) {
			dispatch(logoutUser());
			router.push("/signin");
		}
	}, [isAuthenticated, isLoggedIn]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>
			<p>hello</p>

			<button onClick={() => dispatch(logoutUser())}>Logout</button>
		</div>
	);
}
