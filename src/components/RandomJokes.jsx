import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Box } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const baseURL = "https://api.chucknorris.io/jokes/random";

const RandomJokes = () => {
  const [joke, setJoke] = useState(null);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    getRandomJoke();
  }, []);

  const getRandomJoke = async () => {
    await axios.get(baseURL).then((response) => {
      setJoke(response.data.value);
    });
  };

  const voteLike = () => {
    setLike(like + 1);
  };

  const voteDisLike = () => {
    setDislike(dislike + 1);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1>{joke}</h1>
    <Button variant="contained" onClick={getRandomJoke}>
      New Joke
    </Button>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <Button variant="contained" onClick={voteLike} sx={{ marginRight: 2 }}>
        Like ({like})
      </Button>
      <Button variant="contained" onClick={voteDisLike}>
        Dislike ({dislike})
      </Button>
    </Box>
  </Box>
  );
};

export default RandomJokes;
