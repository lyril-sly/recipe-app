import { Card, CardMedia, Container, TextField, Grid, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom";

export default function RecipeItem({ title, image, id }) {
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}

                />
                <CardContent>
                    <Link to={`/recipes/${id}`}>
                        <Typography gutterBottom variant="h5" component="div">
                            {/* this is how you pass a props */}
                            {title}
                        </Typography>
                    </Link>

                </CardContent>

            </Card>
        </Grid>
    );
}