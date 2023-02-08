import Post from "./Post";

export default function Posts() {
    return (
        <div class="posts">
            <Post
                imagemPerfil="assets/img/meowed.svg"
                username="meowed"
                imagem="assets/img/gato-telefone.svg"
                descricao="gato-telefone"
                perfilCurtiu="assets/img/respondeai.svg"
                usernameCurtiu="respondeai"
            />
            <Post
                imagemPerfil="assets/img/barked.svg"
                username="barked"
                imagem="assets/img/dog.svg"
                descricao="dog"
                perfilCurtiu="assets/img/adorable_animals.svg"
                usernameCurtiu="adorable_animals"
            />
        </div>
    )
}

