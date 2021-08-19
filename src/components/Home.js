//import logo from './logo.svg';

import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="Home container-fluid">

      <div className="jumbotron jumbotron-fluid d-flex align-items-center justify-content-around flex-column flex-lg-row">
        <div>
          <h1>Welcome to <span style={{color: 'rgb(255 195 0)'}}>Stuffr!</span></h1>
          <h2>Feel free to visit the shop and find great stuff!</h2>
        </div>
        <img src="https://i.postimg.cc/TPQnbBcb/284721660013211.png" className="img-fluid"/>
      </div>
      

        

    </div>
  );
};

export default Home;
