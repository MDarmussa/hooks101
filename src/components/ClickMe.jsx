import React, { useContext, useEffect, useState } from "react";
import { MoodContext } from '../App'



function ClickMe() {
     //This is the useState Hook
     const [count, setCount] = useState(0); //Count = 0 | setCount() is my 'set State' function only to count
     const [loaded, setLoaded] = useState(false)
     const happy = useContext(MoodContext)
     useEffect (() => {
          console.log('count changed, useEffect ran')
          fetch('foo').then(() => setLoaded(true))
          // alert('Hello side effect')
          return () => console.log('GOODBYE COMPONENT!')
     }, 
     [count])
     
     console.log(count);
     console.log('setCount function is', setCount)

     return (
          <div>
               <p>You clicked {count} times</p>
               <button onClick={() => setCount(count + 10)}>
                    Click Me {happy}
               </button>
          </div>
     )
}

export default ClickMe;