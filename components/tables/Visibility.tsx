import { MetarData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Visibility(props: MetarData) {
  return (
    <>
      <h4>Visibility</h4>
      <Table>
        <tbody>
          <tr>
            <td>Meters</td>
            <td>{props.visibility.meters}</td>
          </tr>
          <tr>
            <td>Miles</td>
            <td>{props.visibility.miles}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
