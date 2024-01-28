import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Tab, Tabs, Toolbar, Typography, useMediaQuery,useTheme } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DrawerComp from './Drawer';
import { Pages } from '@mui/icons-material';

const pages =['Products', 'services', 'About', 'Contact']

const Header = () => {
    const theme = useTheme();
    console.log(theme)
    const [value, setvalue] = useState();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <div>
      <AppBar sx={{backgroundColor: "#063970"}}>
        <Toolbar>
            {isMatch ? (
                <>
                <Typography sx={{fontSize:'1.5rem', paddingLeft: '10%'}}>SHOPEE</Typography>
            <DrawerComp/>
                
                </>
            )
            :
           
            (
                <>
            <AddShoppingCartIcon/>
            <Tabs  textColor='inherit' value={value} indicatorColor='secondary' onChange={(e, value)=> setvalue(value)}>
                
                {
                    pages.map((page, index)=>(
                        <Tab label={page} key={index}/>
                    ))
                }
            </Tabs>
<Button sx={{marginLeft:"auto"}}variant='contained'>Login</Button>
<Button sx={{marginLeft:"10px"}}variant='contained'>signup</Button>
            </>)}
        </Toolbar>
        
      </AppBar>
    </div>
  );
}

export default Header;
