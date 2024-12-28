import * as React from "react";
import { Grid } from "@mui/material";
import Welcome from "@/components/Dashboard/Hospital/Welcome";
import PatientAdmissionsDischarges from "@/components/Dashboard/Hospital/PatientAdmissionsDischarges";
import OverallVisitors from "@/components/Dashboard/Hospital/OverallVisitors";
import PatientsLast7Days from "@/components/Dashboard/Hospital/PatientsLast7Days";
import EmergencyRoomVisits from "@/components/Dashboard/Hospital/EmergencyRoomVisits";
import CriticalPatients from "@/components/Dashboard/Hospital/CriticalPatients";
import BedOccupancyRate from "@/components/Dashboard/Hospital/BedOccupancyRate";
import PatientAppointments from "@/components/Dashboard/Hospital/PatientAppointments";
import ScheduleAppointment from "@/components/Dashboard/Hospital/ScheduleAppointment";
import PatientByAge from "@/components/Dashboard/Hospital/PatientByAge";
import HospitalEarnings from "@/components/Dashboard/Hospital/HospitalEarnings";

export default function Page() {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
          
          <Welcome />

          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <OverallVisitors />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <PatientsLast7Days />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
          <PatientAdmissionsDischarges />
        </Grid>
      </Grid>
 
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={5}>
          <EmergencyRoomVisits />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={2}>
          <CriticalPatients />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={5}>
          <BedOccupancyRate />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
          <PatientAppointments />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
          <ScheduleAppointment />
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
          <PatientByAge />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
          <HospitalEarnings />
        </Grid> 
      </Grid>
 
    </>
  );
}
