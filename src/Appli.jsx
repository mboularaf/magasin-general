import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';
import { useEffect, useState } from 'react';
function Appli() {
  //panier ={
  //  prd11123:{prix: 35.20, qte: 5}
  //}

  // ///////////////////////// On utilise le HOOK useState() //////////////////////////////////////////
  // const etatPanier  = useState({});//2valeurs et un objet
  // let panier = etatPanier[0];
  // let setPanier =etatPanier[1];//fonction récuperer dans le usestate  et donner une nouvelle valeur de panier.
   
  //je veux maintenir le panier dans un objet JS surveillé par React
  /*const [panier, setPanier] =  useState(function(){
    let panierLs = window.localStorage.getItem('panier-ls');
    if(panierLs){
      return JSON.parse(panierLs);
    }
    else{
      return{};
    }
  });*/

  // useState avec une fonction d'initialisation 
  const [panier, setPanier] = useState(
    () => JSON.parse(localStorage.getItem('panier-ls')) || {}
  );

  const [compteur, setCompteur] = useState(0);
  
  useEffect(
    () => {
      localStorage.setItem('panier-ls', JSON.stringify(panier));
      console.log("Le panier d'achats a été sauvegardé dans localStorage !");
    }, [panier]
  );

  return (
    <div className="Appli">
      <Entete panier={panier} />
      <button onClick={() => setCompteur(compteur + 1)}>Compteur de clic ({compteur})</button>
      <ListeProduits panier={panier} setPanier={setPanier} />
      <Pied2page/>
    </div>
  );
}

export default Appli;