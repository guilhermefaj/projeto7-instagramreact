export default function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagemPerfil} alt={props.username} />
                <div class="texto">
                    <div class="nome">{props.username}</div>
                    <div class="razao">{props.texto}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}