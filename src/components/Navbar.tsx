import { AppBar, Toolbar, IconButton, Typography, Stack, Button,  } from "@mui/material";
import logo from '../images/reslink logo.png'
export const Navbar = () =>{
    return(
        <AppBar position="static" color="secondary" sx={{boxShadow:'none'}}>
            <Toolbar>
                <Stack 
                direction={'row'} 
                alignItems='center' 
                flexGrow= {1}  
                justifyContent={'flex-start'}
                >
                    
                    <img src={logo}></img>
                    <Typography variant="subtitle1" component="div">
                        RESLINK
                    </Typography>
                </Stack>
                

                <Stack 
                direction="row" 
                flexGrow= {1} 
                justifyContent= 'center' 
                spacing={5} 
                >
                        <Button color="primary" disableElevation disableRipple sx={{textTransform: "none" , fontSize:16}} >Home</Button>
                        <Button color="primary" disableElevation disableRipple sx={{textTransform: "none" , fontSize:16}} >Features</Button>
                        <Button color="primary" disableElevation disableRipple sx={{textTransform: "none" , fontSize:16}} >About</Button>
                        <Button color="primary" disableElevation disableRipple sx={{textTransform: "none" , fontSize:16}} >Contact</Button>
                        <Button color="primary" disableElevation disableRipple sx={{textTransform: "none" , fontSize:16}} >Pricing</Button>
                </Stack>

                <Stack 
                direction="row" 
                flexGrow= {1} 
                justifyContent= 'flex-end' 
                spacing={3}>
                    <Button variant="text" disableElevation disableRipple sx={{textTransform: "none" , fontSize:16}} >Login</Button>

                    <Button variant="contained" color="success" disableElevation disableRipple  >GET STARTED</Button>

                </Stack>
            </Toolbar>

        </AppBar>
    )
}