import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const blue = {
    400: '#0077DB',
    200: '#C9E3F8',
    600: '#004075',
};

const CustomButtonRoot = styled('button')`
  font-family: 'AliBaba';
  font-weight: 500;
  font-size: 14px;
  background-color: ${blue[400]};
  padding: 10px 16px;
  border-radius: 8px;
  min-width: 144px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  margin: 5px;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[200]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

