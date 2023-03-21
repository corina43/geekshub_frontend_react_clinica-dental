
// import React, { useState, useEffect } from "react";
// import { InputText } from "../../common/InputText/InputText";
// import { logMe } from "../../services/apiCalls";
// import "./Login.css";

// //Importo métodos de Redux
// import { useDispatch, useSelector } from "react-redux";
// import { login, userData } from "../../containers/User/userSlice";

// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const navigate = useNavigate();

//   //Instancio Redux en modo escritura y lectura

//   const dispatch = useDispatch();
//   const credentialsRdx = useSelector(userData);

//   const [credenciales, setCredenciales] = useState({
//     email: "",
//     password: "",
//   });

//   const [welcome, setWelcome] = useState("");

//   useEffect(() => {
//     if (credentialsRdx.credentials?.token) {
//       //Si No token...home redirect
//       navigate("/");
//     }
//   }, []);

//   const inputHandler = (e) => {
//     setCredenciales((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const checkError = (e) => {};

//   const logeame = () => {
//     logMe(credenciales)
//       .then((respuesta) => {
//         console.log(respuesta);
//         let datosBackend = {
//           token: respuesta.data.data,
//           // usuario: respuesta.data.data.user,
//         };

//         //Este es el momento en el que guardo en REDUX
//         dispatch(login({ credentials: datosBackend }));
//         console.log(datosBackend);

//         //Una vez nos hemos logeado...mostramos mensaje de bienvenida...
//         //setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.name}`);

//         //Redirección a Home

//         setTimeout(() => {
//           navigate("/");
//         }, 3000);
//       })
//       .catch((error) => console.log(error));
//   };
//   return (
//     <div className="loginDesign">
//       {welcome !== "" ? (
//         <div>{welcome}</div>
//       ) : (
//         <div>
//           <InputText
            
//             className={"inputFeoLogin"}
//             type={"email"}
//             name={"email"}
//             placeholder={"email..."}
//             required={true}
//             changeFunction={(e) => inputHandler(e)}
//             blurFunction={(e) => checkError(e)}
//           />
//           <InputText
            
//             className={"inputFeoLogin"}
//             type={"password"}
//             name={"password"}
//             placeholder={""}
//             required={true}
//             changeFunction={(e) => inputHandler(e)}
//             blurFunction={(e) => checkError(e)}
//           />

//           <div onClick={() => logeame()}>LOG ME!</div>
//         </div>
//       )}
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { logMe } from "../../services/apiCalls";
import "./Login.css";

//Importo métodos de Redux
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../../containers/User/userSlice";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              className="loginInput"
              type="email"
              name="email"
              placeholder="Email..."
              required={true}
              onChange={(e) => inputHandler(e)}
              onBlur={(e) => checkError(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              className="loginInput"
              type="password"
              name="password"
              placeholder="Contraseña..."
              required={true}
              onChange={(e) => inputHandler(e)}
              onBlur={(e) => checkError(e)}
            />
          </Form.Group>

          <Button variant="primary " onClick={() => logeame()}>
            Iniciar sesión
          </Button>
        </Form>
      )}
    </div>
  );
};