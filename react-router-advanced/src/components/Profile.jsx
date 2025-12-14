import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>

      <nav>
        <Link to="details">Details</Link>
        <br />
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Profile;
