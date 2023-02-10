import { useState } from "react"

export default function Post(props) {

    const [salvo, setSalvo] = useState(false);
    const [curtido, setCurtido] = useState(false);

    function salvarPost() {
        setSalvo((state) => !state);
    }

    function curtirPost() {
        setCurtido((state) => !state);
    }

    function curtirImagem() {
        setCurtido(true);
    }

    const curtidas = curtido ? props.numeroCurtidas + 1 : props.numeroCurtidas;
    const curtidasFormatado = `${Math.floor(curtidas / 1000)}.${curtidas % 1000}`

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imagemPerfil} alt={props.username} />
                    {props.username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.imagem} alt={props.descricao} onClick={curtirImagem} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={curtido ? "heart" : "heart-outline"} onClick={curtirPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvo ? "bookmark" : "bookmark-outline"} onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.perfilCurtiu} alt={props.usernameCurtiu} />
                    <div className="texto">
                        Curtido por <strong>{props.usernameCurtiu}</strong> e <strong>outras {curtidasFormatado} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}