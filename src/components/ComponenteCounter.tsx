import { useState } from 'react'

export const ComponenteCounter = () => {
    const [counter , setCounter] = useState(0);

    const handleClickIncrementar = () => {
        setCounter((prev)=> prev + 1)
    }
    const handleClickDecrementar = () =>{
        if(counter>0){
        setCounter((prev)=> prev - 1)
        }
    }

  return (
    <>
     <div>
         <h2>{counter}</h2>
         <button onClick={handleClickIncrementar}>Incrementar</button>
         <button onClick={handleClickDecrementar}>Decrementar</button>
     </div>

    </>
  )
}

export default ComponenteCounter