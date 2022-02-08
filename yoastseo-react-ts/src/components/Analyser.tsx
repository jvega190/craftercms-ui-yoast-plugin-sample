import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
// @ts-ignore
import Jed from "jed";
// @ts-ignore
import { Paper, SeoAssessor, ContentAssessor, helpers } from "yoastseo";
import {
  contents,
  title,
  url,
  permalink,
  description,
  keyword,
  synonyms
} from "../containers/contents";
import AnalysisResults from "../components/AnalysisResults";
import { Paper as PaperType } from '../models/Analysis';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

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
const MODE_MOBILE = "mobile";
const MODE_DESKTOP = "desktop";

const defaultValue = {
  title: 'Title',
  metaDesc: 'Description'
}
const placeholder = {
  title: 'Title',
  metaDesc: 'Description',
  urlPath: 'https://example.org'
}
// const test = SnippetPreview({
//   data: {},
//   analyzerApp: contentAssessor,
//   placeholder,
//   i18n: i18n(),
//   defaultValue,
//   baseUrl: 'https://example.org'
// })

const defaultArgs = {
  description: "Description",
  title: "Title",
  url: "https://example.org",
  mode: 'desktop',
  // onMouseUp: jest.fn(),
};

export default function Analyser () {
  // const [paper, setPaper] = useState<PaperType>();
  const [paper, setPaper] = useState<PaperType>(new Paper(contents, {
    title,
    titleWidth: helpers.measureTextWidth(title),
    description,
    url,
    permalink,
    keyword,
    synonyms,
    locale: "id_ID"
  }));
  const [text, setText] = useState(contents);
  const [contentAssessorResults, setContentAssessorResults] = useState();
  const [seoAssessorResults, setSeoAssessorResults] = useState();

  useEffect(() => {
    contentAssessor.assess(paper);
    seoAssessor.assess(paper);

    setSeoAssessorResults(seoAssessor.results);
    setContentAssessorResults(contentAssessor.results);

    // console.log('paper', paper);
  }, [paper]);

  // console.log('snippetPreview', MODE_DESKTOP);

  // const defaultArgs = {
  //   description: "Description",
  //   title: "Title",
  //   url: "https://example.org",
  //   mode: MODE_DESKTOP,
  //   onMouseUp: () => {}
  //   // onMouseUp: jest.fn(),
  // };

  return (
    <Grid container spacing={4} alignItems="stretch">
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Box
              component="form"
              sx={{
                paddingTop: '10px',
                '& .MuiTextField-root': { marginBottom: '25px' }
              }}
            >
              <TextField
                fullWidth
                label="Title"
                value={paper.getTitle()}
                onChange={() => {}}
                // onChange={this.changeTitle}
              />
              <TextField
                label="Content"
                fullWidth
                multiline
                maxRows={8}
                onChange={() => {}}
                // onChange={this.changeText}
                value={text}
              />
              <TextField
                fullWidth
                label="Focus Keyword"
                onChange={() => {}}
                // onChange={this.changeKeyword}
                value={paper.getKeyword()}
              />
              <TextField
                fullWidth
                label="Keywords Synonyms"
                onChange={() => {}}
                // onChange={this.changeSynonyms}
                value={paper.getSynonyms()}
              />
              <TextField
                fullWidth
                label="URL"
                onChange={() => {}}
                // onChange={this.changeUrl}
                value={paper.getPermalink()}
              />
              <TextField
                fullWidth
                label="Meta Description"
                multiline
                maxRows={8}
                onChange={() => {}}
                // onChange={this.changeDescription}
                value={paper.getDescription()}
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography fontWeight="bold">Google Preview</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/*{*/}
            {/*  contentAssessor && contentAssessorResults &&*/}
            {/*  <SnippetPreview*/}
            {/*    data={{}}*/}
            {/*    analyzerApp={contentAssessor}*/}
            {/*    placeholder={placeholder}*/}
            {/*    i18n={i18n()}*/}
            {/*    defaultValue={defaultValue}*/}
            {/*    baseUrl='https://example.org'*/}
            {/*  />*/}
            {/*}*/}

            {/*<SnippetPreview { ...defaultArgs } />*/}
          </AccordionDetails>
        </Accordion>

      </Grid>
    </Grid>
  )
}
