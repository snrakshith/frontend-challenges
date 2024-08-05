import { useState, FormEvent, MouseEvent, ChangeEvent } from "react";
import "./calculator.css";
import { arr } from "./constants";

export function Calculator() {
  const [value, setValue] = useState("");

  const onHandleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const id = target.id;
    if (id === "C") {
      setValue("");
    } else if (id === "=") {
      onFormSubmit(); // manually trigger calculation
    } else {
      setValue((prevValue) => prevValue + id);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onFormSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans.toString());
    } catch (err) {
      alert("Invalid expression");
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={value} onChange={onInputChange} />
        <div className="container" onClick={onHandleClick}>
          {arr?.map((item, idx) => (
            //@ts-ignore
            <button id={item} key={idx} className="cell" type="button">
              {item}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
