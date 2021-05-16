import {useState, memo} from "react";

const Child = memo((props) => {
  console.log("child is called");
  return(
    <div>
      <h3>child</h3>
      <p>{props.count}</p>
    </div>
  );
});

export const CountUp = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  return(
    <>
      <h2>count up</h2>
      <button onClick={() => setCount(count + 1)}>count up!</button>
      <p>{count}</p>
      <Child count={childCount}/>
    </>
  )
}
