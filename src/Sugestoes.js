import Sugestao from "./Sugestao";

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Sugestao imagemPerfil="assets/img/bad.vibes.memes.svg" username="bad.vibes.memes" texto="Segue você" />
            <Sugestao imagemPerfil="assets/img/chibirdart.svg" username="chibirdart" texto="Segue você" />
            <Sugestao imagemPerfil="assets/img/razoesparaacreditar.svg" username="razoesparaacreditar" texto="Novo no Instagram" />
            <Sugestao imagemPerfil="assets/img/adorable_animals.svg" username="adorable_animals" texto="Segue você" />
            <Sugestao imagemPerfil="assets/img/smallcutecats.svg" username="smallcutecats" texto="Segue você" />
        </div>
    )
}