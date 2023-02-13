
import './Produit.scss';

export default function Produit({panier, setPanier, nom, prix, pid}){
 //console.log("Les propriétés du produit : ", p);
    function ajouterPanier(){
      //Premierement il faut obtenir une copie conforme du panier (clone)
      //let clonePanier = JSON.parse(JSON.stringify(panier));
      //let clonePanier = {... panier};
      let clonePanier =Object.assign({}, panier);

      //On doit ajouter le produit au panier 
      if(clonePanier[pid]){
        clonePanier[pid].qte++;

      }
      else{
        clonePanier[pid] ={prix:prix, qte:1}
        
      }
     
      
      //Puis on doit donner à setPanier la nouvelle valeur du panier
      setPanier(clonePanier);
    }
    return(
        <article className="Produit">
          <img src={'images-produits/'+ pid + '.webp'} alt={nom} />
          <span className='nom'> {nom}</span>
          <span className='prix'> {prix}</span>
          <button onClick={ajouterPanier}>Ajouter au panier</button>
        </article>
    );

}
