
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
        <div className="px-4 md:px-7 py-6 w-full">
            <div className="flex flex-col md:flex-row md:justify-between gap-4 border-b border-black pb-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <button className="flex justify-between border border-black rounded-md px-2 md:px-4  py-3 " >
                        ქართული
                        <img className="md:ml-3" src={group} alt="group"/> 
                    </button>
                    <label className="flex gap-2 items-center">
                        <input type="checkbox" name="subscribe" />
                        ფორმატის შენარჩუნება
                    </label>
                </div>
                <button onClick={handleReset}  disabled={!isActive} 
                        className={`flex justify-center items-center text-white rounded-md py-2 px-4 ${isCompared ? "bg-[#132450;]" : "bg-[#383A4899] "}`} >
                    <img src={plus} alt="plus" />
                    ახლის გახსნა
                </button>
            </div>
            {loading? 
            <div className="flex justify-center items-center my-40 md:my-44 lg:my-48">
                <div className="flex gap-3 border border-[#E1E1E1] px-4 py-5 rounded-xl">
                    <img src={load} alt="Loading"/>
                    <div>
                        <h4>Converting... Thank you For Your Patience</h4>
                        <div >
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
            <div className="py-6 flex flex-col md:flex-row items-center gap-5">
                {isCompared ? <div className="resize-none focus:outline-none w-full h-44 md:h-[400px] p-4 bg-[#F0F7FF] rounded-md">{text1Display}</div> : 
                <textarea className="resize-none focus:outline-none w-full h-44 md:h-[400px] p-4 bg-[#F0F7FF] rounded-md " value={text1} onChange={handleChange1} placeholder="დაიწყე წერა..." />}
                <img class="rotate-90 md:rotate-0" src={arrow} alt="Arrow" />
                {isCompared ? <div className="resize-none focus:outline-none w-full h-44 md:h-[400px] p-4 bg-[#F0F7FF] rounded-md">{text2Display}</div> : 
                <textarea className="resize-none focus:outline-none w-full h-44 md:h-[400px] p-4 bg-[#F0F7FF] rounded-md" value={text2} onChange={handleChange2} placeholder="დაიწყე წერა..." />}
            </div>}
           
            <div className="flex justify-center text-white  rounded-md py-2">
                <button 
                onClick={handleClick}  
                disabled={!isActive}  
                className={` w-[50%] py-2 px-9 rounded-md ${isActive ? "bg-[#132450;]" : "bg-[#383A4899] "}`} >
                   {isCompared ? <h5 className="flex justify-center items-center gap-2"> <img src={again} alt="arrow rotate"/> შედარება</h5> : <h5> შედარება</h5> }
                </button>
            </div>
        </div>
    )
}
