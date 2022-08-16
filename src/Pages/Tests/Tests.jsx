import React from "react";
import { useEffect } from "react";
import "../Tests/Tests.scss";
import { cloudContext } from "../../Context/context";


const Tests = () => {
  const { loading, test, index, correct, hendlePrev, hendleNext, addWorking } =
    cloudContext();
  const { tests, incorrect_answers, correct_answer } = test[index];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);

  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  console.log(answers);
  return (
    <div className="tests">
      <div className="container tests__container">
        <div className="tests__top">
          <p className="tests__top_desc">test</p>
          <span className="tests__top_amount">
            {correct} / {index}
          </span>
          <button className="tests__top_button">finish</button>
        </div>
        <div className="tests__center">
          <>
            {answers.map((anser, index) => {
              <>
                <div className="tests__center_top" key={index}>
                  <p className="tests__center_top_desc">{anser.question}</p>
                </div>
                <div className="tests__center_center" key={index}>
                  {incorrect_answers.map((test) => {
                    <span className="tests__center_center_span">
                      <span className="tests__center_center_span_span">
                        {test}
                      </span>
                    </span>;
                  })}
                </div>
              </>;
            })}
          </>
          <div className="tests__center_bottom">
            <button
              className="tests__center_bottom_button"
              onClick={hendlePrev}
            >
              Prev
            </button>
            <button className="tests__center_bottom_button">Submit</button>
            <button
              className="tests__center_bottom_button"
              onClick={hendleNext}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
