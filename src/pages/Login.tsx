import { Link } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import EmailOrPhoneInput from "../components/auth/EmailOrPhoneInput";
import PasswordInput from "../components/auth/PasswordInput";
import SubmitButton from "../components/auth/SubmitButton";

function Login() {
  return (
    <AuthCard
      title="Welcome Back!"
      subtitle="Login to your account"
    >
      <EmailOrPhoneInput />
      <PasswordInput />

      <div className="d-flex justify-content-end mb-3">
        <Link to="/forgetpassword" className="text-decoration-none">Forget Password</Link>
      </div>

      <SubmitButton text="Login" />

      <p className="text-center mt-3 mb-0">
        Don’t have an account?{" "}
        <Link to="/register" className="text-decoration-none">Register</Link>
      </p>
    </AuthCard>
  );
}

export default Login;
