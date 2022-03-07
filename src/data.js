import { v4 as uuidv4 } from "uuid";

function chillHop() {
	return [
		{
			name: "Beaver Creek",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Aso, Middle School, Aviino",
			id: uuidv4(),
			active: true,
			color: ["#205950", "#2ab3bf"],
			backgroundColor: ["rgba(32, 89, 80, 0.5)", "rgba(42, 179, 191, 0.5)"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10076",
		},
		{
			name: "Daydream",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			id: uuidv4(),
			active: false,
			color: ["#EF8EA9", "#ab417f"],
			backgroundColor: ["rgba(239, 142, 169, 0.5)", "rgba(171, 65, 127, 0.5)"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9275",
		},
		{
			name: "Keep Going",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			id: uuidv4(),
			active: false,
			color: ["#CD607D", "#c94043"],
			backgroundColor: ["rgba(205, 96, 125, 0.5)", "rgba(201, 64, 67, 0.5)"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
		},
		{
			name: "Nightfall",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			id: uuidv4(),
			active: false,
			color: ["#EF8EA9", "#ab417f"],
			backgroundColor: ["rgba(239, 142, 169, 0.5)", "rgba(171, 65, 127, 0.5)"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
		},
		{
			name: "Reflection",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			id: uuidv4(),
			active: false,
			color: ["#CD607D", "#c94043"],
			backgroundColor: ["rgba(205, 96, 125, 0.5)", "rgba(201, 64, 67, 0.5)"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
		},
		{
			name: "Under the city stars",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Middle School, Aso, Aviino",
			id: uuidv4(),
			active: false,
			color: ["#205950", "#2ab3bf"],
			backgroundColor: ["rgba(32, 89, 80, 0.5)", "rgba(42, 179, 191, 0.5)"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
		},
		{
			name: "Jazz Cabbage",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
			artist: "Strehlow",
			id: uuidv4(),
			active: false,
			color: ["#BF4C42", "#F4B29A"],
			backgroundColor: ["rgba(191, 76, 66, 0.5)", "rgba(244, 178, 154, 0.5)"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9363",
		},
		{
			name: "Got It",
			cover:
				"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
			artist: "Misha, Jussi Halme",
			id: uuidv4(),
			active: false,
			color: ["#E56F71", "#DCA3A4"],
			backgroundColor: ["rgba(229, 111, 113, 0.5)", "rgba(220, 163, 164, 0.5)"],
			audio: "https://mp3.chillhop.com/serve.php/?mp3=15041",
		},
	];
}

export default chillHop;
