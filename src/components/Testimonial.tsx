import { Box, Container, Grid, Typography , Switch, Stack, Button} from "@mui/material";
import com  from '../images/partners/comma.png'

export const Testimonial = () => {
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
                    gridTemplateColumns:'4fr 6fr',
                    width:'90%',
                    alignItems:'center',
                    margin:5,
                    
                }
            }
            >
                <Stack 
                sx={{
                    typography:'h4',
                    alignItems:'start',
                    justifyContent:'start',
                    textAlign:'start',
                    padding:10

                }}
                >
                <Typography 
                sx={{
                    fontSize:12,
                    fontWeight:600,
                    color:'success.main'
                    

                }}
                >TESTIMONIALS</Typography>
                <Typography
                sx={{
                    typography:'h4',
                    fontWeight:600,

                    
                }}
                >
                    Check what our clients are saying
                </Typography>
            </Stack>


            <Stack 
                sx={{
                    typography:'h4',
                    alignItems:'start',
                    justifyContent:'start',
                    textAlign:'start',
                    padding:5
                }}
                >
                <img src={com} alt="" 
                style={{
                    
                    margin:5
                }}
                />
                <Typography
                sx={{
                    fontSize:24      
                }}
                >
                    Since using this platform, our research has completely transformed. we would highly recommend this platform to any business looking to simplify their research process and drive more innovation.
                </Typography>


                <Stack 
                sx={{
                    typography:'h4',
                    alignItems:'start',
                    justifyContent:'start',
                    textAlign:'start',
                }}
                >
                <Typography 
                sx={{
                    fontSize:18,
                    fontWeight:600,       

                }}
                >Adrian cal</Typography>
                <Typography
                sx={{
                    fontSize:14
                }}
                >
                    CEO GetNextDesign
                </Typography>
            </Stack>


            </Stack>


            
            </Box>
        </div>
    )
}