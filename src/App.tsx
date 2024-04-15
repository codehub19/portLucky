
import './App.css';
import { Navbar } from './components/Navbar';
import { createTheme,  ThemeProvider } from '@mui/material';
import Pricing  from './components/Pricing';
import { PlansMonthly } from './components/PlansMonthly';
import { CustomPlan } from './components/CustomPlan';
import { Partners } from './components/Partners';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
import { PlansAnnually } from './components/PlansAnnually';

const theme = createTheme({
  palette : {
    primary: {
      main: "#FEFEFE",
      
    },
    secondary: {
      main: '#1F2129'
    },
    success:{
      main: '#3FA268',
    
    },
    
  },
  
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        <Navbar></Navbar>
        <Pricing></Pricing>
{/*         
        <PlansMonthly></PlansMonthly>
        <PlansAnnually></PlansAnnually> */}
        <CustomPlan></CustomPlan>
        <Partners></Partners>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
