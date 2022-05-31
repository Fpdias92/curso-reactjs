import React from "react";

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/> <hr/>
      <Social fb={props.facebook} linkedin={props.linkedin} twitter={props.twitter}/>
    </div>
  );
}

const Sobre = (props) =>{
  return(
    <div>
      <h2>Olá, sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  );
}

const Social = (props) =>{
  return(
    <div>
      <a href={props.fb}>Facebook </a> 
       <a href={props.linkedin}>LinkedIn </a>  
       <a href={props.twitter}>Twitter </a>
    </div>
  )
}

function App(){
    return(
      <div>
        <h1>Conheça nossa equipe:</h1>
        <Equipe nome="Felipe" cargo="Desenvolvedor" idade="30" facebook="fpdias92" linkedin="fpdias92" twitter="fpdias92"/>
      </div>
    );
}

export default App;