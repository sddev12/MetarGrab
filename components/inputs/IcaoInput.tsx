import styles from "./IcaoInput.module.css";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import IcaoButton from "../buttons/IcaoButton";

export default function IcaoInput({clickHandler, label, setIcaoInput}: any) {

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIcaoInput(e.target.value)
  }

  return (
    <>
      <div className="w-50 mt-3 mb-3">
        <Row className="g-3">
          <Col>
            <Form.Control
              type="text"
              className={styles.icaoInput}
              placeholder="ICAO"
              onChange={onInputChange}
            ></Form.Control>
          </Col>
          <Col>
            <IcaoButton
              clickHandler={clickHandler}
              label={label}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
