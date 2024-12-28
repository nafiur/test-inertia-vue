import * as React from "react";
import NextLink from 'next/link';     
import Details from "@/components/RealEstate/Agents/Details";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Agent Details</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Real Estate</li>
          <li>Agents</li>
          <li>Details</li>
        </ul>
      </div> 

      <Details />
    </>
  );
}