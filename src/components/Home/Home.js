import React, {lazy, Suspense, useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import "../../styles/home.css";
import { ButtonRecipe, Radio, Search } from '../Input/index';
const CardImage = lazy(() => import('../Card/cardImage'));

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      padding: 20
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
      }

  });

function Home(){

    const classes = useStyles();
    const [searchText, setSearchText] = useState("");
    const [typeOfSearch, setTypeOfSearch] = useState("Name");
    const [cocktail, setCocktail] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        let URL = "";
        if (typeOfSearch === 'Name'){
            URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
        } else {
            URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchText}`;
        }

        if(searchText !== ""){

            setLoading(true);

            fetch(URL)
            .then(res => res.json()
            .then(res => {
                setLoading(false);
                setCocktail(res.drinks);
            }))
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
        }
        
    }, [searchText, typeOfSearch]);

    function handleChange(event){
        setSearchText(event.target.value);
    }

    function handleSelectChange(event){
        setTypeOfSearch(event.target.value);
    }

    return (
        <Container>
            <Radio handleSelectChange={handleSelectChange} typeOfSearch={typeOfSearch}/>
            <Search searchText={searchText} handleChange={handleChange} />

            {loading ? 'Loading...' : 
                <Grid container spacing={4} className={classes.grid}>
                    {cocktail && cocktail.map(item => {
                        return(
                            <Grid key={item.idDrink} item xs={6} md={4} lg={3}>
                                <Card className={classes.root}>
                                    <Suspense fallback={<div>Loading Component</div>}>
                                        <CardImage image={item.strDrinkThumb} id={item.idDrink} />
                                    </Suspense>                                    
                                    <h5>{item.strDrink}</h5>
                                    <ButtonRecipe id={item.idDrink} />
                                </Card>
                            </Grid>
                        );            
                    })}
                </Grid>
            }                           
        </Container>
    )
}

export default Home;