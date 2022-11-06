import { MetarData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Elevation(props: MetarData) {
  return (
    <>
      <h4>Elevation</h4>
      <Table>
        <tbody>
          <tr>
            <td>Feet</td>
            <td>{props.elevation.feet}</td>
          </tr>
          <tr>
            <td>Meters</td>
            <td>{props.elevation.meters}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
