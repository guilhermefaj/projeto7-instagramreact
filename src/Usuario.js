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
            <img data-test="profile-image" src={imagemPerfil} onClick={editarImagemPerfil} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong data-test="name">{username}</strong>
                    <ion-icon data-test="edit-name" name="pencil" onClick={editarUsuario}></ion-icon>
                </span>
            </div>
        </div >
    )
}