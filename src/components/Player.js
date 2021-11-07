import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
	audioRef,
	isPlaying,
	setIsPlaying,
	songInfo,
	setSongInfo,
	songs,
	setCurrentSong,
	currentSong,
	setSongs,
}) => {
	useEffect(() => {
		const newSongs = songs.map((eachSong) => {
			if (eachSong.id !== currentSong.id) {
				return {
					...eachSong,
					active: false,
				};
			} else {
				return {
					...eachSong,
					active: true,
				};
			}
		});
		setSongs(newSongs);
	}, [currentSong]);

	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const skipSongHandler = async (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

		if (direction === "skip-forward") {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		} else if (direction === "skip-back") {
			if (currentIndex === 0) {
				await setCurrentSong(songs[songs.length - 1]);
				if (isPlaying) audioRef.current.play();
				return;
			}
			await setCurrentSong(songs[currentIndex - 1]);
		}
		if (isPlaying) audioRef.current.play();
	};

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	const dragHandler = (event) => {
		audioRef.current.currentTime = event.target.value;
		setSongInfo({ ...songInfo, currentTime: event.target.value });
	};

	// Adding Styles to track

	const trackPercentage = {
		transform: `translateX(${songInfo.animationPercentage}%)`,
	};

	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<div className="track">
					<input
						style={{
							background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
						}}
						min={0}
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
						onChange={dragHandler}
						type="range"
					/>
					<div style={trackPercentage} className="animate-track"></div>
				</div>
				<p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
			</div>

			<div className="play-control">
				<FontAwesomeIcon
					onClick={() => skipSongHandler("skip-back")}
					className="skip-back"
					size="2x"
					icon={faAngleLeft}
				/>
				<FontAwesomeIcon
					onClick={playSongHandler}
					className="play"
					size="2x"
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon
					onClick={() => skipSongHandler("skip-forward")}
					className="skip-forward"
					size="2x"
					icon={faAngleRight}
				/>
			</div>
		</div>
	);
};

export default Player;
