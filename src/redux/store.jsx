import {configureStore}from '@reduxjs/toolkit';
import CocktailReducers from './cocktailSlice';

export default configureStore({
    reducer:{
        app:CocktailReducers
    }
})