import React from "react";
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import "./CSS/card0230.css";
const Card = () => {
  return (
    <Box className="parent-box">
      <VStack className="parent-vsatack">
        <Stack className="stak-spantag">
          <span className="bold-span">Today, 5:30 PM &#x2022;</span>
          <span>T20 &#x2022; Dubai</span>
        </Stack>
        <HStack className="parent-hstack">
          <HStack className="child1-hstack">
            <HStack className="grand-child1-hstack">
              <img src="ind.png" alt="coun1" />
              <span>India [Ind]</span>
            </HStack>
            <HStack className="grand-child2-hstack">
              <b>227/3</b>
            </HStack>
          </HStack>
          <HStack className="child2-hstack">
            <HStack className="grand-child3-hstack">
              <img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313144.logo.png"
                alt="coun2"
              />
              <span>Australia [AUS]</span>
            </HStack>
            <HStack className="grand-child4-hstack">
              <b>188/10</b>
            </HStack>
          </HStack>
          <Text color="black">India won by 39 runs</Text>
        </HStack>
        <HStack className="parent-bro-hstack">
          <a href="#">Shedule</a>
          <a href="#">Table</a>
          <a href="#">Report</a>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
