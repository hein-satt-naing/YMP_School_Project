import { Link } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import EmailOrPhoneInput from "../components/auth/EmailOrPhoneInput";
import PasswordInput from "../components/auth/PasswordInput";
import RegisteredName from "../components/auth/RegisteredName";
import RetypePassword from "../components/auth/RetypePassword";
import SubmitButton from "../components/auth/SubmitButton";

function Register() {
  return (
    <div className="position-relative min-vh-100 d-flex justify-content-center align-items-center">

      {/* Back icon on page background */}
      <Link
        to="/login"
        className="position-absolute top-0 start-0 m-4 pl-80 fs-2 text-success"
      >
        <i className="bi bi-arrow-left-square-fill"></i>
      </Link>

      <AuthCard
        title="Register"
        subtitle="Create your account"
      >
        <RegisteredName />
        <EmailOrPhoneInput />
        <PasswordInput />
        <RetypePassword />

        <div className="d-flex justify-content-end mb-3">
          <Link to="/login" className="text-decoration-none mt-3">
            Do you have an account? Log in here
          </Link>
        </div>

        <SubmitButton text="Sign up" />
      </AuthCard>

    </div>
  );
}
export default Register;
