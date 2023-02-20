import './Entete.scss';
import PanierSommaire from './PanierSommaire';


function Entete({panier}) {
    /*console.log("Le panier (Entete) : ", panier);
    let tabValPanier = Object.values(panier);
    console.log("Le tableau des valeurs dansle panier : ", tabValPanier);*/
    
    //calcul du nombre articles dans le panier
    // Avec une boucle (instrutions)
    /*
    let nbArticles= 0;
    for (let i= 0; i < tabValPanier.length; i++){
        nbArticles += tabValPanier[i].qte;
    }
    */
   //avec la méthode reduce() des tableaux(une seule expression)
    //const nbArticles = tabValPanier.reduce((valInitiale, eltSuivant) => valInitiale+eltSuivant.qte, 0);
    return(
        <header className="Entete">
        <h1>Magasin général</h1>
        <nav>
            <span>Produits</span>
            <span>À propos</span>
            <span>
                
            <PanierSommaire panier={panier}/>
                
             </span>
        </nav>
        </header>

    )
       
}
export default Entete;