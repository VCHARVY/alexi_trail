import "../Styles/models.css"
import "../Styles/home.css"
import { Canvas } from "@react-three/fiber";
import { Brain } from "../models/Brain";
import { Lungs } from "../models/Lungs";
import { Heart } from "../models/Heart";
import { Stomach } from "../models/Stomach";
import { Intestines } from "../models/Intestines";
import { Kidneys } from "../models/Kidneys";
import { useState } from "react";
import { Link } from 'react-router-dom';

function clickHandler(){
    const Hamburger = document.querySelector('.HamburgerM');
    const nav = document.querySelector('.nav-headerM');
    Hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  }

function Model( { modelName , color } ){  
    const modelselector = () => {
        if(modelName === "Brain"){
            return(<Brain />);
        }
        else if(modelName === "Lungs"){
            return(<Lungs />);
        }
        else if(modelName === "Heart"){
            return(<Heart />);
        }
        else if(modelName === "Stomach"){
            return(<Stomach />);
        }
        else if(modelName === "Intestines"){
            return(<Intestines />);
        }
        else if(modelName === "Kidneys"){
            return(<Kidneys />);
        }
    }
    return(
        <div className="modelContainer" style={ { backgroundImage: `url(/Images/${color}.jpg)` } }>
            <Canvas className="model">
                {modelselector()}
            </Canvas>
        </div>
    );
}

function Models(){
    const models = ["Brain" , "Lungs" , "Heart" , "Stomach" , "Intestines" , "Kidneys"];
    const [modelNo , setModelNo] = useState(0);
    let message = "";

    const nextModelNo = () => {
        if(modelNo === models.length - 1){
            setModelNo(0);
        }
        else{
            setModelNo(modelNo + 1);
        }
    }

    const prevModelNo = () => {
        if(modelNo === 0){
            setModelNo(models.length - 1);
        }
        else{
            setModelNo(modelNo - 1);
        }
    }

    const getOutput = (modelName) => {
        //call backend api here and return the output
        //output is 1 return uneffected model
        //output is 2 return positive/safe model
        //output is 3,4 return negative model
        //return "red";
        //return "orange";
        //return "grey";
        // if(modelName === "Brain"){
        //     message = "This organ is not safe"; //message related to color red
        //     return "red";
        // }else if(modelName === "Lungs"){
        //     message = "This organ is partially unsafe";
        //     return "orange";
        // }else if(modelName === "Heart"){
        //     message = "This organ is uneffected";
        //     return "grey";
        // }else if(modelName === "Stomach"){
        //     message = "This organ is safe";
        //     return "green";
        // }else if(modelName === "Intestines"){
        //     message = "This organ is not safe";
        //     return "red";
        // }else if(modelName === "Kidneys"){
        //     message = "This organ is partially unsafe";
        //     return "orange";
        // }
        // else {
        //     message = "Enter medicince data to get simulation results";
        //     return "default";
        // }
        message = "Enter medicince data to get simulation results";
        return "default";
    }

    return(
        <>
        <header className="App-headerM">
        <div className='HamburgerM' onClick={() => {
          clickHandler();
        }}>
          <span className='barM'></span>
          <span className='barM'></span>
          <span className='barM'></span>
        </div>
        <div className='nav-headerM'>
          <div>
              <Link className="headerLinkM" to="/">HOME</Link>
          </div>
          <div>
              <Link className="headerLinkM" to="/about">ABOUT</Link>
          </div>
          <div>
              <Link className="headerLinkM" to="/contact">CONTACT</Link>
          </div>
          <div>
              <Link className="headerLinkM" to="/login">LOGIN/SIGNUP</Link>
          </div>
          <div>
            <Link className="headerLinkM" to="/simulate">SIMULATE</Link>
          </div>
          <div>
            <Link className="headerLinkM" to="/models">MODELS</Link>
          </div>
        </div>
      </header>
        <div>
            <Model modelName={models[modelNo]} color={getOutput(models[modelNo])} />
        </div>
        <button className="Previous" onClick={prevModelNo}><p className="btn-text">&#8249;</p></button>
        <button className="Next" onClick={nextModelNo}><p className="btn-text">&#8250;</p></button>
        <p className="message">{message}</p>
        </>
    );
}

export default Models