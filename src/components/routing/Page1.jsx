import {Link, useHistory} from "react-router-dom";
import {useContext, useState, memo} from "react";
import {UserContext} from "../../providers/UserProvider";

const Page1Child = memo(() => {
  console.log("child")
  return(
    <h2>Page1Child</h2>
  )
});

export const Page1 = () => {
  const stateA = "state";
  const history = useHistory();
  const [inputUserName, setInputUserName] = useState("");
  const {userInfo, setUserInfo} = useContext(UserContext)
  const onClickButton = () => {
    //history.push("/page1/detailA")
    history.push({
      pathname: "/page1/detailA",
      state: stateA
    })
  }
  const onChangeInput = (e) => {
    setInputUserName(e.target.value);
  }
  const changeUserName = () => {
    if(inputUserName === ""){
      return
    }
    setUserInfo({userName: inputUserName});
    setInputUserName("");
  }
  return(
    <>
      <Link to={{pathname: "/page1/detailA", state: stateA}}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <h2>Page1</h2>
      <br />
      <button onClick={onClickButton}>Jump to DetailA</button>
      <br />
      <p>{userInfo.userName}</p>
      <input type="text" value={inputUserName} onChange={onChangeInput}/>
      <button onClick={changeUserName}>change user name</button>
      <Page1Child />
    </>
  );
}
