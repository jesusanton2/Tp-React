import { ChangeEvent, useState } from 'react';
import './compCss.css';

export const ComponentForm= () =>{
    const [values , setValues] = useState({
        email: "",
        nombre: "",
        edad: 0
    })

    const {email, nombre , edad} = values
  
 
    const handleSubmitForm = () => {
      console.log(values)
    }

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {

      const {value , name} = event.target;
        if(name !== "edad"){
            setValues({...values,[`${name}`]: value})
        } else {
            setValues({...values,[`${name}`]: parseInt(value)})
        }
    }

   return (
     <div className='container-form'>
       
        <h2>Formulario</h2>
        <div className='input'>
        <input value={email} name='email' onChange={handleChange} type="email" placeholder="Email"></input>
        <input value={nombre} name='nombre' onChange={handleChange}  type="text" placeholder="Nombre"></input>
        <input value={edad} name='edad' onChange={handleChange}  type="number" placeholder="Edad"></input>
        <button onClick={handleSubmitForm}>Enviar</button>
       </div>
     </div>
   )
 }
 
 export default ComponentForm;