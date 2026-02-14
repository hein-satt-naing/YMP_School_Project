type ProfIleSettingsProps = {
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
};

function ProfileSettings({userName,userEmail,userPhoneNumber,}: ProfIleSettingsProps) {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-end align-items-center">
        <div
          className="card shadow p-4 justify-content-start"
          style={{ width: "800px", height: "500px" }}
        >
          <div className="d-flex justify-content-between mb-3">
            <p className="mb-0 fw-bold">Update Profile</p>
            <p className="mb-0 text-primary" style={{ cursor: "pointer" }}>
              Back to Dashboard
            </p>
          </div>
          <div>{userName}</div>
          <div>{userEmail}</div>
          <div>{userPhoneNumber}</div>
        </div>
      </div>
    </>
  );
}
export default ProfileSettings;
