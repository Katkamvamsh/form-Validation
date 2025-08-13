import { useState } from "react";
import "./FormValidation.css";

const Registration = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    emailId: "",
    password: "",
    ConfirmPassword: "",
    department: "",
  });
  console.log(userDetails.userName);

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const forLoginPage = () => {
    navigate("/login");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { userName, emailId, password, ConfirmPassword } = userDetails;

    let errors = {};

    if (!userName.trim()) {
      errors.usernameError = "* Username is required";
    }

    if (!emailId.trim()) {
      errors.emailError = "* Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailId)) {
        errors.emailError = "* Invalid email format";
      }
    }

    if (!password) {
      errors.passwordError = "* Password is required";
    } else {
      // Example: Minimum 6 chars, at least 1 number and 1 letter
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (!passwordRegex.test(password)) {
        errors.passwordError =
          "* Password must be at least 6 chars, include a letter and a number";
      }
    }

    if (!ConfirmPassword) {
      errors.ConfirmPasswordError = "* Confirm Password is required";
    } else if (password !== ConfirmPassword) {
      errors.ConfirmPasswordError = "* Passwords did not matched";
    }
    if (!userDetails.department) {
      errors.departmentError = "* Please select a department";
    } else if (userDetails.department !== "Others") {
      errors.departmentError = "* Please select a Valid department";
    }else if (userDetails.department === "Others"){
      errors.departmentError = "";
    }

    setError(errors);

    // Stop if there are errors
    if (Object.keys(errors).length > 0) return;

    alert("Form submitted!");
    console.log("User details:", userDetails);

    // Do your API call here if needed
    setUserDetails({
      userName: "",
      emailId: "",
      password: "",
      ConfirmPassword: "",
      department: "",
    });
  };

  return (
    <form className="registration-main-container" onSubmit={onSubmit}>
      <h1 className="form-name">SIGN UP</h1>

      <div className="registration-input-container">
        <label htmlFor="username">Username enter</label>
        <br />
        <input
          name="userName" 
          id="username"
          value={userDetails.userName}
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <p className="error">{error.usernameError}</p>
      </div>

      <div className="registration-input-container">
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="emailId"
          id="email"
          value={userDetails.emailId}
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <p className="error">{error.emailError}</p>
      </div>

      <div className="registration-input-container">
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={userDetails.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <p className="error">{error.passwordError}</p>
      </div>

      <div className="registration-input-container">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <input
          type="password"
          name="ConfirmPassword"
          id="confirmPassword"
          value={userDetails.ConfirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <p className="error">{error.ConfirmPasswordError}</p>
      </div>
      <div>
        <span>Select Department : </span>
        <select
          className="dropdown"
          name="department"
          id=""
          onChange={handleChange}
          value={userDetails.department}
        >
          <option value="Sales">Saless</option>
          <option value="Technical">Teechnical</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <p className="error">{error.departmentError}</p>
      {userDetails.department === "Others" && (
        <div className="registration-input-container">
          <label htmlFor="otherDepartment">Specify Department</label>
          <br />
          <input
            type="text"
            name="otherDepartment"
            id="otherDepartment"
            value={userDetails.otherDepartment}
            onChange={handleChange}
            placeholder="Enter Department"
          />
          <p className="error">{error.otherDepartmentError}</p>
        </div>
      )}
      <button type="submit" className="registration-button">
        Register
      </button>

      <p className="info">If already registered ? , click on below to login.</p>
      <button type="button" className="button2" onClick={forLoginPage}>
        Login Account
      </button>
    </form>
  );
};

export default Registration;
