"use client";

import * as React from "react";
import NextLink from 'next/link';    
import { Grid } from "@mui/material"; 
import RevenueGrowth from "@/components/Widgets/RevenueGrowth";
import LeadConversion from "@/components/Widgets/LeadConversion";
import TotalOrders from "@/components/Widgets/TotalOrders";
import AnnualProfit from "@/components/Widgets/AnnualProfit";
import TicketsResolved from "@/components/Widgets/TicketsResolved";
import TicketsInProgress from "@/components/Widgets/TicketsInProgress";
import TicketsDue from "@/components/Widgets/TicketsDue";
import TicketsNewOpen from "@/components/Widgets/TicketsNewOpen";
import Welcome from "@/components/Widgets/Welcome";
import TotalCourses from "@/components/Widgets/TotalCourses";
import TotalEnrolled from "@/components/Widgets/TotalEnrolled";
import TotalMentors from "@/components/Widgets/TotalMentors";
import TotalCustomers from "@/components/Widgets/TotalCustomers";
import TotalRevenue from "@/components/Widgets/TotalRevenue";
import TopOrders from "@/components/Widgets/TopOrders";
import ProjectsOverview from "@/components/Widgets/ProjectsOverview";
import ProjectsRoadmap from "@/components/Widgets/ProjectsRoadmap";
import CoursesSales from "@/components/Widgets/CoursesSales";
import TimeSpent from "@/components/Widgets/TimeSpent";
import OurTopCourses from "@/components/Widgets/OurTopCourses";
import LeadsBySource from "@/components/Widgets/LeadsBySource";
import TeamMembers from "@/components/Widgets/TeamMembers";
import ProjectsAnalysis from "@/components/Widgets/ProjectsAnalysis";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Widgets</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Widgets</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <RevenueGrowth />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <LeadConversion />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <TotalOrders />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <AnnualProfit />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <TicketsResolved />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <TicketsInProgress />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <TicketsDue />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <TicketsNewOpen />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <Welcome />
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4} xl={2}>
          <TotalCourses />
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4} xl={2}>
          <TotalEnrolled />
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4} xl={2}>
          <TotalMentors />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <TotalCustomers />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <TotalRevenue />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <TopOrders />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <ProjectsOverview />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <ProjectsRoadmap />
        </Grid> 
      </Grid>
 
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <CoursesSales />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <TimeSpent />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <OurTopCourses />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <ProjectsAnalysis />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <TeamMembers />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <LeadsBySource />
        </Grid>
      </Grid>
    </>
  );
}
