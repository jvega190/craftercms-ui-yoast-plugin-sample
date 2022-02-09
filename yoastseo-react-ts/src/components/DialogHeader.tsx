import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function getStyles() {
  return {
    root: {
      m: 0,
      p: 2,
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    }
  }
}

export interface DialogHeaderProps {
  id?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function DialogHeader (props: DialogHeaderProps) {
  const { children, onClose, ...other } = props;
  const sx = getStyles();

  return (
    <DialogTitle sx={sx.root} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
