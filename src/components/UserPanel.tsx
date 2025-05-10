import {Link} from "react-router";
import { useEmail } from "../emailContext";


const UserPanel = () => {
  const { email } = useEmail();

  return (
    <div>
      <h2>Witaj w {email}</h2>
      <Link to={'/'}>Wychodze</Link>
    </div>
  );
};

export default UserPanel;
