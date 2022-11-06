import { MetarData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Barometer(props: MetarData) {
  return (
    <>
      <h4>Barometer</h4>
      <Table>
        <tbody>
          <tr>
            <td>hg</td>
            <td>{props.barometer.hg}</td>
          </tr>
          <tr>
            <td>hpa</td>
            <td>{props.barometer.hpa}</td>
          </tr>
          <tr>
            <td>kpa</td>
            <td>{props.barometer.kpa}</td>
          </tr>
          <tr>
            <td>mb</td>
            <td>{props.barometer.mb}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
