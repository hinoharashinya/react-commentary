import {useContext} from "react";
import {UserContext} from "../../providers/UserProvider";

export const Home = () => {
  const {userInfo} = useContext(UserContext);
  return(
    <>
      <h2>Home</h2>
      <p>{userInfo.userName}</p>
    </>
  );
}
