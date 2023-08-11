import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/" rel="noopener noreferrer">
      <PageHeader title="NFT Mint" subTitle="" style={{ cursor: "pointer", backgroundColor: 'lightBlue' }}/>
    </a>
  );
}
