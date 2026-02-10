import { Link } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import EmailOrPhoneInput from "../components/auth/EmailOrPhoneInput";
import PasswordInput from "../components/auth/PasswordInput";
import RegisteredName from "../components/auth/RegisteredName";
import RetypePassword from "../components/auth/RetypePassword";
import SubmitButton from "../components/auth/SubmitButton";

function Register() {
  return <AuthCard 
  title="Register" 
  subtitle="Create your account"
  >
    <RegisteredName />
    <EmailOrPhoneInput />
    <PasswordInput />
    <RetypePassword />

    <div className="d-flex justify-content-end mb-3">
        <Link to="/login" className="text-decoration-none mt-3">
        Do you have an accuount? Log in here
        </Link>
    </div>

    <SubmitButton text="Sign up" />

  </AuthCard>;
}

export default Register;