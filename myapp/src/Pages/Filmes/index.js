import React from "react";
import './filme.css';
import { useParams, useNavigate, Navigate } from "react-router-dom";
import api from "../../Services/api";
import { useEffect, useState } from "react";

function Filme() {
    const { id } = useParams();
    const history = useNavigate();

    const [filme, setFilme] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {

        async function loadfilme() {
            const response = await api.get(`/r-api/?api=filmes/${id}`)

            if (response.data.length === 0) {
                //tentou acessar com um id que não existe, direciono ele para home
                history('/');
                return
            }

            setFilme(response.data)
            setloading(false)

        }

        loadfilme();

        return () => {
            console.log("componente desmontado")
        }

    }, [history, id])

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando filme...</h1>
            </div>
        );
    }

    return (
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={() => { }} >Salvar</button>
                <button><a target="_blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a></button>
            </div>
        </div>
    );
}

export default Filme