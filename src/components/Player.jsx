import { useState, useRef, useEffect, useContext } from "react";
import Playerdetail from "./Playerdetail";
import PlayerControls from "./PlayerControls";
import MyContext from "../context/context";

const Player = () => {
  const context = useContext(MyContext);
  const { currentSongIndex, setCurrentSongIndex, nextSongIndex, songs } =
    context;
  console.log(currentSongIndex);

  const audioEl = useRef(null);
  const [isPlaying, setIsplaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });
  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;
        if (temp > songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <div className="player">
      <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
      <h4>playing now</h4>
      <Playerdetail song={songs[currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>next up</strong>
        <br></br>
        {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
      </p>
    </div>
  );
};

export default Player;
