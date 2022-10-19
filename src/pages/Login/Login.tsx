import { createUserAdapter } from "@/adapters";
import { useFetchAndLoad } from "@/hooks";
import { createUser, modifyUser } from "@/redux/states/user";
import { AppStore } from "@/redux/store";
import { login } from "@/services/public.services";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Login = () => {
  //loader nos va a decir el estado de la llamada
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispacth = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);
  
  const handleClick = async () => {
    const morty = await callEndpoint(login());
    dispacth(createUser(createUserAdapter(morty)));
  };

  const handleModify = () => {
    dispacth(modifyUser({ name: 'Edwin' }));
  };

  return (
    <>
      {loading ? (
        <div>
          <h3>Loading</h3>
        </div>
      ) : (
        <>
          <Button variant="text" onClick={handleClick}>
            Login
          </Button>

          <Button variant="text" onClick={handleModify}>
            Modify
          </Button>

          <div>
            <h3>{JSON.stringify(userState)}</h3>
          </div>
        </>
      )}
      ;
    </>
  );
};


export default Login;