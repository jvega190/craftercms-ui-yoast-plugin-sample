import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

interface RatingProps {
  rating: 'bad' | 'ok' | 'good';
  text: string;
  id: string;
  score: number;
}

function getStyles() {
  return {
    rating: {
      paddingLeft: '23px',
      marginBottom: '10px',
      backgroundColor: '#fff',
      position: 'relative'
    },
    ratingBar: {
      content: '""',
      display: 'block',
      width: '6px',
      height: 'calc(100% - 12px)',
      backgroundColor: '#ddd',
      position: 'absolute',
      top: '6px',
      left: '6px',
      borderRadius: '3px'
    },
    heading: {
      textTransform: 'uppercase',
      display: 'block',
      fontSize: '70%',
      marginBottom: '5px'
    },
    badColor: {
      color: '#e2401b'
    },
    okColor: {
      color: '#fdb813'
    },
    goodColor: {
      color: '#0db14b'
    },
    badBackground: {
      backgroundColor: '#ef404a'
    },
    okBackground: {
      backgroundColor: '#fdb813'
    },
    goodBackground: {
      backgroundColor: '#0db14b'
    }
  }
}

export default function Rating(props: RatingProps) {
  const { rating, score, text, id } = props;
  const sx = getStyles();

  return (
    <Card
      key={id}
      sx={sx.rating}
      variant="outlined"
    >
      <CardContent>
        <Box sx={{ ...sx.ratingBar, ...sx[`${rating}Background`] }}/>
        <Typography variant="body1" sx={{ ...sx.heading, ...sx[`${rating}Color`]}}>
          {rating} ({score}/10)
        </Typography>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: text }} />
      </CardContent>
    </Card>
  );
}
