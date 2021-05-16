import {useState, memo, useCallback, useMemo} from "react";

const Child = memo((props) => {
  console.log("child is called");
  return(
    <div>
      <h3>child</h3>
      <button onClick={props.onClick}>child count up!</button>
    </div>
  );
});

export const CountUp = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const onClickChildCount = useCallback(() => {
    setChildCount(childCount + 1);
  },[childCount]);

  const dubleCount = (count) => {
    console.log("call dublecount")
    return(count * 2);
  }

  const dubledCount = useMemo(() => dubleCount(count), [count]);

  return(
    <>
      <h2>count up</h2>
      <button onClick={() => setCount(count + 1)}>count up!</button>
      <p>{count}</p>
      <p>{dubledCount}</p>
      <Child onClick={onClickChildCount}/>
      <p>{childCount}</p>
    </>
  )
}
