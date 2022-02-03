import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, SeoAssessor, ContentAssessor, helpers } from "yoastseo";
import {Paper as PaperType} from "./models/models";
import Jed from "jed";
import AnalysisResults from "./components/AnalysisResults";

const i18n = () => {
  return new Jed({
    domain: `js-text-analysis`,
    locale_data: {
      "js-text-analysis": {
        "": {}
        // "%1$sSEO title width%3$s: The SEO title is wider than the viewable limit. %2$sTry to make it shorter%3$s.": [
        //   "%1$sJudul SEO%3$s melebihi batas yang dapat dilihat. %2$sCobalah untuk membuatnya lebih pendek%3$s."
        // ]
      }
    }
  });
};

const contentAssessor = new ContentAssessor(i18n());
const seoAssessor = new SeoAssessor(i18n());

const ReactComponent = () => {
  const [paper, setPaper] = useState<PaperType>();
  const [contentAssessorResults, setContentAssessorResults] = useState(null);
  const [seoAssessorResults, setSeoAssessorResults] = useState(null);

  const onClickGetSEOData = () => {
    //@ts-ignore
    window.CrafterCMSNext?.system.getHostToGuestBus().next({ type: 'REQUEST_SEO_DATA' });
  }

  useEffect(() => {
    //@ts-ignore
    const guestToHostSubscription = window.CrafterCMSNext?.system.getGuestToHostBus()
      // @ts-ignore
      .pipe(window.CrafterCMSNext.rxjs.operators.filter((action) => action.type === 'RESPONSE_SEO_DATA'))
      .subscribe(({ payload }) => {
        const { contents, description, keyword, title } = payload;
        setPaper(new Paper(contents, {
          title,
          titleWidth: helpers.measureTextWidth(title),
          description,
          keyword
        }));
      });

    return () => {
      guestToHostSubscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (paper) {
      contentAssessor.assess(paper);
      seoAssessor.assess(paper);

      setSeoAssessorResults(seoAssessor.results);
      setContentAssessorResults(contentAssessor.results);
    }
  }, [paper]);

  return (
    <>
      <Button
        variant="contained"
        fullWidth
        onClick={onClickGetSEOData}
        sx={{
          marginTop: '10px',
          marginBottom: '10px'
        }}
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
          {
            contentAssessor && contentAssessorResults &&
            <AnalysisResults
              heading={"Content"}
              results={contentAssessorResults}
              assessor={contentAssessor}
            />
          }
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
          {
            seoAssessor && seoAssessorResults &&
            <AnalysisResults
              heading={"SEO"}
              results={seoAssessorResults}
              assessor={seoAssessor}
            />
          }
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ReactComponent
