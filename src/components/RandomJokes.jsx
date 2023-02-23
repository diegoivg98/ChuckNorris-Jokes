import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const baseURL = "https://api.chucknorris.io/jokes/random";

const RandomJokes = () => {
    const [joke, setJoke] = useState(null);

    useEffect(() => {
        getRandomJoke()
    }, []);

    const getRandomJoke = () => {
        axios.get(baseURL)
            .then((response) => {
                setJoke(response.data.value)
            })
    }

    return <div>
        <h1>Chuck Norris Random Jokes</h1>
        <p>{joke}</p>
        <Button onClick={getRandomJoke} variant="contained" endIcon={<RestartAltIcon />}>Generate Random Joke</Button>
    </div>;
};

export default RandomJokes;
