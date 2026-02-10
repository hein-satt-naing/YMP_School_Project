function EmailOrPhoneInput() {

  return (
    <div className="mb-3">
      <label className="form-label">Email or Phone</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter email or phone number"
      />
    </div>
  );
}

export default EmailOrPhoneInput;
