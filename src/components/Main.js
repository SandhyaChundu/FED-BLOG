import React from "react";
import Sidebar from "./Sidebar";
import Output from "./Output";
const Main = () => {
    return (

        <div>

            <div className="article">
                <h1>ReactJS – useCallback hook</h1>
                <p>The useCallback hook is used when you have a component in which the child is rerendering again and again without need.<br></br>

Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>

                <h3 className="one">A sample program using useCallback Hook</h3>
                <h3>Program</h3>
                <div className="program">
                    <table border="2px"><tr><td>
                        <pre>{`
import React, { useState, useCallback } from 'react'
var funccount = new Set();
const App = () => {


const [count, setCount] = useState(0)
const [number, setNumber] = useState(0)

const incrementCounter = useCallback(() => {
setCount(count + 1)
}, [count])
const decrementCounter = useCallback(() => {
setCount(count - 1)
}, [count])
const incrementNumber = useCallback(() => {
setNumber(number + 1)
}, [number])

funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
alert(funccount.size);

return (
	<div>
	Count: {count}
	<button onClick={incrementCounter}>
		Increase counter
	</button>
	<button onClick={decrementCounter}>
		Decrease Counter
	</button>
	<button onClick={incrementNumber}>
		increase number
	</button>
	</div>
)
}


export default App;

        
        `}</pre></td></tr></table>
                </div>
                <h3>Output</h3>
                <Output />
            </div>

            <Sidebar />
            <br></br>
        </div>
    )
};

export default Main;