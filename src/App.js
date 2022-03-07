import React, { useState, useRef } from "react";

import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

import "./styles/app.scss";
import data from "./data";

function App() {
	const audioRef = useRef(null);
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);

	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});

	const background = {
		minHeight: `100vh`,
		backgroundImage: `linear-gradient(120deg, ${currentSong.backgroundColor[0]}, ${currentSong.backgroundColor[1]})`,
	};

	const timeUpdateHandler = (event) => {
		const currentTime = event.target.currentTime;
		const duration = event.target.duration;
		const roundedCurrentTime = Math.round(currentTime);
		const roundedDuration = Math.round(duration);
		const animationPercentage = Math.round(
			(roundedCurrentTime / roundedDuration) * 100
		);
		setSongInfo({ ...setSongInfo, currentTime, duration, animationPercentage });
	};

	const songEndedHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		if (isPlaying) audioRef.current.play();
	};

	return (
		<div
			style={background}
			className={`App ${libraryStatus ? "library-active" : ""}`}
		>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<Song currentSong={currentSong} />
			<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				setCurrentSong={setCurrentSong}
				songs={songs}
				currentSong={currentSong}
				setSongs={setSongs}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>

			<audio
				onTimeUpdate={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onLoadedMetadata={timeUpdateHandler}
				onEnded={songEndedHandler}
			></audio>
		</div>
	);
}

export default App;
