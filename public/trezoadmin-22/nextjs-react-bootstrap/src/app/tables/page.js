"use client";
   
import { Row, Col, Breadcrumb } from "react-bootstrap"; 
import RecentOrders from "@/components/Tables/BasicTable/RecentOrders";
import TopPerformer from "@/components/Tables/BasicTable/TopPerformer";
import RecentLeads from "@/components/Tables/BasicTable/RecentLeads";
import AllProjects from "@/components/Tables/BasicTable/AllProjects";
import MyTasks from "@/components/Tables/BasicTable/MyTasks";
import StudentsProgress from "@/components/Tables/BasicTable/StudentsProgress";
import GroupLessons from "@/components/Tables/BasicTable/GroupLessons";
import PerformanceOfAgents from "@/components/Tables/BasicTable/PerformanceOfAgents";
import RecentCustomerRatings from "@/components/Tables/BasicTable/RecentCustomerRatings";
import ToDoList from "@/components/Tables/BasicTable/ToDoList";
import TopSellingProducts from "@/components/Tables/BasicTable/TopSellingProducts";

export default function Page() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h3 className="mb-0">Basic Table</h3>
 
        <Breadcrumb className="breadcrumb-page-list align-items-center mb-0 lh-1">
          <Breadcrumb.Item href="/dashboard/ecommerce/">
            <div className="d-flex align-items-center text-decoration-none">
              <i className="ri-home-4-line fs-18 text-primary me-1"></i>
              <span className="text-secondary fw-medium hover">Dashboard</span>
            </div>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <span className="fw-medium">Tables</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>
            <span className="fw-medium">Basic Table</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Row>
        <Col xl={6}>
          <TopSellingProducts />
        </Col>

        <Col xl={6}>
          <RecentOrders />
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
          <TopPerformer />
        </Col>

        <Col lg={8}>
          <RecentLeads />
        </Col>
      </Row>

      <AllProjects />

      <Row>
        <Col xl={6} xxl={4}>
          <MyTasks />
        </Col>

        <Col xl={6} xxl={4}>
          <StudentsProgress />
        </Col>

        <Col xl={6} xxl={4}>
          <GroupLessons />
        </Col>
      </Row>
      
      <PerformanceOfAgents />

      <Row>
        <Col xl={5}>
          <RecentCustomerRatings />
        </Col>

        <Col xl={7}>
          <ToDoList />
        </Col>
      </Row>
    </>
  );
}
