//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import { useState, useEffect } from "react";

export default function App() {
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		const curTime = new Date().getHours();

		if (curTime >= 0 && curTime < 12) {
			setGreeting("Good morning");
		} else if (curTime >= 12 && curTime < 18) {
			setGreeting("Good Afternoon");
		} else {
			setGreeting("Good evening");
		}
	}, []);

	return (
		<h1
			className="heading"
			style={{
				color:
					greeting === "Good morning"
						? "red"
						: greeting === "Good Afternoon"
						? "green"
						: "blue",
			}}
		>
			{greeting}
		</h1>
	);
}
