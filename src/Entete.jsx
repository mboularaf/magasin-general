import './Entete.scss';
function Entete(props) {
    let panier = props.panier;
    console.log("Le panier qui nous vient de Appli affiché dans Entete : ", panier);
    return(
        <header className="Entete">
        <h1>Magasin général</h1>
        <nav>
            <span>Produits</span>
            <span>À propos</span>
            <span>Panier ({Object.values(props.panier).length})</span>
        </nav>
        </header>

    )
       
}
export default Entete;