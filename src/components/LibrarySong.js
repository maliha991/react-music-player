import React from "react";

const LibrarySong = ({
	song,
	setCurrentSong,
	audioRef,
	isPlaying,
	songs,
	setSongs,
}) => {
	const selectSongHandler = async () => {
		await setCurrentSong(song);
		const newSongs = songs.map((eachSong) => {
			if (eachSong.id !== song.id) {
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
		if (isPlaying) audioRef.current.play();
	};

	return (
		<div
			onClick={selectSongHandler}
			className={`library-song ${song.active ? "selected" : ""}`}
		>
			<img src={song.cover} alt={song.name} />
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
