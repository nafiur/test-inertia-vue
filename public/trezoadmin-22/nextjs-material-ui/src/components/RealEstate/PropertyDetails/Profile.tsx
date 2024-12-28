"use client";

import { Typography, Box } from "@mui/material";
import Image from "next/image";

const Profile: React.FC = () => {
  return (
    <>
      <Box
        className="bg-white"
        sx={{
          borderRadius: "7px",
          mb: "25px",
        }}
      >
        <Box
          style={{
            background: "linear-gradient(101deg, #FE7A36 0%, #FD5812 100%)",
          }}
          sx={{
            height: "120px",
            borderRadius: "7px 7px 0 0",
          }}
        >
          <Image
            src="/images/icons/4dot.svg"
            alt="4dot-image"
            width={64}
            height={66}
          />
        </Box>

        <Box
          sx={{
            px: { xs: "20px", md: "25px" },
            pb: { xs: "20px", md: "25px" },
            textAlign: "center",
          }}
        >
          <Image
            src="/images/users/user13.jpg"
            alt="user-image"
            width={167}
            height={167}
            style={{
              marginBottom: "10px",
              marginTop: "-83px",
              borderRadius: "100%",
              display: "inline-block",
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              mb: "3px",
            }}
          >
            Harold Cook
          </Typography>

          <Typography>Owner</Typography>

          <Box
            sx={{
              my: { xs: "15px", md: "20px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <a
              href="#"
              target="_blank"
              style={{
                display: "inline-block",
                textAlign: "center",
                borderRadius: "100%",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                color: "#fff",
                background: "#3a559f",
              }}
            >
              <i className="ri-facebook-fill"></i>
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                display: "inline-block",
                textAlign: "center",
                borderRadius: "100%",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                color: "#fff",
                background: "#03a9f4",
              }}
            >
              <i className="ri-twitter-x-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"></i>
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                display: "inline-block",
                textAlign: "center",
                borderRadius: "100%",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                color: "#fff",
                background: "#007ab9",
              }}
            >
              <i className="ri-linkedin-fill absolute left-0 right-0 top-1/2 -translate-y-1/2"></i>
            </a>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "11px",

                "&:last-child": {
                  marginBottom: 0,
                },
              }}
            >
              <Typography component={"span"} className="text-black">
                Property ID:
              </Typography>

              <Typography component={"span"}>P1001</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "11px",

                "&:last-child": {
                  marginBottom: 0,
                },
              }}
            >
              <Typography component={"span"} className="text-black">
                Year Built:
              </Typography>
              <Typography component={"span"}>2010</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "11px",

                "&:last-child": {
                  marginBottom: 0,
                },
              }}
            >
              <Typography component={"span"} className="text-black">
                Property Type:
              </Typography>
              <Typography component={"span"}>Residential</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "11px",

                "&:last-child": {
                  marginBottom: 0,
                },
              }}
            >
              <Typography component={"span"} className="text-black">
                Listing Date:
              </Typography>
              <Typography component={"span"}>Sep 15, 2024</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
