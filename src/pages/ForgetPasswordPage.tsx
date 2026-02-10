import { Link } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import PasswordInput from "../components/auth/PasswordInput";
import RetypePassword from "../components/auth/RetypePassword";
import SubmitButton from "../components/auth/SubmitButton";

function ForgetPasswordPage() {
  return (
    <div>
      {/* Back icon on page background */}
      <Link
        to="/login"
        className="position-absolute top-0 start-0 m-4 pl-80 fs-2 text-success"
      >
        <i className="bi bi-arrow-left-square-fill"></i>
      </Link>

      <AuthCard title="Forget Password" subtitle="Enter your New Password">
        <PasswordInput />
        <RetypePassword />
        <div className="mt-4">
          <SubmitButton text="Next"></SubmitButton>
        </div>
        <div className="d-flex justify-content-center mb-3 mt-3">
          <p>If you remember your Password?</p>
          <Link to="/login" className="ml-1 text-decoration-none">
            {" "}
            log in
          </Link>
        </div>
      </AuthCard>
    </div>
  );
}

export default ForgetPasswordPage;
