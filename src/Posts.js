import Post from "./Post";

export default function Posts() {
    return (
        <div className="posts">
            <Post
                imagemPerfil="assets/img/meowed.svg"
                username="meowed"
                imagem="assets/img/gato-telefone.svg"
                descricao="gato-telefone"
                perfilCurtiu="assets/img/respondeai.svg"
                usernameCurtiu="respondeai"
                numeroCurtidas="84.563"
            />
            <Post
                imagemPerfil="assets/img/barked.svg"
                username="barked"
                imagem="assets/img/dog.svg"
                descricao="dog"
                perfilCurtiu="assets/img/adorable_animals.svg"
                usernameCurtiu="adorable_animals"
                numeroCurtidas="153.547"
            />
            <Post
                imagemPerfil="assets/img/9gag.svg"
                username="9gag"
                imagem="assets/img/9gagpost.png"
                descricao="angry cats"
                perfilCurtiu="assets/img/meowed.svg"
                usernameCurtiu="meowed"
                numeroCurtidas="27.432"
            />
        </div>
    )
}

