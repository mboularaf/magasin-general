import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
function Entete({panier}) {
    console.log("Le panier : ", panier)
    return(
        <header className="Entete">
        <h1>Magasin général</h1>
        <nav>
            <span>Produits</span>
            <span>À propos</span>
            <span>
                
                <Badge badgeContent = {Object.values(panier).length} color ="primary">
                <ShoppingCartIcon/> 
                 </Badge>
             </span>
        </nav>
        </header>

    )
       
}
export default Entete;