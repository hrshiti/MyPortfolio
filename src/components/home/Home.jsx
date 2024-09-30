
import Button from "../button/Button";
import Home_img from "../home_img/Home_img";

import My_Info from "../MyInfo/My_Info";
import Navbar from "../navbar/Navbar";

import "./Home.css";

const Home = () => {
  return (
    <>
    
      <section className="home_section">
        <div className="main_div">
          <div className="about_me">
            <My_Info heading="Hii, I'm Hritik"
              small_heading="Frontend Developer"
              paragrph="this is my portfolio website htails about me"
              paragrph2="this is my portfolio website having details about me"
              paragrph3="this is the end one" />
            <div className="home_btns">
              {/* <Button btns="My resume" />
       <Button btns="Lets Talk" /> */}
              <Button btns="My resume" />
              <Button btns="Lets Talks" />
            </div>
          </div>
          <div className="mine_img">
            <Home_img />
          </div>
        </div>

      </section>


      {/* add three link button  */}




    </>
  )
}
export default Home;