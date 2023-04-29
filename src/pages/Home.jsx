import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCocktails } from '../redux/cocktailSlice';
import { Link } from 'react-router-dom';

const Home = () => {

    const { cocktails, loading } = useSelector((state) => ({...state.app}));
    const [modifiedCocktail, setModifiedCocktail] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCocktails());
    },[]);

    useEffect(()=>{
        if(cocktails) {
            const newCocktails = cocktails.map((item)=>{
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass,
                }
            });
            setModifiedCocktail(newCocktails);
        } else {
            setModifiedCocktail([]);
        }
    },[cocktails]);

    if(loading){
        return(<div>
            <span>Loading ...</span>
        </div>)
    }
    
    return (
        <div className='homecontainer'>
            {
                modifiedCocktail.map((item)=>{
                    return(
                     <div key={item.id} className='homecard'>
                        <img src={item.image} alt={item.name}></img>
                        <h3>{item.name}</h3>
                         <p>{item.info}</p>
                         <p>{item.glass}</p>
                         <Link to={`/cocktail/${item.id}`}><button>details</button></Link>
                     </div>
                    )
                    })
            }
        </div>
    )
}

export default Home;