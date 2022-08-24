import React from "react";
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
const Card0230 = () => {
  return (
    <Box
      style={{
        border: "1px solid black",
        width: "100%",
        height: "auto",
        borderRadius: "10px",
      }}
    >
      <VStack direction="column" width="100%" style={{ padding: "15px" }}>
        <Stack width="98%" display="flex" style={{ marginBottom: "20px" }}>
          <span style={{ fontWeight: "bold" }}>Today, 5:30 PM &#x2022;</span>
          <span>T20 &#x2022; Dubai</span>
        </Stack>
        <HStack style={{ borderBottom: "1px solid black" }}>
          <HStack
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              //   border: "1px solid green",
            }}
          >
            <HStack
              style={{
                width: "auto",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
                gap: "20px",
              }}
            >
              <img
                src="ind.png"
                alt="coun1"
                style={{ height: "20px", width: "20px" }}
              />
              <span>India [Ind]</span>
            </HStack>
            <HStack
              style={{
                width: "65%",
                // border: "1px solid black",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <b>227/3</b>
            </HStack>
          </HStack>
          <HStack
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              //   border: "1px solid green",
            }}
          >
            <HStack
              style={{
                width: "auto",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313144.logo.png"
                alt="coun2"
                style={{ height: "20px", width: "20px" }}
              />
              <span>Australia [AUS]</span>
            </HStack>
            <HStack
              style={{
                width: "65%",
                // border: "1px solid black",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <b>188/10</b>
            </HStack>
          </HStack>
          <Text color="black">India won by 39 runs</Text>
        </HStack>
        <HStack
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <a href="#">Shedule</a>
          <a href="#">Table</a>
          <a href="#">Report</a>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card0230;
