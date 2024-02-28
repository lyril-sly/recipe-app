import { Card, CardMedia, Container, TextField, Grid, CardContent, Typography } from "@mui/material"

export default function RecipeItem({ title, image }) {
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {/* this is how you pass a props */}
                        {title}
                    </Typography>

                </CardContent>

            </Card>
        </Grid>
    );
}