import React, { useState } from "react";
import ReactGlobe from "react-globe";
import styles from "./Globe.module.css";

// import useSound from "use-sound";
// import sound from "../Missle_Launch-Kibblesbob-2118796725.mp3";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { API } from "../api";

// import Navbar from './Navlinks'

function Globe() {
  //   const [play] = useSound(sound);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(userEmail) {
    return /\S+@\S+\.\S+/.test(userEmail);
  }

  const handleButton = async (event) => {
    event.preventDefault();
    // if (!email) {
    console.log("button clicked")
    const emailImage = await API.emailImg(email);
    if (emailImage === "email sent") {
      console.log("email sent")
    }
    // }
  }
  const handleEmail = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    }
    else if (isValidEmail(event.target.value)) {
      setEmail(event.target.value);
      console.log("email is set")
    }
    else {
      setError(null);
    }
  };
  return (
    <Container className={styles.globe} fluid={true} style={{ padding: 0 }}>
      <ReactGlobe height="50vh" width="100%" />
      <div className={styles.homeContent}>
        {/* <Navbar/> */}
        <h1>Welcome To The Space Travel 🌎 react-globe</h1>
        <div className={styles.buttons}>
          {/* <Link to="/space">
            <button onClick={play} className={styles.button}>
              Liftoff! 🚀
            </button>
          </Link> */}

        </div>
        <Container className={styles.aboutContent}>
          <p>⭐🌟☄🌠🌟☀🌌🪐🌍🌚🌙🌕</p>
          <input
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            className={styles.button}
          />
          {error && <h2 style={{ color: 'red' }}>{error}</h2>}
          <button className={styles.button} onClick={handleButton}>
            Email me a picture from nasa
          </button>
          <p>
            SpaceTravel app is built with ReactJS and other libraries like 3JS
            etc. It is also using the NASA API/Unsplash for displaying the
            contents(images/text), which is also used for the text-to-speech
            functionality and many more things.
          </p>
          <p>For more details about the project check the Article series.🌠</p>
        </Container>
      </div>
    </Container>
  );
}

export default Globe;
