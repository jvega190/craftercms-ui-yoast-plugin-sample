import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { Paper, SeoAssessor, ContentAssessor, helpers } from "yoastseo";
import {Paper as PaperType} from "./models/Analysis";
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
  const [contentAssessorResults, setContentAssessorResults] = useState();
  const [seoAssessorResults, setSeoAssessorResults] = useState();
  const [requestedSEOData, setRequestedSEOData] = useState(false);
  const requestSEOData = () => {
    setRequestedSEOData(true);
    //@ts-ignore
    window.CrafterCMSNext?.system.getHostToGuestBus().next({ type: 'REQUEST_SEO_DATA' });
  }

  useEffect(() => {
    //@ts-ignore
    const guestToHostSubscription = window.CrafterCMSNext?.system.getGuestToHostBus()
      .subscribe((action) => {
        switch (action.type) {
          case 'RESPONSE_SEO_DATA':
            const { contents, description, keyword, title } = action.payload;

            // title?: string – The SEO title.
            // titleWidth?: number – The width of the title in pixels.
            // description?: string – The SEO description.
            // keyword?: string – The main keyword.
            // synonyms?: string – The main keyword's synonyms.
            // url?: string – The slug.
            // permalink?: string – The base url + slug.

            setPaper(new Paper(contents, {
              title,
              titleWidth: helpers.measureTextWidth(title),
              description,
              keyword
            }));
            setRequestedSEOData(false);
            break;
          case 'GUEST_CHECK_IN':
            requestSEOData();
            break;
        }
      });

    if (!requestedSEOData) {
      requestSEOData();
    }

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
        onClick={requestSEOData}
        sx={{
          marginTop: '10px',
          marginBottom: '10px'
        }}
      >
        Update SEO Data
      </Button>
      {
        contentAssessor &&
        <AnalysisResults
          heading={"Content Analysis"}
          results={contentAssessorResults}
          assessor={contentAssessor}
        />
      }
      {
        seoAssessor &&
        <AnalysisResults
          heading={"SEO Analysis"}
          results={seoAssessorResults}
          assessor={seoAssessor}
        />
      }
    </>
  )
}

export default ReactComponent
