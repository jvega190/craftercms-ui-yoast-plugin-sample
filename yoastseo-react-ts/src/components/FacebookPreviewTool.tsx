import React, {useState} from 'react';
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Dialog from '@mui/material/Dialog';
import DialogHeader from "../components/DialogHeader";
import FacebookPreview from "../yoast/social-metadata-previews/facebook/FacebookPreview";
import DialogBody from "./DialogBody";

function getStyles () {
  return {
    root: {
      paddingBottom: '10px',
      paddingTop: '10px'
    },
    listItemText: {
      '& span': {
        fontWeight: 700,
        color: 'rgba(0, 0, 0, 0.87)'
      }
    },
    listItemIcon: {
      marginLeft: 'auto'
    }
  }
}

export interface FacebookPreviewProps {
  siteUrl: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export default function FacebookPreviewTool(props: FacebookPreviewProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const sx = getStyles();

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  return <>
    <ListItemButton onClick={handleClickOpen} divider sx={sx.root}>
      <ListItemText primary="Facebook Preview" sx={sx.listItemText}/>
      <ListItemIcon>
        <OpenInNewIcon sx={sx.listItemIcon} />
      </ListItemIcon>
    </ListItemButton>
    <Dialog
      fullWidth
      maxWidth="sm"
      open={openDialog}
      onClose={handleClose}
    >
      <DialogHeader onClose={handleClose}>Facebook Preview</DialogHeader>
      <DialogBody>
        <FacebookPreview
          siteUrl="amazon.com"
          title="Amazon.com. Spend less. Smile more."
          description="Free shipping on millions of items. Get the best of Shopping ..."
          imageUrl="https://external.fsyq2-1.fna.fbcdn.net/safe_image.php?d=AQEo3iPLbm6Ock7J&w=500&h=261&url=http%3A%2F%2Fg-ec2.images-amazon.com%2Fimages%2FG%2F01%2Fsocial%2Fapi-share%2Famazon_logo_500500._V323939215_.png&cfs=1&ext=jpg&_nc_oe=6f8bf&_nc_sid=06c271&ccb=3-5&gt=1&_nc_hash=AQElbyyvQzhecGqo"
        />
      </DialogBody>
    </Dialog>
  </>;
}
