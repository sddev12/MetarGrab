import React, { useState } from "react";
import axios from "axios";
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
import Visibility from "../components/tables/Visibility";
import Wind from "../components/tables/Wind";
import { MetarData } from "../types/MetarTypes";
import { createNoSubstitutionTemplateLiteral } from "typescript";

// import data from "../data.json";

export default function Home() {
  const [icaoInput, setIcaoInput] = useState("");
  const [data, setData] = useState<MetarData | null>(null);

  function icaoHandler(event: any) {
    event.preventDefault();

    axios
      .post("/api/getmetar", {
        icao: icaoInput,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <NavBar />
      <Container className="pt-4">
        <Row>
          <h4></h4>
          <IcaoInput
            clickHandler={icaoHandler}
            label={"Submit"}
            setIcaoInput={setIcaoInput}
          />
        </Row>

        {data ? (
          <div>
            <ApInfo {...data} />

            <Row>
              <Col sm={12} lg={6} className="p-3 mb-3">
                <Barometer {...data} />
              </Col>
              <Col sm={12} lg={6} className="p-3 mb-3">
                <Clouds {...data} />
              </Col>
            </Row>

            <Row>
              <Col sm={12} lg={6} className="p-3 mb-3">
                <Dewpoint {...data} />
              </Col>
              <Col sm={12} lg={6} className="p-3 mb-3">
                <Elevation {...data} />
              </Col>
            </Row>

            <Row>
              <Col sm={12} lg={6} className="p-3 mb-3">
                <Temperature {...data} />
              </Col>
              <Col sm={12} lg={6} className="p-3 mb-3">
                <Humidity {...data} />
              </Col>
            </Row>

            <Row>
              <Col sm={12} lg={6} className="p-3 mb-3">
                <Visibility {...data} />
              </Col>
              <Col sm={12} lg={6} className="p-3 mb-3">
                <Wind {...data} />
              </Col>
            </Row>
          </div>
        ) : (
          <div></div>
        )}
      </Container>
    </>
  );
}
