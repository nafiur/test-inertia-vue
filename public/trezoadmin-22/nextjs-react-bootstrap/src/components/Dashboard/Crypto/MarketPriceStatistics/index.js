"use client";

import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown, Card } from "react-bootstrap";
import Image from "next/image";

const MarketPriceStatistics = () => {
  const [Chart, setChart] = useState();
  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "Price",
      data: [
        {
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33],
        },
        {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11],
        },
        {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65],
        },
        {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24],
        },
        {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47],
        },
        {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31],
        },
        {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02],
        },
        {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02],
        },
        {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
        {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4],
        },
        {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81],
        },
        {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578],
        },
        {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579],
        },
        {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96],
        },
        {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92],
        },
        {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22],
        },
        {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08],
        },
        {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25],
        },
        {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97],
        },
        {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602],
        },
        {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95],
        },
        {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02],
        },
        {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591],
        },
        {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592],
        },
        {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34],
        },
        {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86],
        },
        {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01],
        },
        {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25],
        },
        {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99],
        },
        {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81],
        },
        {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96],
        },
        {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39],
        },
        {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27],
        },
        {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55],
        },
        {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02],
        },
        {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01],
        },
        {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06],
        },
        {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89],
        },
        {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5],
        },
        {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86],
        },
        {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07],
        },
        {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606],
        },
      ],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#EE3E08",
          downward: "#4936F5",
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    xaxis: {
      type: "datetime",
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: true,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        show: true,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    grid: {
      show: true,
      borderColor: "#ECEEF2",
    },
  };

  return (
    <>
      <Card className="border bg-white rounded-3 mb-4 p-0">
        <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-4 border-bottom p-3 px-4">
          <div>
            <h3 className="mb-0">Market Price Statistics</h3>
          </div>

          <div className="d-sm-flex align-items-center gap-4">
            <div>
              <ul className="analytics-tabs d-flex list-unstyled ps-0 mb-0">
                <li>
                  <button>1H</button>
                </li>
                <li>
                  <button>24H</button>
                </li>
                <li>
                  <button className="active">1W</button>
                </li>
                <li>
                  <button>1M</button>
                </li>
                <li>
                  <button>1Y</button>
                </li>
              </ul>
            </div>

            <Dropdown className="action-opt">
              <Dropdown.Toggle className="btn bg-transparent p-0 d-flex align-items-center gap-1">
                <Image
                  src="/images/cardano.png"
                  alt="cardano"
                  width={24}
                  height={24}
                />
                <span className="fs-14 fw-semibold text-secondary ms-1">
                  Bitcoin
                </span>
                <span className="material-symbols-outlined fs-20">
                  keyboard_arrow_down
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-white border box-shadow">
                <Dropdown.Item className="text-secondary" href="#">
                  <Image
                    src="/images/ethereum.png"
                    alt="ethereum"
                    width={24}
                    height={24}
                  />
                  <span className="ms-1">Ethereum (BTC)</span>
                </Dropdown.Item>

                <Dropdown.Item className="text-secondary" href="#">
                  <Image
                    src="/images/solana.png"
                    alt="solana"
                    width={24}
                    height={24}
                  />
                  <span className="ms-1">Solana (SOL)</span>
                </Dropdown.Item>

                <Dropdown.Item className="text-secondary" href="#">
                  <Image
                    src="/images/binance.png"
                    alt="binance"
                    width={24}
                    height={24}
                  />
                  <span className="ms-1">Binance (BNB)</span>
                </Dropdown.Item>

                <Dropdown.Item className="text-secondary" href="#">
                  <Image
                    src="/images/bitcoin.png"
                    alt="binance"
                    width={24}
                    height={24}
                  />
                  <span className="ms-1">Cardano (ADA)</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="p-4 pt-0">
          <Row className="align-items-center">
            <Col sm={10} xxl={8}>
              <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/cardano.png"
                      className="rounded-circle"
                      alt="cardano"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <span className="mb-1 d-block fw-medium text-secondary">
                      BITCOIN <span className="text-body fw-normal">(BTC)</span>
                    </span>
                    <div className="d-flex">
                      <h3 className="mb-0 fs-20 fw-semibold me-1">$27,500</h3>
                      <span className="material-symbols-outlined fs-16 position-relative top-3 text-success">
                        trending_up
                      </span>
                      <span className="text-success">+2.3%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="fs-14 fw-medium d-block mb-1">
                    Market Cap:
                  </span>
                  <h4 className="fs-14 fw-semibold mb-0">$520B</h4>
                </div>
                <div>
                  <span className="fs-14 fw-medium d-block mb-1">
                    Volume (24h):
                  </span>
                  <h4 className="fs-14 fw-semibold mb-0">$35B</h4>
                </div>
              </div>
            </Col>

            <Col sm={2} xxl={4}>
              <div className="d-flex justify-content-end mt-3 mt-sm-0">
                <Dropdown className="action-opt">
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className="bg-transparent p-0"
                  >
                    <span className="material-symbols-outlined fs-22">
                      more_vert
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white border box-shadow">
                    <Dropdown.Item href="#">
                      <span className="material-symbols-outlined fs-16">
                        schedule
                      </span>
                      Today
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <span className="material-symbols-outlined fs-16">
                        pie_chart
                      </span>
                      Last 7 Days
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <span className="material-symbols-outlined fs-16">
                        refresh
                      </span>
                      Last Month
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <span className="material-symbols-outlined fs-16">
                        calendar_month
                      </span>
                      Last 1 Year
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <span className="material-symbols-outlined fs-16">
                        bar_chart
                      </span>
                      All Time
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <span className="material-symbols-outlined fs-16">
                        visibility
                      </span>
                      View
                    </Dropdown.Item>

                    <Dropdown.Item href="#">
                      <span className="material-symbols-outlined fs-16">
                        delete
                      </span>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>

        <div className="p-4 pt-0" style={{ margin: "-9px 0 -20px -18px" }}>
          {Chart && (
            <Chart
              options={options}
              series={series}
              type="candlestick"
              height={345}
            />
          )}
        </div>
      </Card>
    </>
  );
};

export default MarketPriceStatistics;