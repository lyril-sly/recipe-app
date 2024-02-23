import {AppBar, Toolbar, Typography} from "@mui/material"
import { green } from "@mui/material/colors"




export default function NavBar() {

    return(
        <>
         <AppBar sx={{ backgroundColor: "orange"}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,}}>
            Recipes App
          </Typography>
        </Toolbar>
      </AppBar>
        </>
    )
}