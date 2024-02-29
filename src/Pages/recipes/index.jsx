
import { Card, CardMedia, Container, TextField, Grid, CardContent, Typography } from "@mui/material"
import RecipeItems from "../../component/navbar/recipe-items"
import { useState, useEffect } from "react"
import nodata from '../../Assect/images/undraw_no_data_re_kwbl.svg'
import loader from '../../Assect/images/motion-blur-2.svg'


export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [searchItem, setSearchItem] = useState("")
    const [loading, setLoaing] = useState(false)

    const searchRecipes = () => {
        setLoaing(true)
        // the url is use to get the item or the images or whatever you want to get
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
        url.searchParams.append('query', searchItem);

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data.results);
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => setLoaing(false))
    }
    // 
    useEffect(searchRecipes, []);
    return (

        <>
            <Container sx={{ my: "2rem" }}>
                <TextField
                    color="error"
                    fullWidth
                    id="outlined-basic"
                    label="Enter a key to display your recipe"
                    variant="outlined"
                    value={searchItem}
                    // onChange means the person is typing something
                     onChange={(event) => setSearchItem(event.target.value)} 
                    onKeyDown={event => event.key === 'Enter' && searchRecipes()}
                />

                <Grid sx={{ mt: "2rem" }} container spacing={3}>
                    {/* the.map is use to render a list of iterms from an array */}
                    {loading ?<img src={loader} width="25%"/> : recipes.length > 0 ? recipes.map((recipe) =>
                        // so you pass the key on the list that you want to get from the api or the url then you pass each into the param at the child component
                        <RecipeItems key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id} />
                    ) :(
                        <Container sx={{display: 'flex', justifyContent: 'center'}}>
                        <img src={nodata} width="25%"/>
                        </Container>
                    )}
                    

                </Grid>
            </Container>
        </>
    )
}