import pinkLogo from "../../assets/logo_pinkparadise.svg";
import scssHome from "./home.module.scss";

const Home = () => {
  return (
    <main className={scssHome.home}>
      <div>
        <a href="#">
          <img src={pinkLogo} className={scssHome.logo} alt="Pink Paradise" />
        </a>
      </div>
    </main>
  );
};

export default Home;
