import { ElevationData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Elevation(props: ElevationData) {
  return (
    <>
      <h4>Elevation</h4>
      <Table>
        <tbody>
          <tr>
            <td>Feet</td>
            <td>{props.feet}</td>
          </tr>
          <tr>
            <td>Meters</td>
            <td>{props.meters}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
