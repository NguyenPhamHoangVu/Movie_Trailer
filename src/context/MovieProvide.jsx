import { createContext, useState } from "react";
import PropType from "prop-types";
import Modal from "react-modal";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleTrailer = async (id) => {
    setTrailerUrl("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerUrl(data.results[0].key);
      setmodalIsOpen(true);
    } catch (error) {
      setmodalIsOpen(false);
    }
  };
  return (
    <MovieContext.Provider value={{ handleTrailer }}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setmodalIsOpen(false);
        }}
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerUrl} opts={opts} />;
      </Modal>
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropType.node,
};

export { MovieProvider, MovieContext };
