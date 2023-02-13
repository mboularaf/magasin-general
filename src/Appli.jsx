import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';
import { useState } from 'react';
function Appli() {
  //panier ={
  //  prd11123:{prix: 35.20, qte: 5}
  //}

  // ///////////////////////// On utilise le HOOK useState() //////////////////////////////////////////
  // const etatPanier  = useState({});//2valeurs et un objet
  // let panier = etatPanier[0];
  // let setPanier =etatPanier[1];//fonction récuperer dans le usestate  et donner une nouvelle valeur de panier.
  const [panier, setPanier] =  useState({});//je veux maintenir le panier dans un objet JS surveillé par React 


  return (
    <div className="Appli">
      <Entete panier={panier} />
      <ListeProduits panier ={panier} setPanier={setPanier}  />
      <Pied2page/>
    </div>
  
  );
}

export default Appli;
