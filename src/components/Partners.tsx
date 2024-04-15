import { Box, Container, Grid, Typography , Switch, Stack, Button} from "@mui/material";
import img1 from '../images/partners/div.h2d-4ba5f9e9.svg'
import img2 from '../images/partners/img2.png'
import img3 from '../images/partners/img3.png'
import img4 from '../images/partners/img4.png'
import img5 from '../images/partners/img5.png'
import img6 from '../images/partners/img6.png'
import img7 from '../images/partners/img7.png'
export const Partners = () =>{
    return(
        <div
        style={
            {flexDirection:'column',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginTop:40
        }
        }
        >
            <Box>
                <Typography
                sx={{
                    fontSize:12,
                    fontWeight:600  
                }}
                >
                    OUR PARTNERS
                </Typography>
                <Box
                sx={{
                    display:'grid',
                    gridTemplateColumns:'repeat(7,1fr)',
                    width:1000,
                    alignItems:'center'
                }}
                >
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />

                </Box>
            </Box>
        </div>
    )
}