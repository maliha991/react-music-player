import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
	songs,
	setCurrentSong,
	audioRef,
	isPlaying,
	setSongs,
	libraryStatus,
}) => {
	return (
		<div className={`library ${libraryStatus ? "active-library" : ""}`}>
			<h1>Library</h1>
			{songs.map((song) => (
				<LibrarySong
					song={song}
					setCurrentSong={setCurrentSong}
					key={song.id}
					audioRef={audioRef}
					isPlaying={isPlaying}
					songs={songs}
					setSongs={setSongs}
				/>
			))}
		</div>
	);
};

export default Library;
