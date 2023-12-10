import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
const Project = () => {
    
return ( 
        <>

<Card >
                <CardContent >
                <img  src="https://www.w3schools.com/w3images/architect.jpg" alt="no photo" style={{height:'700px',width:'100%'}} />

                </CardContent>
                <Typography variant="h4" style={{position:'relative',bottom:'300px',color:'black',fontFamily:'initial',fontWeight:'1000'}}>B R <span style={{backgroundColor:'blue',color:'white'}}>Architects</span></Typography>
            </Card>
            <Typography variant="h4" style={{ position: 'relative', top: 0, right: '45%' }}> Project </Typography>
            <Card>
                <CardContent>
                <Box sx={{ flexGrow: 1 }}>
{/* --------------------------------- */}
<Grid container spacing={2}>
                <Grid item xs={12} md={4} >
        {/* Paragraph */}
        
           <Typography variant="h6">Summer House</Typography>
          <img height={200} width={350}  src="https://www.w3schools.com/w3images/house5.jpg"></img>

        
      </Grid>
      <Grid item xs={12} md={4} >
        {/* Paragraph */}
        
           <Typography variant="h6">Renovated</Typography>
          <img height={200} width={350}  src="https://www.w3schools.com/w3images/house2.jpg"></img>

        
      </Grid><Grid item xs={12} md={4} >
        {/* Paragraph */}
        
           <Typography variant="h6">Barn house</Typography>
          <img height={200} width={350}  src="https://www.w3schools.com/w3images/house4.jpg"></img>

        
      </Grid> <Grid item xs={12} md={4} >
        {/* Paragraph */}
        
           <Typography variant="h6">summer House</Typography>
          <img height={200} width={350}  src="https://www.w3schools.com/w3images/house2.jpg"></img>

        
      </Grid>
          <Grid item xs={12} md={4} >
        {/* Paragraph */}
        
           <Typography variant="h6">Brick house</Typography>
          <img height={200} width={350}  src="https://www.w3schools.com/w3images/house3.jpg"></img>

        
      </Grid>
      <Grid item xs={12} md={4} >
        {/* Paragraph */}
        
           <Typography variant="h6">Barn house</Typography>
          <img height={200} width={350}  src="https://www.w3schools.com/w3images/house5.jpg"></img>

        
      </Grid>
      </Grid>
      </Box>
                </CardContent>
            </Card>
        </>
     );
}
 
export default Project;