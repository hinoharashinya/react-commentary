import {useState, memo} from "react";

const Child = memo(() => {
  console.log("child is called");
  return(
    <div>
      <h3>child</h3>
    </div>
  );
});

export const CountUp = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const onClickChildCount = () => {
    setChildCount(childCount + 1);
  }

  return(
    <>
      <h2>count up</h2>
      <button onClick={() => setCount(count + 1)}>count up!</button>
      <p>{count}</p>
      <Child count={childCount}/>
      <p>{childCount}</p>
    </>
  )
}
