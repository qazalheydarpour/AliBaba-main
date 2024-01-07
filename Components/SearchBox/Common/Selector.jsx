import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const styles = {
    new: {
        direction:'rtl',
        width: '130px',
        height: '40px',
        borderRadius: '15px',
        border: 'solid 1px gray',
        padding: '0px',
        '&:hover':{
        border:'solid 2px blue',
        },
        "& .css-1j6ebxq-MuiTypography-root":{
            fontSize: '14px',
            float:'right',
            marginRight: '10px'
        }
    }
}

export default function Selector (props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <List


                component="nav"
                aria-label="Device settings"

            >
                <ListItem
                    button
                    sx={styles.new}
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                >
                    <ListItemText

                        primary={props.options[selectedIndex]}
                    />
                </ListItem>
            </List>
            <Menu

                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{

                    role: 'listbox',
                }}
            >
                {props.options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
