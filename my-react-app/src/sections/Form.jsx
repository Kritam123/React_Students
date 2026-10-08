import React from "react";
import Input from "../Components/Form/Input";
// import "./Form.css";
const RegisterForm = () => {
  const [fromData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
};
const handleSubmit = (e) => {
  e.preventDefault();
  fetch("https://api.example.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fromData),
  });
//   api call to send the data to the server or perform any other action with the form data
}
  return (
    <>
      <form className={"form"} onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div className="container">
          <Input onChange={handleChange} value={fromData.firstname} id={"firstname"} label={"First Name"} type={"text"} />
          <Input onChange={handleChange} value={fromData.lastname} id={"lastname"} label={"Last Name"} type={"text"} />
          <Input onChange={handleChange} value={fromData.email} id={"email"} label={"Email"} type={"email"} />
          <Input onChange={handleChange} value={fromData.password} id={"password"} label={"Password"} type={"password"} />
        </div>
        <input className={"button"} id={"submit"} type={"submit"} />
      </form>
    </>
  );
};

export default RegisterForm;
