import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import { Button, Typography } from '@mui/material';

const Nav = () => {
    return ( 
        <>
        <AppBar sx={{backgroundColor:'white' , color:'black'}}>
<Toolbar>
    <Typography sx={{fontFamily:'Verdana,sans-serif',fontSize:'17px',lineHeight:'1.5'}}>B R <span> Architects</span></Typography>

    <Tabs sx={{marginLeft:'auto'}} textColor='secondary'  indicatorColor='primary'>
        <Button variant='text'sx={{fontFamily:'Verdana,sans-serif',fontSize:'17px',lineHeight:'2.5'}} >Projects</Button>
        <Button variant='text' sx={{fontFamily:'Verdana,sans-serif',fontSize:'17px',lineHeight:'1.5'}}>contact</Button>
        <Button variant='text' sx={{fontFamily:'Verdana,sans-serif',fontSize:'17px',lineHeight:'1.5'}}>About</Button>
        </Tabs>

</Toolbar>


        </AppBar>
        
        </>
     );
}
 
export default Nav;