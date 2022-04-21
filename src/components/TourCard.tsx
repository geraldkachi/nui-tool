import * as React from 'react';
import { Box, Paper, Grid, Typography, Rating, createTheme } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11
                    }
                }
            ]
        }
    }
})


const TourCard = ({ tour }: any) => {
    return (
      <Grid item xs={4} md={3}>
        <ThemeProvider theme={theme}>
          <Paper elevation={3} className="paper">
            <img src={tour.image} alt="" className="img" />
            <Box
              sx={{
                paddingX: 1,
              }}
            >
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AccessTime style={{ width: 12.5 }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.duration} hours
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                marginTop={3}
              >
                <Rating
                  name="size-small"
                  size="small"
                  defaultValue={tour.rating}
                  precision={0.25}
                  readOnly
                />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                  {tour.rating}
                </Typography>
                <Typography variant="body2" component="p" marginLeft={1.5}>
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Typography variant="h6" component="h2" marginTop={0}>
                  From C ${tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      </Grid>
    );
  }

export default TourCard