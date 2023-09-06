import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardComponent = ({ title, image, content }) => {
    return (
        <>
            <Card sx={{ maxWidth: "100%", mr: {lg:3,xl:3,sm:0,md:3}, mb:3 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="450"
                    image={image}
                    sx={{ mt: 2 }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        textAlign="center"
                        sx={{ fontWeight: "bold", fontStyle: "italic" }}
                    >
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} textAlign="center">
                        {content}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default CardComponent;
