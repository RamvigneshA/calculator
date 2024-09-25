import { useRef, useState } from "react";
import questions from "./quiz .json";

export const QuizCard = () => {
  const [number, setnumber] = useState(0);
  const [show, setShow] = useState(true);
  const userAnswer = useRef([]);
  const correct = useRef();

  function handle(val) {
    if (number !== questions.length - 1) {
      setnumber((prev) => prev + 1);
      check(val);
    } else {
      setnumber(questions.length);
      check(val);
      setShow(false);
    }
  }

  function check(ans) {
    userAnswer.current.push(ans);
    console.log(userAnswer.current.length);
    if (userAnswer.current.length === 10) {
      let correctCount = 0;
      for (let i = 0; i < questions.length; i++) {
        if (userAnswer.current[i] === questions[i].answer) {
          correctCount++;
        }
      }
      correct.current = correctCount;
    }
  }

  return (
    <>
      {show === true ? (
        <div className="outer">
          <div className="card">
            <p className="question">{questions[number].question}</p>
            <div className="options">
              {questions[number].options.map((option) => (
                <span onClick={(val = option) => handle(option)}>{option}</span>
              ))}
            </div>
          </div>

          <p>
            you answered {number !== questions.length ? number : "10"} out of{" "}
            {questions.length}{" "}
          </p>
        </div>
      ) : (
        <>
          <h2>result</h2>

          <table>
            <tr>
              <th>Question</th>
              <th>Your answer</th>
              <th>Correct answeer</th>
            </tr>
            {userAnswer.current.map((ans, index) => {
              const value = questions[index].answer;
              const question = questions[index].question;
              return (
                <tr>
                  <td>{question}</td>
                  <td className={(ans===value)?'correct':'incorrect'}>{ans}</td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </table>
          <h4>
            {correct.current} out of {questions.length} answers are correct.
          </h4>
        </>
      )}
    </>
  );
};

