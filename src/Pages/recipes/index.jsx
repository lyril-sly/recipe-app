
import { Card, CardMedia, Container, TextField, Grid, CardContent, Typography } from "@mui/material"



export default function Recipes() {
    return (

        <>
            <Container sx={{ my: "2rem" }} maxWidth="sm">
                <TextField
                    color="error"
                    fullWidth
                    id="outlined-basic"
                    label="Enter a key to display your recipe"
                    variant="outlined" />

                    <Grid sx={{mt: "1rem"}} Container spacing={3}></Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardMedia 
                            component="img"
                            sx={{height: 140}}
                            image="https://images.unsplash.com/photo-1682695796795-cc287af78a2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </Card>
                        <CardContent>
                            <Typography variant="h5">Recipe Name</Typography>
                        </CardContent>
                    </Grid>
            </Container>
        </>
    )
}