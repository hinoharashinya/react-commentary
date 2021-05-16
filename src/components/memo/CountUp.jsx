import {useState} from "react";

const Child = () => {
  console.log("child is called");
  return(
    <h3>child</h3>
  );
}

export const CountUp = () => {
  const [count, setCount] = useState(0);
  return(
    <>
      <h2>count up</h2>
      <button onClick={() => setCount(count + 1)}>count up!</button>
      <p>{count}</p>
      <Child />
    </>
  )
}
