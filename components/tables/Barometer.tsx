import { BarometerData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Barometer(props: BarometerData) {
  return (
    <>
      <h4>Barometer</h4>
      <Table>
        <tbody>
          <tr>
            <td>hg</td>
            <td>29.94</td>
          </tr>
          <tr>
            <td>hpa</td>
            <td>1014</td>
          </tr>
          <tr>
            <td>kpa</td>
            <td>101.39</td>
          </tr>
          <tr>
            <td>mb</td>
            <td>1013.92</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
