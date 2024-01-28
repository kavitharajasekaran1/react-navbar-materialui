import React , {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
const pages =['Products', 'services', 'About', 'Contact', "Login", "Signup"]

const DrawerComp = () => {
    const [openDrawer, setopenDrawer] = useState(false)
  return (
    <>
    <Drawer open={openDrawer} onClose={()=>setopenDrawer(false)}>
        <List>
            {
                pages.map((page,index)=>(
                    <ListItemButton key={index}>
                        <ListItemIcon >
                            <ListItemText>
                                {page}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))
            }
        </List>
    </Drawer>
    <IconButton  sx={{ color: 'white', marginLeft: 'auto'}}onClick={()=> setopenDrawer(!openDrawer)}>
    <MenuIcon color='white'/>
    </IconButton>
    </>
  );
}

export default DrawerComp;
