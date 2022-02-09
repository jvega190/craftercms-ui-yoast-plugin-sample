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
import GooglePreview from "./GooglePreview";
import List from '@mui/material/List';

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

const defaultArgs = {
  description: "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation",
  title: "Hello word! | Test",
  url: "http://localhost:8080",
  onMouseUp: (e: any) => {
    console.log('mouseUp', e);
  },
};

export default function Analyser () {
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
  }, [paper]);

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
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
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
          <GooglePreview { ...defaultArgs } />
        </List>
      </Grid>
    </Grid>
  )
}
