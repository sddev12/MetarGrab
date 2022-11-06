import { MetarData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Humidity(props: MetarData) {
  return (
    <>
      <h4>Humidity</h4>
      <Table>
        <tbody>
          <tr>
            <td>Percent</td>
            <td>{props.humidity.percent}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
