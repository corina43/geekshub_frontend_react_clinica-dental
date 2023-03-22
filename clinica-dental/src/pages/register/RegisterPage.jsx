// import React, { useState, useEffect } from "react";
// import { InputText } from "../../common/InputText/InputText";
// import { validate } from "../../common/helpers/useful";
// import { registerUser } from "../../services/apiCalls";
// import { ButtonSubmit } from "../../common/ButtonSubmit/ButtonSubmit";
// export const Register = () => {
//   // 1 - Primero siempre se comprueba el valor de los hooks
//   const [credenciales, setCredenciales] = useState({
//     name: {
//       value: "",
//       validated: false,
//     },
//     user_name: {
//       value: "",
//       validated: false,
//     },
//     email: {
//       value: "",
//       validated: false,
//     },
//   });

//   //Este hook consistirá en el lugar de guardado de mensajes de error, a priori estarán en comillas vacías
//   const [credencialesError, setCredencialesError] = useState({
//     nameError: "",
//     usernameError: "",
//     emailError: "",
//   });

//   const [registerAct, setRegisterAct] = useState(false);

//   const inputHandler = (e) => {
//     //inputHandler será la función adecuada para controlar el contenido que estamos introduciendo
//     //en los inputs, su forma de manejarlo será actualizar las partes correspondientes del hook según el input
//     //en el que estemos escribiendo

//     setCredenciales((prevState) => ({
//       ...prevState,
//       [e.target.name.value]: e.target.value,
//       //Este método hace una copia del estado del componente con spread para no tener que mutar el estado original,
//       //posteriormente, mediante la técnica de diccionario de JS, asignamos el valor del input que esté escribiendose
//       //EN ESE MOMENTO a la parte correspondiente del Hook.
//     }));
//   };

//   //Funciones de ciclo de vida del componente, conocidas como useEffect
//  // 3 - Ejecutamos los useEffect

//  useEffect(() => {
//   //Este useEffect se va a ejecutar SIEMPRE que hayan cambios en el hook credenciales
//   // console.log("Credenciales ahora vale......", credenciales);

//   console.log(credenciales);
//   for (let errorFound in credenciales) {
//     console.log(credenciales[errorFound].validated);
//     if (credenciales[errorFound].validated === false) {
//       return;
//     }
//   }

//   setRegisterAct(true);
// }, [credenciales]);

// //Funcion de validacion

// const checkError = (e) => {
//   //La función checkError es la función que valida principalmente todo, primero
//   //declaramos error como comillas vacías, presuponiendo que cada vez que esto se compruebe, 
//   //no va a haber un error


//   let error = "";

//   //llamamos a la función validate pasándole 3 parámetros, el nombre del campo a evaluar, su contenido y si es requerido o no
//   const validation = validate(
//     e.target.name,
//     e.target.value,
//     e.target.required
//   );

//   //guardamos en la variable error el mensaje de vuelta que pueden ser comillas vacías si no hay un error o un string largo si 
//   //hemos encontrado un error
//   error = validation.message;

//   //PARTE QUE NO FUNCIONA//

//   setCredenciales((prevState) => ({
//     ...prevState,
//     [e.target.name]: validation.validated,
//   }));

//   ///////////////////////////

//   //Aqui seteamos el hook de los errores

//   setCredencialesError((prevState) => ({
//     ...prevState,
//     [e.target.name + "Error"]: error,
//   }));
// };
// const userRegister = () => {
//   registerUser(credenciales)
// };

// // 2 - Se mira en la zona de renderizado...
// return (
//   <div className="homeDesign">
//     <InputText
//       className={
//         credencialesError.nameError === ""
//           ? "inputBasicDesign"
//           : "inputBasicDesign inputErrorDesign"
//       }
//       type={"text"}
//       name={"name"}
//       placeholder={"nombre..."}
//       required={true}
//       changeFunction={(e) => inputHandler(e)}
//       blurFunction={(e) => checkError(e)}
//     />
//     <div>{credencialesError.nameError}</div>
//     <InputText
//       // Cada input escoge su diseño en base a si hay un error o no en el hook de errores

