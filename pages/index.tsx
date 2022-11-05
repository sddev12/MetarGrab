import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import NavBar from "../components/nav/NavBar";
import IcaoInput from "../components/inputs/IcaoInput";
import ApInfo from "../components/tables/ApInfo";
import Barometer from "../components/tables/Barometer";
import Clouds from "../components/tables/Clouds";
import Dewpoint from "../components/tables/Dewpoint";
import Elevation from "../components/tables/Elevation";
import Temperature from "../components/tables/Temperature";
import Humidity from "../components/tables/Humidity";
import { AirportInfo, BarometerData, Cloud, DewpointData, ElevationData, HumidityData } from '../types/MetarTypes'

import data from '../data.json'



export default function Home() {

  const ApData: AirportInfo = {
    icao: data.icao,
    observed: data.observed,
    rawText: data.raw_text,
    name: data.station.name,
    location: data.station.location
  }

  const BaroData: BarometerData = {
    hg: data.barometer.hg,
    hpa: data.barometer.hpa,
    kpa: data.barometer.kpa,
    mb: data.barometer.mb
  }

  const CloudsData: Cloud[] = data.clouds

  const DewData: DewpointData = {
    celsuis: data.dewpoint.celsius,
    fahrenheit: data.dewpoint.fahrenheit
  }

  const ElevData: ElevationData = {
    feet: data.elevation.feet,
    meters: data.elevation.meters
  }

  const TempData: DewpointData = {
    celsuis: data.temperature.celsius,
    fahrenheit: data.temperature.fahrenheit
  }

  const HumidData: HumidityData = {
    percent: data.humidity.percent
  }



  return (
    <>
      <NavBar />
      <Container className="pt-4">
        <Row>
          <h4>Enter airport ICAO</h4>
          <IcaoInput />
        </Row>

        <ApInfo {...ApData}/>

        <Row>
          <Col sm={12} lg={6} className="p-3 mb-3">
            <Barometer {...BaroData}/>
          </Col>
          <Col sm={12} lg={6} className="p-3 mb-3">
            <Clouds {...CloudsData}/>
          </Col>
        </Row>

        <Row>
          <Col sm={12} lg={6} className="p-3 mb-3">
            <Dewpoint {...DewData}/>
          </Col>
          <Col sm={12} lg={6} className="p-3 mb-3">
            <Elevation {...ElevData}/>
          </Col>
        </Row>

        <Row>
          <Col sm={12} lg={6} className="p-3 mb-3">
            <Temperature {...TempData}/>
          </Col>
          <Col sm={12} lg={6} className="p-3 mb-3">
            <Humidity {...HumidData}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
