
import { loadAbort } from "@/utilities/load-abort-axios-utility";
import { UserInfo } from "@/models";
import axios from 'axios';

export const login=()=>{
    const controller= loadAbort();
    
    return {call: axios.get<UserInfo>('https://rickandmortyapi.com/api/character/2',{signal:controller.signal}),
    controller
};
};

