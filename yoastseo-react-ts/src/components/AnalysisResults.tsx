import React from "react";
import Presenter from "./Presenter";
import {Assessor, Result} from "../models/models";
import {getIndicatorColor, summaryScore} from "../utils/utils";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface AnalysisResultsProps {
  heading: string;
  results: Result[];
  assessor: Assessor;
}

function getStyles() {
  return {
    ratings: {
      marginBottom: '50px'
    },
    heading: {
      color: '#fff',
      marginBottom: '10px',
      fontWeight: 'bold',
      fontSize: '20px'
    },
    bad: {
      color: '#e2401b'
    },
    ok: {
      color: '#fdb813'
    },
    good: {
      color: '#0db14b'
    }
  }
}

export default function AnalysisResults(props: AnalysisResultsProps) {
  const { results, assessor } = props;
  const sx = getStyles();

  if (results) {
    const resultColor = getIndicatorColor(results);

    return (
      <Box sx={sx.ratings}>
        <Typography variant="subtitle1" sx={{ ...sx.heading, ...sx[resultColor] }}>
          {props.heading} - {getIndicatorColor(results).toUpperCase()} (
          {Math.max(0, summaryScore(results))}/10)
        </Typography>
        <Presenter assessor={assessor} />
      </Box>
    );
  } else {
    return <></>
  }
}
