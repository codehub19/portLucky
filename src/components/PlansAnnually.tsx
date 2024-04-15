import { Box, Container, Grid, Typography , Switch, Stack, Button} from "@mui/material";
import '../styling/style.css'
import { AddPlan } from "./AddPlan";

export const PlansAnnually = () => {
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
                    marginTop:7,
                    width:'60%',
                    padding:5,
                    paddingBottom:0,
                    borderRadius:5,
                    border:'1px solid rgba(255, 255, 255, 0.24)',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display:'grid',
                    gridTemplateColumns:'repeat(3, 1fr)',
                  
                }}>
                    
            <AddPlan

             price={4999} 
             for="Startup"
             txt1="Upto 5 successful R&D collaborations"
             txt2="5-10% Success Fee"
             txt3="Ai-driven milestone based tracking of entire project"
             txt4="Access to labs, chemicals, equipments."
             txt5="Upto 10 Research Hiring"

            ></AddPlan>


            <AddPlan
            
            price={8999} 
            for="Enterprise"
            txt1="All Startup features"
            txt2="Upto 10 successful R&D collaborations"
            txt3="1-5% Success Fee"
            txt4="Upto 20 research hirings"
            txt5="Custom reporting and analytics"

           ></AddPlan>


            <AddPlan
            
            price={16999} 
            for="Corporation"
            txt1="All Enterprise features"
            txt2="0-3% Success Fee"
            txt3="Unlimited successful R&D collaborations"
            txt4="Unlimited research hirings"
            txt5="Access to groundbreaking patents"

           ></AddPlan>

            </Box>
        </div>
    )
}