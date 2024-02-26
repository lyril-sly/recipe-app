
import { Card, CardMedia, Container, TextField, Grid, CardContent, Typography } from "@mui/material"
import RecipeItems from "../../component/navbar/recipe-items"
import {useState, useEffect} from "react"



export default function Recipes() {
 const [recipes, setRecipes] = useState([]);

 const searchRecipes = () => {
    const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
    url.searchParams.append('apiKey', '695d1ce54a0a4588b595426645cd7ca0');
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        setRecipes(data.results);
    })
    .catch((error) => {
        console.log(error)
    })
 }

 useEffect(searchRecipes, []);
    return (

        <>
            <Container sx={{ my: "2rem" }}>
                <TextField
                    color="error"
                    fullWidth
                    id="outlined-basic"
                    label="Enter a key to display your recipe"
                    variant="outlined" />


                    <Grid sx={{mt: "2rem"}} container spacing={3}>

                    {recipes.map((recipe) => <RecipeItems key={recipe.id} title={recipe.title} image={recipe.image}/>
                    )}

                    </Grid>
            </Container>
        </>
    )
}