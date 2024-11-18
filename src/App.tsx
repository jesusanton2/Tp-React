

import './App.css'
import Componente1 from './components/Componente1'
import ComponenteCounter from './components/ComponenteCounter'
import ComponentForm from './components/ComponentForm'
import ComponentUseEffect from './components/ComponentUseEffect'
export const App = () => {




  return (
    <div className='app'>
      <Componente1  text={"Trabajo - React"} color='red' fontSize={5}/>
      <Componente1  text={"Item 1"} color='black' />
      <ComponenteCounter />
      <ComponentUseEffect />
      <ComponentForm />
      </div>
  )
}

export default App
