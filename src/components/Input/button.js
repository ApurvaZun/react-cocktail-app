import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    button: {
        backgroundColor: '#FF512F'
    }
});

function ButtonRecipe( { id } ){

    const classes = useStyle();

    return (
        <div>
            <Button
                color="primary"
                component={Link}
                to={`/cocktail/${id}`}                          
                className={classes.button}>
                View Recipe
            </Button>
        </div>
    )
}

export default ButtonRecipe;