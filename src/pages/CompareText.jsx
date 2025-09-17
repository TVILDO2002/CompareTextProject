
import { useState } from "react"
import { diffWords } from 'diff';

import group from "../assets/icons/Group.png"
import plus from "../assets/icons/Plus, Add.png"
import arrow from "../assets/icons/Arrow.png"
import again from "../assets/icons/Arrow, Rotate.png"
import load from "../assets/icons/Icons.png"

export default function CompareText(){
    const [text1,setText1] = useState("");
    const [text2, setText2] = useState("");
    const [isActive,setIsActive] = useState(false);
    const [isCompared, setIsCompared] = useState(false);
    const [diffResult, setDiffResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [progress,setProgress] = useState()

    const handleChange1 = (e)=>{
        setText1(e.target.value);
            if(text2 !== "" &&  text1 !== "" ){
            setIsActive(true)
            } else {
                 setIsActive(false)
            }
    }
    const handleChange2 = (e)=>{
        setText2(e.target.value);
        if(text2 !== "" &&  text1 !== "" ){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const handleClick = ()=>{
        console.log(text1)
        console.log(text2)
        let differnce = diffWords(text1, text2);
        setDiffResult(differnce)

        setIsCompared(true)
        setLoading(true)
        setProgress(1);

    let current = 1;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 20); 
    }

    const handleReset = ()=>{
        setText1("");
        setText2("");
        setIsCompared(false);
        setIsActive(false);
        
    }

    const text1Display = diffResult.map((part, index) => {
                if (part.removed) {
                return <span key={index} style={{ backgroundColor: 'salmon' }}>{part.value}</span>;
                } else if (!part.added) {
                return <span key={index}>{part.value}</span>;
                } else {
                return null; // skip added for text1
                }
            });

    const text2Display = diffResult.map((part, index) => {
            if (part.added) {
            return <span key={index} style={{ backgroundColor: 'lightgreen' }}>{part.value}</span>;
            } else if (!part.removed) {
            return <span key={index}>{part.value}</span>;
            } else {
            return null; // skip removed for text2
            }
        });


    return(
        <div className="CompareText-container">
            <div className="CompareText1">
                <div className="btnLang">
                    <button >
                        ქართული
                        <img src={group} alt="group"/> 
                    </button>
                    <label>
                        <input type="checkbox" name="subscribe" />
                        ფორმატის შენარჩუნება
                    </label>
                </div>
                <button onClick={handleReset}  disabled={!isActive} className={`btnNew ${isCompared ? "activebtn" : "disabledbtn"}`} >
                    <img src={plus} alt="plus" />
                    ახლის გახსნა
                </button>
            </div>
            {loading? 
            <div className="loader-container">
                <div className="loader">
                    <img src={load} alt="Loading"/>
                    <div>
                        <h4>Converting... Thank you For Your Patience</h4>
                        <div className="progress-bar-containter" >
                            <p>{progress}%</p>
                            <div className="progress-bar">
                                <div className="progress-fill"
                                style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :   
            <div className="CompareText2">
                {isCompared ? <div className="compareText">{text1Display}</div> : 
                <textarea className="compareText" value={text1} onChange={handleChange1} placeholder="დაიწყე წერა..." />}
                <img src={arrow} alt="Arrow" />
                {isCompared ? <div className="compareText">{text2Display}</div> : 
                <textarea className="compareText" value={text2} onChange={handleChange2} placeholder="დაიწყე წერა..." />}
            </div>}
           
            <div className="btnCompare">
                <button 
                onClick={handleClick}  
                disabled={!isActive}  
                className={isActive ? "activebtn" : "disabledbtn"} >
                   {isCompared ? <h5> <img src={again} alt="arrow rotate"/> შედარება</h5> : <h5> შედარება</h5> }
                </button>
            </div>
        </div>
    )
}
