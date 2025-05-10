import {Link} from "react-router";
import { useEmail } from "../emailContext";

export const LoginForm = () => {

  const {
    label,
    email,
    handleChange
} = useEmail();

  return (
    <div>
      <>
        <h2>Twój e-mail to {email}</h2>
        {label.length > 0  && (<p>{label}</p>)}
        <input type="text" value={email} onChange={handleChange}/>
        <Link to='/welcome'>Wchodzę</Link>

      </>
    </div>
  );
};
