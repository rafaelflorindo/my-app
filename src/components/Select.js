import React from 'react';

export default class Select extends React.Component{
   
   handleChange(e){
       e.preventDefault();
       const valor = e.target.value;
       this.props.funcao(valor);
   }
   
    render(){
        return(
            <select onChange={this.handleChange.bind(this)}>
                <option value="">Selecione</option>
                {
                    this.props.dados.map(
                        row=>
                        <option value={row.Resposta} key={row.Resposta}>{row.Resposta}</option>
                    )
                }
            </select>
        );
    }
}