import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FooterMenuItem = ({ href, title }) => {
  return (
    <Link href={href}>
      <Typography
        variant="span"
        sx={{
          display: "inline-block",
          fontSize: { xs: "14px", md: "18px" },
          lineHeight: { xs: "18px", md: "25px" },
          color: "#16192C80",
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default FooterMenuItem;