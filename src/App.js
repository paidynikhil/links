
import './App.css';
import General from './Component/General';
import Footer from './Component/Footer';
import { BrowserRouter } from 'react-router-dom'
import { FaCalculator, FaGamepad, FaGithub,FaHive,FaLinkedin, FaSquarespace, FaXbox} from "react-icons/fa"



function App() {
  let linkedin = {
    name: "Linkedin",
    disc: "Connect to my Linkedin, where you can ask any questions related to web development and help others with their queries. Let's come together to share knowledge and support each other in our web development journey.",
    link: "https://www.linkedin.com/in/paidy-nikhil-4b7027243/"
  }
  let ColorOnBlock = {
    name: "ColorOnBlock",
    disc: "Click on mouse to change the block color and match to ball color.",
    link: "https://matchtheblock.netlify.app/"
  }
  let Multiply = {
    name: "Multiply2048",
    disc: "Add numbers untill you reach 2048sum.",
    link: "https://2048multiply.netlify.app"
  }
  let StackGame = {
    name: "StackGame",
    disc: "Stack the block untill you reach Blue color.",
    link: "https://stacktheblocks.netlify.app"
  }
  let TicTacToe = {
    name: "TicTacToe",
    disc: "Have fun with your friend",
    link: "https://tictactoe-nikhil.netlify.app"
  }
  let TryToCatchMe = {
    name: "TryToCatchMe",
    disc: "Facing some technical issues!",
    link: ""
  }
return (
    <>
      <BrowserRouter>
        <div className="general-section">
          <div className="heading" >
            <li>"Uniting Worlds of Gaming"</li>
          </div>
          <General delay="5000" className="card" name={linkedin.name} link={linkedin.link} disc={linkedin.disc} logo={<FaLinkedin className='logo'size={"30px"} />} />
          <General delay="5000" className="card" name={Multiply.name} link={Multiply.link} disc={Multiply.disc} logo={<FaCalculator className='logo' size={"30px"} />} />
          <General delay="5000" className="card" name={StackGame.name} link={StackGame.link} disc={StackGame.disc} logo={<FaHive className='logo' size={"30px"} />} />
          <General delay="5000" className="card" name={TicTacToe.name} link={TicTacToe.link} disc={TicTacToe.disc} logo={<FaXbox className='logo' size={"30px"} />} />
          <General delay="5000" className="card" name={ColorOnBlock.name} link={ ColorOnBlock.link} disc={ColorOnBlock.disc} logo={<FaGamepad className='logo' size={"30px"} />} />
          <General delay="5000" className="card" name={TryToCatchMe.name} link={TryToCatchMe.link} disc={TryToCatchMe.disc} logo={<FaSquarespace className='logo' size={"30px"} />} />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
