import { WindData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Wind(props: WindData) {
  return (
    <>
      <h4>Wind</h4>
      <Table>
        <tbody>
          <tr>
            <td>Direction</td>
            <td>{props.degrees}</td>
          </tr>
          <tr>
            <td>Speed kts</td>
            <td>{props.speed}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
