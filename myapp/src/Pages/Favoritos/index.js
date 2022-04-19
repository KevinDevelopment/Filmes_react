import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './favoritos.css'
import { toast } from "react-toastify";



function Favoritos() {

    const [filmes, setFIlmes] = useState([]);
    useEffect(() => {

        const minhaLista = localStorage.getItem('filmes');
        setFIlmes(JSON.parse(minhaLista) || [])

    }, [])

    function handleDelete(id){
        let filtroFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        })

        setFIlmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes)); 
        toast.info('Filme excluido com sucesso!!')  
    }

    return (
        <div id="meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>No momento você não possui nenhum filme salvo!</span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.nome}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                                <button onClick={() => handleDelete(item.id)} >Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favoritos;