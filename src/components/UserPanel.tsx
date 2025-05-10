import {Link} from "react-router";
import { useEmail } from "../emailContext";
import {MeetingsPage} from "./meetings/MeetingsPage.tsx";


const UserPanel = () => {
  const { email } = useEmail();

  return (
    <div>
      <h2>Witaj w {email}</h2>
      <Link to={'/'}>Wychodze</Link>
      <MeetingsPage/>
    </div>
  );
};

export default UserPanel;
