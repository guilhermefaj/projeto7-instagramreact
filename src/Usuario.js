import { useState } from "react";

export default function Usuario() {

    const [username, setUsername] = useState("catanacomics")
    const [imagemPerfil, setImagemPerfil] = useState("assets/img/catanacomics.svg")

    function editarUsuario() {
        const novoUsername = prompt("Insira seu novo nome de usuário:").trim();
        if (novoUsername) {
            setUsername(novoUsername)
        }
    }

    function editarImagemPerfil() {
        const novaImagemPerfil = prompt("Insira o link da nova imagem:").trim();
        if (novaImagemPerfil) {
            setImagemPerfil(novaImagemPerfil)
        }
    }

    return (
        <div className="usuario">
            <img src={imagemPerfil} onClick={editarImagemPerfil} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong>{username}</strong>
                    <ion-icon name="pencil" onClick={editarUsuario}></ion-icon>
                </span>
            </div>
        </div >
    )
}