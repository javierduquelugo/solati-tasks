import { Input,Button } from "@nextui-org/react";

const Login = () => {
  return (
    <div className="flex justify-center gap-5">
        <div className="flex-row"><p className="text-center">LOGIN</p></div>
        <div className="flex-row"><Input className="max-w-md" size={"sm"} variant={"bordered"} type="email" label="Email" /></div>
        <div className="flex-row"><Input className="max-w-md" size={"sm"} variant={"bordered"} type="email" label="Contraseña" /></div>      
        <div className=""><Button color="success" >INGRESAR</Button></div>
    </div>
  )
}

export default Login