import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    console.log(username, password);
    login(dispatch, { username, password });
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px" }}
      ></input>
      <input
        style={{ marginBottom: "20px", padding: "10px" }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        style={{ padding: "10px", width: "100px" }}
        onClick={handleClick}
        disabled={isFetching}
      >
        SIGN IN
      </button>
      {error && <span>Something went wrong?</span>}
    </div>
  );
};

export default Login;