//       className={
//         credencialesError.usernameError === ""
//           ? "inputBasicDesign"
//           : "inputBasicDesign inputErrorDesign"
//       }
//       type={"text"}
//       name={"surname"}
//       placeholder={"apellido..."}
//       required={false}
//       changeFunction={(e) => inputHandler(e)}
//       blurFunction={(e) => checkError(e)}
//     />
//     <div>{credencialesError.usernameError}</div>
//     <InputText
//       // Cada input escoge su diseño en base a si hay un error o no en el hook de errores
//       className={
//         credencialesError.emailError === ""
//           ? "inputBasicDesign"
//           : "inputBasicDesign inputErrorDesign"
//       }
//       type={"email"}
//       name={"email"}
//       placeholder={"email..."}
//       required={true}
//       changeFunction={(e) => inputHandler(e)}
//       blurFunction={(e) => checkError(e)}
//     />
//     <div>{credencialesError.emailError}</div>

//     <div
//       className={
//         registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"
//       }
//       onClick={
//         registerAct
//           ? () => {
//              userRegister()
        
//               }
            
//           :  () =>{
            
//           } 
//       }
//     >
//       <button>Register me!</button>
      
//     </div>
//   </div>
// );
//     }
  
// import React, { useState, useEffect } from "react";
// import { InputText } from "../../common/InputText/InputText";
// import { validate } from "../../common/helpers/useful";
// import { registerUser } from "../../services/apiCalls";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import './Register.css';

// export const Register = () => {
//   const [credenciales, setCredenciales] = useState({
//     name: {
//       value: "",
//       validated: false,
//     },
//     username: {
//       value: "",
//       validated: false,
//     },
//     email: {
//       value: "",
//       validated: false,
//     },
//     password: {
//       value: "",
//       validated: false,
//     },
//   });

//   const [credencialesError, setCredencialesError] = useState({
//     nameError: "",
//     usernameError: "",
//     emailError: "",
//     passwordError: "",
//   });

//   const [registerAct, setRegisterAct] = useState(false);

//   const inputHandler = (e) => {
//     setCredenciales((prevState) => ({
//       ...prevState,
//       [e.target.name]: {
//         value: e.target.value,
//         validated: false,
//       },
//     }));
//   };

//   useEffect(() => {
//     let allValidated = true;
//     for (let field in credenciales) {
//       if (!credenciales[field].validated) {
//         allValidated = false;
//         break;
//       }
//     }
//     setRegisterAct(allValidated);
//   }, [credenciales]);

//   const checkError = (e) => {
//     const validation = validate(
//       e.target.name,
//       e.target.value,
//       e.target.required
//     );
//     setCredenciales((prevState) => ({
//       ...prevState,
//       [e.target.name]: {
//         value: e.target.value,
//         validated: validation.validated,
//       },
//     }));
//     setCredencialesError((prevState) => ({
//       ...prevState,
//       [e.target.name + "Error"]: validation.message,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, username, email, password } = credenciales;
//     registerUser({ name: name.value, username: username.value, email: email.value, password: password.value })
//       .then(response => {
//         console.log(response);
//         alert("Usuario registrado exitosamente.");
//       })
//       .catch(error => {
//         console.error(error);
//         alert("Hubo un error al registrar el usuario.");
//       });
//   };

//   return (
//     <div className="homeDesign">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formName">
//           <Form.Label>Nombre:</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             placeholder="Nombre..."
//             required={true}
//             onChange={(e) => inputHandler(e)}
//             onBlur={(e) => checkError(e)}
//             className={
//               credencialesError.nameError === ""
//                 ? "inputBasicDesign"
//                 : "inputBasicDesign inputErrorDesign"
//             }
//           />
//           <Form.Text className="text-muted">
//             {credencialesError.nameError}
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formUsername">
// <Form.Label>Nombre de usuario:</Form.Label>
// <Form.Control
// type="text"
// name="username"
// placeholder="Apellido..."
// required={false}
// onChange={(e) => inputHandler(e)}
// onBlur={(e) => checkError(e)}
// className={
// credencialesError.usernameError === ""
// ? "inputBasicDesign"
// : "inputBasicDesign inputErrorDesign"
// }
// />
// <Form.Control
// name="username"
// placeholder="Nombre de usuario..."
// required={true}
// onChange={(e) => inputHandler(e)}
// onBlur={(e) => checkError(e)}
// className={
// credencialesError.usernameError === ""
// ? "inputBasicDesign"
// : "inputBasicDesign inputErrorDesign is-invalid"
// }
// />
// <Form.Text className="text-muted">
// {credencialesError.usernameError}
// </Form.Text>

