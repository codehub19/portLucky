import React from "react";
import { Box, Container, Grid, Typography , Switch} from "@mui/material";
import { PlansMonthly } from "./PlansMonthly";
import { PlansAnnually } from "./PlansAnnually";

// const label = { inputProps: { 'aria-label': 'Switch demo' } };




export default function Pricing  ()  {
    const [checked, setChecked] = React.useState<boolean>(false);

    const x = checked? <PlansAnnually></PlansAnnually>:<PlansMonthly></PlansMonthly>
    const monthly = checked? 0:600
    const annually = checked? 600:0

    return(
        <div style={{
            flexDirection:'column',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
              
              
        }}>
                <Box 
                sx={
                    {
                        marginTop:15,
                        width:'50%',
                        display:"flex",
                        flexDirection:'column',
                        justifyContent:"center",
                        alignItems:"center",

                    }
                    }>
                    <Typography sx={
                        {
                            typography: 'body1' ,
                            color : 'success.main',
                            fontWeight: 600,
                            margin:2,
                        }
                    }>
                        PRICING
                    </Typography>
                    <Typography sx={
                        {
                            typography: 'h3' ,
                            fontWeight:700,
                            margin:2,
                            color: 'primary.main'

                        }
                    }>
                        Our pricing plans
                    </Typography>

                    <Typography sx={
                        {
                            fontSize:18 ,
                            color:'primary.main',
                            padding:'0 10%'
                        }
                    }>
                        Choose the pricing plan that best meets your needs and budget, and start accelerating your R&D today.

                    </Typography>

                    <div 
                    style={{
                        display:'grid',
                        alignItems:'center',
                        marginTop:50,
                        marginBottom:30,
                        gridTemplateColumns:'3fr 2fr 3fr 2fr'
    

                    }}>

                        <Typography sx={{fontWeight: monthly, }}>Billed Monthly</Typography>

                        <Switch                      
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        sx={{
                            margin:' 0px 8px',
                            color:'success.main'
                        }}

                        
                        />

{/* <Switch 
  sx={{
    "--Switch-trackWidth": "64px",
    "--Switch-trackHeight": "30px",
    "--Switch-thumbSize": "22px",
    "--Switch-thumbOffset": "6px"
  }}
/> */}
                        
                        <Typography sx={{fontWeight: annually}}>Billed Annually </Typography> <Typography color="success.main"> (save 20%)</Typography>
                        
                        
                    </div>

                    

            </Box>

            <Box width={'100%'} position={'relative'}>
             {x}

            </Box>
                
            
        </div>
        
    )
}