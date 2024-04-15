import { Box, Container, Grid, Typography , Switch, Stack, Button} from "@mui/material";

export const CustomPlan = () =>{
    return(
        <div
        style={
            {flexDirection:'column',
            display:"flex",
            justifyContent:"center",
            alignItems:"center"}
        }
        >
                <Box
        sx={
            {
                display:'grid',
                gridTemplateColumns:'3fr 1fr',
                width:'60%',
                border: '1px solid rgba(255, 255, 255, 0.24)',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                paddingLeft:5,
                paddingRight:5,
                margin:3,
                borderRadius:5,
                alignItems:'center'
                
            }
        }
        >
            <Stack 
            sx={{
                typography:'h4',
                alignItems:'start',
                justifyContent:'start',
                textAlign:'start',
                padding:5
            }}
            >
                <Typography
                sx={{
                    typography:'h4',
                    fontWeight:600

                }}
                >Custom Plan</Typography>
                <Typography
                sx={{
                   fontSize:18,
                }}
                >Contact us today to create a custom plan that meets your specific needs. </Typography>
            </Stack>

            <Button variant="contained" color="success"
            sx={{
                fontSize:16,
                fontWeight:600,
                width:'80%',
                height:'40%',
                borderRadius:10,
            }}
            >Contact us
           
            </Button>
        </Box>
        </div>
        
    )
}