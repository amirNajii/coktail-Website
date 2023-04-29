import React,{useRef} from 'react';
import { fetchSearchCocktails } from '../redux/cocktailSlice';
import { useDispatch } from 'react-redux';


function Search() {
  const dispatch = useDispatch();

  const valuesearch=useRef()

const handleSubmit=(e)=>{
   e.preventDefault()
}
  const handleChange=()=>{
    const searchText=valuesearch.current.value;
    dispatch(fetchSearchCocktails({searchText}))
  }

  return (
    <div className='searchcontainer'>
        <form className='formsearch' onClick={handleSubmit}>
            <label htmlFor='name'>Serch Cocktail</label>
            <input id="name" ref={valuesearch} onChange={handleChange}></input>
        </form>
    </div>
  )
}

export default Search