import React from "react";
// import mascot from "../static/svg/mascot.svg";
import Articles from "../containers/Articles";
import Head from "../../components/head";

const Home = () => (
  <div>
    <Head 
      title="Werick Codes"
      description="Easy tutorials to kickoff your Software Developer life"
      image="../../static/img/img.png"
    />
    <p className="domain">Werick Blog</p>
    <Articles />
  </div>
);

export default Home;
