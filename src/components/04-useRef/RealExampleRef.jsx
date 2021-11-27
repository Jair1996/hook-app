import { MultipleCustomHook } from "../03-examples/MultipleCustomHook";
import "../02-useEffect/effects.css";
import { useState } from "react";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real example ref</h1>
      <hr />
      {show && <MultipleCustomHook />}

      <button onClick={() => setShow(!show)} className="btn btn-primary mt-5">
        Show/Hide
      </button>
    </div>
  );
};
