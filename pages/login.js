import {
  Button,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContextProvider } from "context/AuthContext";
import { useRouter } from "next/router";
import { FormDinamical } from "components/formularios/Form";
const Login = () => {
  
  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      pos={"fixed"}
      top={0}
      left={0}
      bg={"gray.100"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FormLogin />
    </Flex>
  );
};

export default Login;

const FormLogin = () => {

  const schemaLogin = [
    {Header: "Correo electronico", accessor : "email", type: "email"},
    {Header: "Contraseña", accessor : "password", type: "password"},

  ]
  
  const toast = useToast();
  const router = useRouter()
  const {setUser} = AuthContextProvider()

  const handleSubmit = async (values, actions) => {
    try {
      const auth = getAuth();
      // Autenticacion con firebase
      const {user} = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      // Mutacion de contexto usuario
      setUser(user)
      //Guardado del token en local storage
      localStorage.setItem('tokenAdminBodas', (await user?.getIdTokenResult())?.token)
      toast({
        title: "Inicio de sesión con exito",
        status: "success",
        isClosable: true,
      });

      await router.push("/")
      
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: JSON.stringify(error),
        status: "error",
        isClosable: true,
      });
    }

    console.log(values);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Flex
      bg={"white"}
      p={"2rem"}
      rounded={"xl"}
      w={"40%"}
      mx={"auto"}
      insetX={"0"}
      shadow
      flexDir={"column"}
      gap={"0.5rem"}
    >
          <Heading
            fontSize={"2xl"}
            fontWeight={"900"}
            pb={"1rem"}
            w={"100%"}
            textAlign={"center"}
          >
            Iniciar sesión
          </Heading>
          
      <FormDinamical schema={schemaLogin} columns={1} onSubmit={handleSubmit} initialValues={initialValues}/>
    
    </Flex>
  );
};
