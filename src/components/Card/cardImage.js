import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    media: {
        display: 'block',
        width: 'auto',
        height: 'auto',
        maxWidth: '100%',    
        borderRadius: 12,
    }
});

function CardImage( {image, id} ) {

    const classes = useStyle();

    return (
            <CardActionArea>
                <img
                    className={classes.media}
                    src={image}
                    alt={id}
                />
            </CardActionArea>
    )
}

export default CardImage;