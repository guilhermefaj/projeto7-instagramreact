export default function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imagemPerfil} alt={props.username} />
                <div className="texto">
                    <div className="nome">{props.username}</div>
                    <div className="razao">{props.texto}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}