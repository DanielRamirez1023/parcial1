/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";
import "./question.css";
export function QuestionDR({ item }) {
  const [correct, setCorrect] = useState();

  const handleReiniciar = () => {
    const botones = document.querySelectorAll("button");

    botones.forEach(function (boton) {
      boton.classList.remove(...boton.classList); // Agregar la nueva clase
    });

    setCorrect();
  };
  return (
    <div className="content-question">
      <div className="question">
        <p>{item.id}.</p>
        <p>{item.question}</p>
      </div>
      <div className="content-response">
        {item.answers.map((answ, index) => (
          <Item key={index} answ={answ} numero={item.id} setCorrect={setCorrect} />
        ))}
      </div>
      {correct == true && <p>Pasaste</p>}
      {correct == false && (
        <button className="BtnReiniciar" onClick={handleReiniciar}>
          No pasaste, reiniar?
        </button>
      )}
    </div>
  );
}
