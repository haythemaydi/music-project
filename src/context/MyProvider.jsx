import { useState, useEffect } from "react";
import MyContext from "./context";
import useFetch from "../hook/useFetch";
const MyProvider = ({ children }) => {
  const USER = process.env.REACT_APP_EMAIL;
  const PASSWORD = process.env.REACT_APP_PASSWORD;
  const REPEAT_PASSWORD = process.env.REACT_APP_REPEAT_PASSWORD;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [form, setForm] = useState({ user: "", password: "" });
  const [auth, setAuth] = useState(false);
  const [songs] = useState([
    {
      title: "habaitek",
      artist: "feyrouz",
      img_src: "./image/feyrouz.jpg",
      src: "./music/habaitek.mp3",
    },
    {
      title: "je t'aime",
      artist: "lara fabian",
      img_src: "./image/fabian.jpg",
      src: "./music/je t'aime.mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  const handleFormInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    form.user === USER &&
    form.password === PASSWORD &&
    form.repeatPassword === REPEAT_PASSWORD
      ? setAuth(true)
      : setAuth(false);
    setForm({ user: "", password: "", repeatPassword: "" });
  };

  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
  const initialState = { results: null, loading: true, error: null };

  const { results, loading, error } = useFetch(url, initialState);
  console.log(results);

  return (
    <MyContext.Provider
      value={{
        currentSongIndex,
        setCurrentSongIndex,
        nextSongIndex,
        form,
        handleFormInput,
        handleFormSubmit,
        auth,
        results,
        loading,
        error,
        API_KEY,
        songs,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
