import styles from './IcaoBuitton.module.css'
import { Button } from "react-bootstrap";

export default function IcaoButton({label, clickHandler}: any) {
  return (
    <>
      <Button type="button" variant="dark" className="border border-0 border-radius-none rounded-0 IcaoButton" onClick={clickHandler}>
        {label}
      </Button>
    </>
  );
}
