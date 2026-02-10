import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

//Typescript need to defind types so we need to declare types first, or else we wil get an errors
function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-2">{title}</h3>
        <p className="text-center text-muted mb-4">{subtitle}</p>

        {children}
      </div>
    </div>
  );
}

export default AuthCard;
