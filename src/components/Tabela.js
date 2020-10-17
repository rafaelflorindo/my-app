import React from 'react';

export default class Tabela extends React.Component{
    render(){
        return(
            <div>
                <table className="TabelaUsuarios">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NOME</td>
                            <td>LOGIN</td>
                            <td>SENHA</td>
                            <td>FUNÇÃO</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.props.arrayUsuarios.map(
                        linha=>
                        <tr key={linha.id}>
                            <td>{linha.id}</td>
                            <td>{linha.nome}</td>
                            <td>{linha.login}</td>
                            <td>{linha.senha}</td>
                            <td>{linha.funcao}</td>
                        </tr>
                    )
                    }
                    </tbody>
                </table>
                
            </div>
        );
    }
}