import { MetarData } from "../../types/MetarTypes";
import { Table } from "react-bootstrap";

export default function Clouds(props: MetarData) {
  if (props.clouds[0].code === "CLR") {
    return (
      <>
        <h4>Clouds</h4>
        <Table>
          <tbody>
            <tr>
              <td>Clear skies</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  } else {
    return (
      <>
        <h4>Clouds</h4>
        <Table>
          <tbody>
            {props.clouds.map((cloud) => (
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
}
