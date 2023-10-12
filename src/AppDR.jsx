import "./App.css";
import { QuestionDR } from "./components/QuestionDR";
import { data } from "./data";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Parcial 1</h1>
      {data.map((item) => (
        <QuestionDR key={item.id} item={item} />
      ))}
    </>
  );
}

export default App;
