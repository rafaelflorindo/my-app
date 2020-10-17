import React from 'react';
import '../App.css';
import Tabela from './Tabela';
//import Select from './Select';

//const Root="http://"+document.location.hostname+"/app/"
export default class App extends React.Component {
  constructor(){
    super();
    
    this.state=({
      db: [] 
      /*,
      dbFuncao:[],
      dbNome:[],
      visibilidade: 'hidden'*/
    });
    this.exibirUsuario()
  }
  //listagem no select
 /* exibirDados(parametro){
    fetch("http://localhost/estudo/my-app/src/api/listar.php",
    {
      method: 'POST',
      body: JSON.stringify({
        funcao: parametro
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>
    {
      if(this.state.dbFuncao === undefined || this.state.dbFuncao == 0){
        this.setState({
          dbFuncao:responseJson
        });
      }else{
        this.setState({
          dbNome: responseJson
        })
      }
    }
    );
  }*/


  exibirUsuario(){
    //realiza a requisição http
    fetch("http://localhost/estudo/my-app/src/api/")
    //aguarda a resposta de um json
    .then((response)=>response.json())
    .then((responseJson)=>
    {
      this.setState({
        db:responseJson
      });
     // console.log(this.state.db);
    }
    )
  }
  render(){
    return(
      <div>
        <Tabela arrayUsuarios={this.state.db} />
        <br />
       {/* <Select funcao={this.exibirDados.bind(this)} dados= {this.state.dbFuncao} />
        <br />
    <Select />*/}
      </div>
    );
  }
}