import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
 
const ItemFilme = ({titulo, imagem, desc}) => {
   const [fav, setFav] = useState(true);
   let nome = "";
 
  const handleFavClick = (e) => {
    const newFav = !fav;
    setFav(newFav);

    if (fav)
      e.currentTarget.classList.add('selecionado');
    else 
      e.currentTarget.classList.remove('selecionado');
    }
  switch (titulo)
  {
    case "Raiva": nome = "com Raiva"; break;
    case "tristeza": nome = "com Tristeza"; break;
    case "alegria": nome = "com Felicidade"; break;
    case "ansiedade": nome = "com Ansiedade"; break;
    case "vergonha": nome = "com Vergonha"; break;
    case "tedio": nome = "com Tedio"; break;
    case "inveja": nome = "com Inveja"; break;
    case "medo": nome = "com Medo"; break;
  }
    const divertidamente= () => {
      alert(`você está ${nome}`); 
    
    }
    return(
        <div className={'card-filme ' + titulo} onClick={handleFavClick}> 
          <div className='titulo-card'>
            {
              fav == true
                ? <FontAwesomeIcon icon={faStarSolid} className='fa-star' onClick={handleFavClick}/>
                : <FontAwesomeIcon icon={faStarRegular} className='fa-star' onClick={handleFavClick}/>
            }
         
          <img src={imagem} alt={titulo} />
          <div className='card-desc' >
          <p >{desc}</p>
            </div>
          </div>
          <h3>{titulo}</h3>
        </div>
    )
}
 
 
export default ItemFilme; 