import { DewpointData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Temperature(props: DewpointData) {
  return (
    <>
      <h4>Temperature</h4>
      <Table>
        <tbody>
          <tr>
            <td>Celsius</td>
            <td>{props.celsuis}</td>
          </tr>
          <tr>
            <td>Fahrenheit</td>
            <td>{props.fahrenheit}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
