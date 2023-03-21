
// import React, { useState, useEffect } from "react";
// // import "./Login.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import axios from "axios";


// import { Col, Container, Row } from "react-bootstrap";



// export const LoginPage = () => {

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//     const [user, setUser] = useState({
//     email: "",
//     password: ""
//   })

//   const [userError, setUserError] = useState({
//     emailError: "",
//     passwordError: "",
//     empty: "",
//     wrongCredentials: ""
//   })

//   let body = {
//     email: user.email,
//     password: user.password
//   }

//   const userLogin = async (body) => {
//     let res = await axios.post(
//       "https://3000/auth/login",
//       body
//     );

//     let jwt = res.data.jwt;
//     let credentials = {
//       token: jwt,
//     };

//     localStorage.setItem("jwt", credentials.token);
//     navigate("/");
//   };

//   const validateBody = (body) => {
//     if (body.email !== "" && body.password !== "") { return true }
//   }

//   const submitLogin = (e) => {
//     e.preventDefault();
//     if (validateBody(body)) {
//       userLogin(body)
//         .then((created) => console.log(created))
//         .catch((error) => {
//           setUserError((prevState) => ({
//             ...prevState,
//             wrongCredentials: error.response.data.message,
//           }));
//         });
//     } else {
//       setUserError((prevState) => ({
//         ...prevState,
//         empty: "Check all fields are filled"
//       }))
//     }
//   }

//   const inputHandler = (e) => {
//     setUser((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value
//     }))
//   }

//   const errorHandler = (field, value, type, password) => {
//     let error = "";
//     error = errorCheck(value, type, password);
//     setUserError((prevState) => ({
//       ...prevState,
//       [field + "Error"]: error
//     }))
//   }

//   return (

//     <form
//       onSubmit={(e) => submitLogin(e)}
//       className="container-fluid loginDesign d-flex justify-content-center align-items-center"
//     >
//       <Container>
//         <Row className="row align-items-center justify-content-center">
//           <Col className="col-md-4 imagesLog">
        

//           </Col>

//           <Col className="col-9  col-lg-4 d-flex justify-content-center text-center align-items-center" id="inputsBox">

//             <div>{userError.empty}</div>
//             <div>{userError.wrongCredentials}</div>
//             {/* <h3 className="loginText">LOG IN </h3> */}
//             <br />

//             <input
//               className="inputtDesign"
//               type="email"
//               name="email"
//               placeholder="  Email ... |"
//               onChange={(e) => inputHandler(e)}
//               onBlur={(e) =>
//                 errorHandler(e.target.name, e.target.value, "email")
//               }
//             />
//             <div className="errorInput">{userError.emailError}</div>


//             <input
//               className="inputtDesign"
//               type="password"
//               name="password"
//               placeholder="  Password ... |"
//               onChange={(e) => inputHandler(e)}
//               onBlur={(e) =>
//                 errorHandler(e.target.name, e.target.value, "password")
//               }
//             />
//             <div className="errorInput">{userError.passwordError}</div>


//             <div className="col text-center align-items-center">

//               <button className="buttonDesign">Log In</button>

//             </div>
//           </Col>

//           <Col className="col-md-4 imagesLog">
         

//           </Col>
          
//         </Row>
//       </Container>
//     </form>


//   )
// }


import React, { useState, useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { logMe } from "../../services/apiCalls";
import "./Login.css";

//Importo métodos de Redux
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../../containers/User/userSlice";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  //Instancio Redux en modo escritura y lectura

  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    if (credentialsRdx.credentials?.token) {
      //Si No token...home redirect
      navigate("/");
    }
  }, []);

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {};

  const logeame = () => {
    logMe(credenciales)
      .then((respuesta) => {
        console.log(respuesta);
        let datosBackend = {
          token: respuesta.data.data,
          // usuario: respuesta.data.data.user,
        };

        //Este es el momento en el que guardo en REDUX
        dispatch(login({ credentials: datosBackend }));
        console.log(datosBackend);

        //Una vez nos hemos logeado...mostramos mensaje de bienvenida...
        // setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.name}`);

        //Redirección a Home

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="loginDesign">
      {welcome !== "" ? (
        <div>{welcome}</div>
      ) : (
        <div>
          <InputText
            // className={
            //   credencialesError.nameError === ""
            //     ? "inputBasicDesign"
            //     : "inputBasicDesign inputErrorDesign"
            // }
            className={"inputFeoLogin"}
            type={"email"}
            name={"email"}
            placeholder={"email..."}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
          />
          <InputText
            // className={
            //   credencialesError.nameError === ""
            //     ? "inputBasicDesign"
            //     : "inputBasicDesign inputErrorDesign"
            // }
            className={"inputFeoLogin"}
            type={"password"}
            name={"password"}
            placeholder={""}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
          />

          <div onClick={() => logeame()}>LOG ME!</div>
        </div>
      )}
    </div>
  );
};