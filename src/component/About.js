import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

const About = () => {
    return ( 
        <>
<Card>
    <Typography variant="h4" style={{ position: 'relative', top: 0, right: '45%' }}>About</Typography>
    <CardContent>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </CardContent>
</Card>
<Card>
    <CardContent>
<Box sx={{ flexGrow: 1 }}>
{/* --------------------------------- */}
<Grid container spacing={2}>
                <Grid item xs={6} md={3} >
        {/* Paragraph */}
        
          
          <img height={200} width={300}  src="https://www.w3schools.com/w3images/team2.jpg"></img>
          <Typography variant="h6">john Doe</Typography>
          <Typography>CEO & Founder</Typography>
          <Typography variant="body1">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</Typography>
         <Button>Contact</Button>
      </Grid>
      <Grid item xs={6} md={3} >
        {/* Paragraph */}
        
          
          <img height={200} width={300}  src="https://www.w3schools.com/w3images/team1.jpg"></img>
          <Typography variant="h6">jone doe</Typography>
          <Typography>Architect</Typography>
          <Typography variant="body1">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</Typography>
         <Button>Contact</Button>
      </Grid>
      <Grid item xs={6} md={3} >
        {/* Paragraph */}
        
          
          <img height={200} width={300}  src="https://www.w3schools.com/w3images/team3.jpg"></img>
          <Typography variant="h6">mike ross</Typography>
          <Typography>Architect</Typography>
          <Typography variant="body1">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</Typography>
         <Button>Contact</Button>
      </Grid>
      <Grid item xs={6} md={3} >
        {/* Paragraph */}
        
          
          <img height={200} width={300}  src="https://www.w3schools.com/w3images/team4.jpg"></img>
          <Typography variant="h6">dan star</Typography>
          <Typography>Architect</Typography>
          <Typography variant="body1">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</Typography>
         <Button>Contact</Button>
      </Grid>

      </Grid>
      </Box>
      </CardContent>
      </Card>
        </>
     );
}
 
export default About;