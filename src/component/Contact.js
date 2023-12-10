import { AppBar, Button, Card, CardContent, Input, TextField, Toolbar, Typography } from "@mui/material";

const Contact = () => {
    return ( 
        <>
<Card>
    <CardContent>
        <Typography variant="h5">Lets get in touch and talk about your next project.</Typography>

        <form>
           <TextField placeholder="Name" sx={{width:'95%',marginTop:'20px'}}></TextField><br></br>
           <TextField placeholder="Email" sx={{width:'95%',marginTop:'20px'}}></TextField><br></br>
           <TextField placeholder="Subject" sx={{width:'95%',marginTop:'20px'}}></TextField><br></br>
           <TextField placeholder="contact" sx={{width:'95%',marginTop:'20px'}}></TextField><br></br><br></br>
           <Button variant="contained" style={{ position: 'relative', top: 0, right: '42%' }} sx={{backgroundColor:'black',color:'white'}}>Send message</Button>
        </form>
    </CardContent>
</Card>
<Card>
    <CardContent>
        <img src="https://www.w3schools.com/w3images/map.jpg"/>
    </CardContent>
</Card>

    <Card sx={{backgroundColor:'black',color:'white'}}>
        <CardContent>
        <Typography>Powered by san</Typography>
        </CardContent>
    </Card>

        </>
     );
}
 
export default Contact;