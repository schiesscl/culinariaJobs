import Btn from "../../props/button/Btn";

import './HomeStyle.css'

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeTopContainer">
        <h1 className="homeTitle">CulinariJobs</h1>
        <p className="homeText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dicta earum, aperiam impedit repellendus tempore obcaecati esse voluptate repellat ab aspernatur consectetur dolor cum. Nemo quis iusto repellendus consequuntur et!</p>
      </div>
      <div className="homeBotContainer">
        <Btn title="Login" to="/login" />
        <Btn title="Register" to="/register" />
      </div>
    </div>
  );
}

export default Home;