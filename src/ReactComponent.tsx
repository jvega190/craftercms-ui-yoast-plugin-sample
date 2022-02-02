import * as React from 'react'
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ReactComponent = () => {

  const onClickGetSEOData = () => {
    //@ts-ignore
    window.CrafterCMSNext?.system.getHostToGuestBus().next({ type: 'REQUEST_SEO_DATA' });
  }

  React.useEffect(() => {
    //@ts-ignore
    const guestToHostSubscription = window.CrafterCMSNext?.system.getGuestToHostBus()
      // @ts-ignore
      .pipe(window.CrafterCMSNext.rxjs.operators.filter((action) => action.type === 'RESPONSE_SEO_DATA'))
      .subscribe((action) => {
        console.log('SEO data:', action);
      });

    return () => {
      guestToHostSubscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        fullWidth
        onClick={onClickGetSEOData}
      >
        Get SEO Data
      </Button>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Content Analysis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>SEO Analysis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ReactComponent
