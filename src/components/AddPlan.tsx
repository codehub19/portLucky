import React from "react";
import { Box, Container, Grid, Typography, Switch, Stack, Button } from "@mui/material";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import '../styling/style.css';

interface AddPlanProps {
    // Define the types of props here
    price:number,
    for:string,
    txt1:string,
    txt2:string,
    txt3:string,
    txt4:string,
    txt5:string,

}

export const AddPlan: React.FC<AddPlanProps> = (props) => {
    return(
        
             <Box className='plans-container'
                // sx={{
                //     textAlign:'start',
                //     fontSize:12,
                //     padding:'10px 0px'

                // }} 
                >   

                    <div style={{display:"flex", alignItems:'baseline'}}>
                        <Typography  sx={{
                        color:'primary.main',
                        typography:'h4',
                        fontWeight:600,
                        marginTop:5

                        
                        }}>${props.price}</Typography>
                        <Typography sx={{fontSize:12}}>/month</Typography>

                    </div>

                    <Typography  sx={{
                       color:'primary.main',
                       typography:'h4',
                       margin:2,
                      

                       
                    }}>{props.for}</Typography>


                    <Stack className='stack' direction={'row'} >
                        <CheckCircleRoundedIcon className="tick"/>
                        <Typography  fontSize='15px'>
                        {props.txt1}
                        </Typography>

                    </Stack>


                    <Stack direction={'row'} className='stack'>
                        <CheckCircleRoundedIcon className="tick"/>
                        <Typography fontSize='15px'>
                        {props.txt2}   
                        </Typography>

                    </Stack>


                    <Stack direction={'row'}
                    className='stack'>
                        <CheckCircleRoundedIcon className="tick"/>
                        <Typography fontSize='15px'>
                        {props.txt3}
                                          
                        </Typography>

                    </Stack>


                    <Stack direction={'row'}
                    className='stack'>
                        <CheckCircleRoundedIcon className="tick"/>
                        <Typography fontSize='15px'>
                        {props.txt4}
   
                        </Typography>

                    </Stack>


                    <Stack direction={'row'}
                   className='stack'>
                        <CheckCircleRoundedIcon className="tick"/>
                        <Typography fontSize='15px'>
                        {props.txt5}

                        </Typography>

                    </Stack>

                    <Button variant="contained" color="success"
                     sx={{
                        borderRadius:10,
                        width:'90%',
                        height:'50%',
                        marginTop:8,
                        fontSize:14,
                        fontWeight:500,
                        backgroundColor: 'rgba(63, 162, 104, 0.8)',
                        textTransform: "none" ,

                     }}
                    >Choose Plan
                    </Button>
                    
                       
                </Box>

    );
};





