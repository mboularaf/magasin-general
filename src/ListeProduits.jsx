import "./ListeProduits.scss";

import Produit from "./Produit";
import produits from './data/produits.json';

export default function ListeProduits(){

  console.log("Les produits: ", produits);

  //pas la "manière de coder"
  /*
  let composantsProduit =[];
  for(let prd of produits){
    composantsProduit.push(<Produit nom={prd.nom} prix={prd.prix}/>);
  }
*/

/*produits.map(function(prd) {
  console.log('Produit : ', prd.nom);

});*/


  return(
      <section className="ListeProduits">
          <h2>Liste des produits</h2>
          <section className="produits">
          {
            produits.map(function(produit) {
              return <Produit nom= {produit.nom} prix={produit.prix} pid={produit.id}/>
            })
          }
            </section>
        </section>
  )

}