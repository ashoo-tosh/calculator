import React, { useState } from "react";

function Calculator () {

    const [result, setResult] = useState('');

    const clickHandle = (e) => {
        setResult(result.concat(e.target.value));
    }

    const clearScreen = () => {
        setResult('');
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }

    return(
        // change css
        <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
                <div className="w-64 h-auto bg-gray-900 round-2x1 shadow-x1 boder-4 boder-gray-100">
                    
                    {/* Screen */}
                    <div className="screen p-2">
                        <input type="text" value={result} className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]text-white px-1 text-right placeholder-black outline-none rounded-lg bg-gray-100 text-2x1 pt-10 w-full text-black" placeholder="0"></input>
                    </div>
                    
                    {/* brand */}
                    <div className="brand flex justify-center mb-2 shadow-md text-gray-500 bg-gray-200 bg-opacity-90">
                        <h1 className="text-gray-900 text-xs font-bold">ASHU</h1>
                    </div>

                    {/* keyboard */}
                    <div className="keyboard">
                        <div className="m-2 flex justify-between">
                            <input type="button" onClick={clearScreen} value={'C'} className="bg-red-300 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" onClick={clickHandle} value={'<'} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" onClick={clickHandle} value={'%'} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" onClick={clickHandle} value={'/'} className="bg-pink-300 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                        </div>                        
                        
                        <div className="m-2 flex justify-between">
                            <input type="button" value={'7'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'8'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'9'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'*'} onClick={clickHandle} className="bg-green-300 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                        </div>                        
                        
                        <div className="m-2 flex justify-between">
                            <input type="button" value={'4'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'5'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'6'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'-'} onClick={clickHandle} className="bg-indigo-300 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                        </div>                        
                        
                        <div className="m-2 flex justify-between">
                            <input type="button" value={'1'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'2'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'3'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'+'} onClick={clickHandle} className="bg-purple-300 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                        </div>                        
                        
                        <div className="m-2 flex justify-between">
                            <input type="button" value={'0'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'00'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" value={'.'} onClick={clickHandle} className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                            <input type="button" onClick={calculate} value={'='} className="bg-orange-300 shadow-md rounded-lg w-12 h-12 text-center text-black front-medium flex justify-center item-center outline-none" />
                        </div>
                    </div>
                </div>
        </div>
        
    );

}

export default Calculator;