import { FC } from "react";

interface IPropsComponenteUno {
    text : string;
    color: string;
    fontSize?: number;
}

export const Componente1 : FC<IPropsComponenteUno> = ({text,color,fontSize}) => {
  return (
    <div style={{color: `${color}`, fontSize: `${fontSize}rem`} }>
      <p>{text}</p></div>
  )
}

export default Componente1 ;