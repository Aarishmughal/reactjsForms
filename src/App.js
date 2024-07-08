import { useState } from "react";
import "./App.css";

function App() {
  // const [input1, setInput1] = useState("");
  // const [input2, setInput2] = useState("");
  // const [input3, setInput3] = useState("");
  // const [input4, setInput4] = useState("");
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const changeHandler = (e) =>{
    const { name, value } = e.target;
    setInputs(prevState =>({
      ...prevState,
      [name]:value
    }));
  }

  const submitHandler = (event) => {
    event.preventDefault();
    return alert(
      "First Name: " +
        inputs.input1 +
        "\n" +
        "Seoncd Name: " +
        inputs.input2 +
        "\n" +
        "Third Name: " +
        inputs.input3 +
        "\n" +
        "Fourth Name: " +
        inputs.input4 +
        "\n"
    );
  };
  return (
    <div className="container">
      <div className="row d-flex content-align-center align-items-center vh-100">
        <div className="col-lg"></div>
        <div className="col-lg">
          <div className="card p-3">
            <div className="row">
              <div className="col">
                <h1 className="display-1">TestForm</h1>
                <hr />
              </div>
            </div>
            <form onSubmit={submitHandler}>
              <div className="row mb-2">
                <div className="col">
                  <label for="input1" className="form-text">
                    Enter Name
                  </label>
                  <input
                    className="form-control"
                    id="input1"
                    name="input1"
                    type="text"
                    onChange = {changeHandler}
                    value={inputs.input1}
                    // onChange={(e) => setInput1(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <label for="input2" className="form-text">
                    Enter Second Name
                  </label>
                  <input
                    className="form-control"
                    id="input2"
                    name="input2"
                    type="text"
                    onChange = {changeHandler}
                    value={inputs.input2}
                    // onChange={(e) => setInput2(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <label for="input3" className="form-text">
                    Enter Third Name
                  </label>
                  <input
                    className="form-control"
                    id="input3"
                    name="input3"
                    type="text"
                    onChange = {changeHandler}
                    value={inputs.input2}
                    // onChange={(e) => setInput3(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <label for="input4" className="form-text">
                    Enter Fourth Name
                  </label>
                  <input
                    className="form-control"
                    id="input4"
                    name="input4"
                    type="text"
                    onChange = {changeHandler}
                    value={inputs.input1}
                    // onChange={(e) => setInput4(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg"></div>
      </div>
    </div>
  );
}

export default App;
