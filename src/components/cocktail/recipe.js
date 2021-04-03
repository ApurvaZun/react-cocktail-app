import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import CardImage from "../Card/cardImage";
import TextDisplay from '../Card/textDispaly';


const useStyles = makeStyles({
    root: {
      height: 'auto',
      padding: 20,
      minHeight: 'calc(100vh - 202px)',
    },   
    grid: {
        justifyContent: 'center',
        padding: 50
      }    
  });

function Recipe(){

    const classes = useStyles();

    let { id } = useParams();

    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [measure, setMeasure] = useState([]);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
         .then(res => res.json())
         .then(res => {
             const cocktail = res.drinks[0];
             const tempIngrediants = [];
             const tempMeasure = [];
             for (let i in cocktail){
                if(i.includes("strIngredient") && cocktail[i] != null){
                    tempIngrediants.push(cocktail[i]);
                }
                if(i.includes("strMeasure") && cocktail[i] != null){
                    
                    tempMeasure.push(cocktail[i]);
                }
             }
             setRecipe(cocktail);
             setIngredients(tempIngrediants);
             setMeasure(tempMeasure);
         });

    }, [id]);

    return(
        <div>
            <Grid container spacing={4} className={classes.grid}>
                <Grid item xs={12} md={5} className={classes.item}>
                    <Card className={classes.root}>
                        <CardImage image={recipe.strDrinkThumb} id={recipe.idDrink} />
                    </Card>
                </Grid>
                <Grid item xs={12} md={5} className={classes.item}>
                    <h5>{recipe.strDrink}</h5>
                    <ol>
                        {ingredients && ingredients.map((item,index) => {
                            return(
                                <li key={index}>{item} &nbsp;{measure[index]}</li>
                            )
                        } )}
                    </ol>
                    <TextDisplay text={recipe.strInstructions} />
                </Grid>
            </Grid>  
        </div>
    )
}

export default Recipe;