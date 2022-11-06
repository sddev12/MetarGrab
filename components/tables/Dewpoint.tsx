import { MetarData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Dewpoint(props: MetarData) {
  return (
    <>
      <h4>Dewpoint</h4>
      <Table>
        <tbody>
          <tr>
            <td>Celsius</td>
            <td>{props.dewpoint.celsius}</td>
          </tr>
          <tr>
            <td>Fahrenheit</td>
            <td>{props.dewpoint.fahrenheit}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
