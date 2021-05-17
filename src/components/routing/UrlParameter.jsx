import {useParams} from "react-router-dom";

export const UrlParameter = () => {
  const {id} = useParams();
  return(
    <>
      <h2>UrlParameter</h2>
      <p>{id}</p>
    </>
  );
}
