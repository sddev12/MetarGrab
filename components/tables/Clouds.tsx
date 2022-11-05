import { Cloud } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Clouds(props: Cloud[]) {
  const arr = Object.values(props);

  return (
    <>
      <h4>Clouds</h4>
      <Table>
        <tbody>
          {arr.map((cloud) => (
            <tr key={cloud.feet}>
              <td>
                {cloud.text} clouds at {cloud.feet} ft
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
