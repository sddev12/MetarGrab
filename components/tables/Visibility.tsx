import { VisibilityData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Visibility(props: VisibilityData) {
  return (
    <>
      <h4>Visibility</h4>
      <Table>
        <tbody>
          <tr>
            <td>Meters</td>
            <td>{props.meters}</td>
          </tr>
          <tr>
            <td>Miles</td>
            <td>{props.miles}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
