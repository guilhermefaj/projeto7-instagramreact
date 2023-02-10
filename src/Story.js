export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.imagem} alt={props.texto} />
            </div>
            <div className="usuario">
                {props.texto}
            </div>
        </div>
    )
}