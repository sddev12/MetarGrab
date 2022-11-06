import { MetarData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Temperature(props: MetarData) {
  return (
    <>
      <h4>Temperature</h4>
      <Table>
        <tbody>
          <tr>
            <td>Celsius</td>
            <td>{props.temperature.celsius}</td>
          </tr>
          <tr>
            <td>Fahrenheit</td>
            <td>{props.temperature.fahrenheit}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
