/* eslint-disable react/prop-types */

// import { useState } from "react";

function Item({ answ, numero, setCorrect }) {
  //   const [correct, setCorrect] = useState("");
  //   const [accion, setAccion] = useState(false);

  const handleClick = (e) => {
    if (e.target.dataset.correct == "true") {
      e.target.classList.add("correct");
      setCorrect(true);
    } else {
      e.target.classList.add("error");
      setCorrect(false);
    }

    const botones = document.querySelectorAll("button");

    var botonesSinClaseEspecifica = Array.from(botones).filter(function (boton) {
      return !boton.classList.contains("error") && !boton.classList.contains("correct");
    });

    var botonesDisabled = botonesSinClaseEspecifica.filter(
      (item) => item.dataset.question === e.target.dataset.question
    );

    botonesDisabled.forEach(function (boton) {
      boton.classList.add("disabled"); // Agregar la nueva clase
    });
  };

  return (
    <div>
      <button onClick={handleClick} data-correct={answ.correct} data-question={numero} key={answ.text}>
        {answ.text}
      </button>
      {/* {correct == "correct" && <p>prueba superada</p>} */}
    </div>
  );
}

export default Item;
