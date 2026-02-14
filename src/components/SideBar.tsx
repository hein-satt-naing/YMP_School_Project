function Sidebar() {
  return (
    <div
      className="d-flex flex-column bg-light vh-100 shadow-sm"
      style={{ width: "250px",  backgroundColor: "#f8f9fa" }}
    >
      {/* Header */}
      <div className="bg-success text-white p-3">
        <h4 className="fw-bold mb-0">MyBlog</h4>
      </div>

      {/* Menu */}
      <ul className="nav nav-pills flex-column">

        <li className="nav-item">
          <div className="d-flex justify-content-start align-items-center">
            <i className="bi bi-house-door-fill ml-3"></i>
          <a href="#" className="nav-link text-dark">
            Dashboard
          </a>
          </div>
        </li>

        <li>
          <div className="d-flex jsutify-content-start align-items-center">
            <i className="bi bi-pencil-fill ml-3"></i>
            <a href="#" className="nav-link text-dark">
            My Posts
          </a>
          </div>
        </li>

        <li>
          <div className="d-flex jsutify-content-start align-items-center"> 
            <i className="bi bi-plus-lg ml-3"></i>
            <a href="#" className="nav-link text-dark">
            Create Post
          </a>
          </div>
        </li>

        <li>
          <div className="">
            <i className="bi bi-chat-square-fill ml-3"></i>
            <a href="#" className="nav-link text-dark">
            Comments
          </a>
          </div>
        </li>

        <li>
          <a href="#" className="nav-link text-dark">
            Liked Posts
          </a>
        </li>

        <li>
          <a href="#" className="nav-link text-dark">
            Profile Settings
          </a>
        </li>

        <li>
          <a href="#" className="nav-link text-dark">
            Change Password
          </a>
        </li>

        <li className="mt-3">
          <a href="#" className="nav-link text-danger">
            Logout
          </a>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;