
import { AppBar, Button, Toolbar, Typography } from '@mui/material'



const Navbar = () => {
    
  return (

   
 <AppBar position='sticky'>
    <Toolbar>
         <Typography variant='h4' color="">
           Get
        </Typography>
        <Typography variant='h4' color="secondary">             Talent
        </Typography>
        <Button variant='text'>
            Boton uno
        </Button>
    </Toolbar>
   
 </AppBar>

  
) 
};

export default Navbar;