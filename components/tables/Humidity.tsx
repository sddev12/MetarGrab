import { HumidityData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Humidity(props: HumidityData) {
  return (
    <>
      <h4>Humidity</h4>
      <Table>
        <tbody>
          <tr>
            <td>Percent</td>
            <td>{props.percent}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
