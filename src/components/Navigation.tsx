import {Link} from "react-router";

export const Navigation = () => {
  return (
    <nav
      style={{
    borderBottom: "solid 1px",
      paddingBottom: "1rem",
  }}
>
  <Link to="/home">Home</Link>
    </nav>
);
};