//   <div className="invalid-feedback">
//     {credencialesError.emailError}
//   </div>
//   <button
//     className={
//       registerAct
//         ? "btn btn-primary registerSendAct"
//         : "btn btn-primary registerSendDeac"
//     }
//     onClick={registerAct ? userRegister : () => {}}
//   >
//     register me
//   </button>
 
// </Form.Group>
// </Form>
// </div>)}
import React, { useState, useEffect } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useJwt } from "react-jwt";
import { Col, Container, Row } from "react-bootstrap";
import { userData } from "../../containers/User/userSlice";
import { errorCheck } from "../../services/usefull";


export const Register = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("jwt")
  let {decodedToken} = useJwt("jwt")

  if(token) {
    navigate('/')
  }


  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [userError, setUserError] = useState({
    usernameerror: "",
    nameerror: "",
    emailerror: "",
    passworderror: "",
    password2error: "",
    incompleteerror: "",
    emailAlreadyInBBDD: "",
  });

  const registerUser = async (body) => {
    let res = await axios.post(
      "https://localhost:3000",
      body
    );
    navigate("/")
  };

  //Handlers//

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (field, value, type, password1) => {
    let error = "";
    error = errorCheck(value, type, password1);
    setUserError((prevState) => ({
      ...prevState,
      [field + "error"]: error,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateBody(body)) {
      setUserError((prevState) => ({
        ...prevState,
        incompleteerror: "",
      }));
      registerUser(body)
      .then((created) => console.log(created))
      .catch((error) => {setUserError(
        (prevState) => (
          {
            ...prevState,
            emailAlreadyInBBDD: error.response.data,
          }
        )
      );});
      
    } else {
      setUserError((prevState) => ({
        ...prevState,
        incompleteerror: "You must complete every field",
      }));
    }
  };

  const body = {
    username: user.username,
    name: user.name,
    email: user.email,
    password: user.password,
    password2: user.password2,
  };

  const validateBody = (body) => {
    if (
      body.username !== "" &&
      body.name !== "" &&
      body.email !== "" &&
      body.password !== "" &&
      body.password2 !== ""
    ) {
      return true;
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="container-fluid registerDesign d-flex justify-content-center align-items-center"
    >
      <Container>
        <Row className="row d-flex justify-content-center align-content-center divContainerReg">
         
          <Col className="col-10 col-md-4 text-center align-items-center inputsBoxRegister">

            <div>{userError.incompleteerror}</div>
            <div>{userError.emailAlreadyInBBDD}</div>

            <h3 id="registerText">REGISTER </h3>

            <input
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "text")
              }
              onChange={inputHandler}
              className="inputRegDesign"
              type="text"
              placeholder="  User name ... |"
              name="username"
            />
            <div className="errorInput">{userError.usernameerror}</div>
            <input
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "text")
              }
              onChange={inputHandler}
              className="inputRegDesign"
              type="text"
              placeholder="  Name ... |"
              name="name"
            />
          
            <div className="errorInput">{userError.cityerror}</div>
            <input
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "email")
              }
              onChange={inputHandler}
              className="inputRegDesign"
              type="Email"
              placeholder="  Email ... | "
              name="email"
            />
            <div className="errorInput">{userError.emailerror}</div>
            <input
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "password")
              }
              onChange={inputHandler}
              className="inputRegDesign"
              type="Password"
              placeholder="  Password ... |"
              name="password"
            />
            <div className="errorInput">{userError.passworderror}</div>
            <input
              onBlur={(e) =>
                errorHandler(
                  e.target.name,
                  e.target.value,
                  "password2",
                  user.password
                )
              }
              onChange={inputHandler}
              className="inputRegDesign"
              type="Password"
              placeholder="  Repeat password ... |"
              name="password2"
            />
            <div className="errorInput">{userError.password2error}</div>

            <div className="col d-flex text-center align-items-center buttonDivReg">
              <button className="buttonDesignRegister">Register</button>
            </div>
          </Col>

        
        </Row>
      </Container>
    </form>
  );
};
