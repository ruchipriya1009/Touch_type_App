import React, { useState, useRef, useEffect } from "react";
import "./Typepage.css";
import { Link } from "react-router-dom";

const getcloud = () =>
  `asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; dad ask sad fall flag add `.split(
    " "
  );

  

function Word(props) {
  const { text, active, correct } = props;

  if (correct === true) {
    return <span className="correct">{text} </span>;
  }

  if (correct === false) {
    return <span className="incorrect">{text} </span>;
  }

  if (active) {
    return <span className="active">{text} </span>;
  }

  return <span>{text} </span>;
}

function Typepage() {
  const [userInput, setUserInput] = useState("");
  const cloud = useRef(getcloud());
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    if (timeRemaining === 0) {
      // Timer is finished, you can perform any actions here
      // For example, show the results or reset the typing test
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  function processInput(value) {
    if (value.endsWith(" ")) {
      setActiveWordIndex((index) => index + 1);
      setUserInput("");

      setCorrectWordArray((data) => {
        const word = value.trim();
        const newResult = [...data];
        newResult[activeWordIndex] =
          word === cloud.current[activeWordIndex];
        return newResult;
      });
    } else {
      setUserInput(value);
    }

    setKeyCount((count) => count + 1);
  }

  // Calculate accuracy percentage
  const totalWords = cloud.current.length;
  const correctWords = correctWordArray.filter((correct) => correct === true)
    .length;
  const accuracyPercentage = (correctWords / totalWords) * 100;

  return (
    <div>
      <h1 data-text="Typing Test....">Typing Test....</h1>


      <div className="type">
      <p>
        {cloud.current.map((word, index) => (
          <Word
            key={index}
            text={word}
            active={index === activeWordIndex}
            correct={correctWordArray[index]}
          />
        ))}
      </p>
      </div>

      <input
        type="text"
        placeholder="Type Here...."
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />

      <div className="fill">
      <p>Time Remaining: {timeRemaining> 0 ? timeRemaining : 0} seconds</p>
      <p>Key Count: {keyCount}</p>
      <p>Accuracy: {accuracyPercentage.toFixed(2)}%</p>
      </div>
      <Link to="/">
      <button className="back">Back</button>
      </Link>

    </div>
  );
}

export default Typepage;
