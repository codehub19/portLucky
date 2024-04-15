import { Box, Container, Grid, Typography , Switch, Stack, Button} from "@mui/material";
import logo from '../images/reslink logo.png'
import instagram from '../images/partners/Instagram.png'
import twitter from '../images/partners/Twitter.png'
import youtube from '../images/partners/Youtube.png'
import { Padding } from "@mui/icons-material";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
export const Footer = () =>{
    return(
       
            <div
            style={
                {flexDirection:'column',
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }
            }
            >
                <Box
                sx={
                    {
                        display:'grid',
                        gridTemplateColumns:'3fr 7fr',
                        width:'100%',
                        alignItems:'center',
                        boxSizing:'border-box',
                        backgroundColor: 'rgba(255, 255, 255, 0.01)',
                        border:'1px solid rgba(255, 255, 255, 0.07)',
                        padding:'4% 0px',
                        margin:'0px 5px',
                        
                    }
                }
                >
                    <Stack sx={{
                        paddingLeft:'40%',
                        display:'grid',
                        gridTemplateRows:'request(3,1fr)',
                        
                    }}>
                        <Stack sx={{
                            alignItems:'center',
                            display:'flex',
                            flexDirection:'row',
                            margin:'10px 0px'
                            
                        }}>
                            <img src={logo} alt="" style={{width:80}}/>
 
                            <Typography>RESLINK</Typography>
                        </Stack>
                        <Stack>
                                <Typography sx={{
                                    margin:'15px 10px',
                                    justifyContent:'start',
                                    textAlign:'start',
                                    fontSize:14,
                                    lineHeight:'30px'
                                }}
                                >Copyright &copy; 2024 Reslink <br/> All rights reserved</Typography>
                        </Stack>

                        <Stack direction={'row'} sx={
                                {                                               
                                    gap:2,
                                    margin:'20px 10px'
                                }
                            }>
                                <img width={30} src={instagram} alt="" />
                                <img width={30} src={twitter} alt="" />
                                <img width={30} src={youtube} alt="" />
                        </Stack>
                    </Stack>

                    


                    <Stack
                        sx={
                            {
                                display:'grid',
                                gridTemplateColumns:'repeat(3,1fr)',
                                alignItems:'start',
                                padding:'0 15%',
                                marginRight:'5%'
                            }
                        }
                        >
                            <Stack
                            sx={{
                            
                                alignItems:'start',
                                
                            }}>
                                    <Typography
                                    sx={{
                                        fontSize:18,
                                        fontWeight:500,  
                                        marginBottom:2

                                    }}>Company</Typography>
                                    
                                    <a href="" style={{margin:'10px 0px'}}>About us</a>
                                    <a href="" style={{margin:'10px 0px'}}>Features</a>
                                    <a href="" style={{margin:'10px 0px'}}>Contact us</a>
                            
                            </Stack>

                       
                        <Stack
                        sx={{
                        
                            alignItems:'start'
                        }}>
                                <Typography
                                sx={{
                                    fontSize:18,
                                    fontWeight:500,
                                    marginBottom:2

                                }}>Support</Typography>
                            
                                <a href="" style={{margin:'10px 0px'}}>Terms of service</a>
                                <a href="" style={{margin:'10px 0px'}}>Privacy policy</a>
                           
                        </Stack>


                        <Stack
                            sx={{
                            
                                alignItems:'start'
                            }}>
                                <Typography
                                sx={{
                                    fontSize:18,
                                    fontWeight:500,
                                    marginBottom:2

                                }}>Stay up to date</Typography>
                            
                                <div style={{
                                    display:'flex',
                                     padding:'10px 25px',
                                     borderRadius:10,
                                     backgroundColor:'rgba(255,255,255,0.2)',
                                     alignItems:'center',
                                     alignContent:'center',
                            
                                }}>
                                    <input type="text" placeholder="Your email address"  style={{
                                        borderStyle:'none',
                                        color:'white',
                                        outline:'none',                                    
                                        appearance: 'none',
                                        background:'none',
                                    }} /><SendOutlinedIcon sx={{transform: 'rotate(-45deg)', marginLeft:5}}></SendOutlinedIcon>
                                </div>
                                
                           
                        </Stack>


                    </Stack>

                </Box>
            </div>
        
    )
}