import { Container, Grid } from '@mui/material';
import React from 'react';
import Title from "../Title";
import ReviewsItem from './ReviewsItem';
import ReviewsData from "./ReviewsData";

const Reviews = () => {
  return (
    <Grid component="section" container>
      <Container maxWidth="lg">
        <Title title="Польза от использования CRM " subTitle="которую отметили участники в ходе CustDev исследования" left={true} />
        <Grid container spacing="18px" sx={{
          pt: {xs: "24px", lg: "40px"}
        }}>
          {
            ReviewsData.map((item, index) => {
              return (

                <Grid key={index} item xs={12} md={6} lg={4}>
                  <ReviewsItem name={item.name} specialization={item.specialization} rating={item.rating} text={item.text} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Grid>
  );
};

export default Reviews;