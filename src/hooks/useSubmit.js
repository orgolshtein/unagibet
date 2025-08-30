import { useContext, useState } from "react";

import { AppContext } from "../state/AppContext";
import * as api from "../api/app.api";


export default function useSubmit(inputBackground, disabledInputBackground, loader, notFound){
  const [submitErrMsg, setSubmitErrMsg] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [inputBackgroundColor, setInputBackgroundColor] = useState(inputBackground);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [isJoinBtnActive, setIsJoinBtnActive] = useState(false);

  const {
        adminLogin
    } = useContext(AppContext);
  
  const onSubmit = (fn, username, password) => {
    setSubmitErrMsg("");
    setSubmitErrMsg(loader);
    setIsInputDisabled(true);
    setInputBackgroundColor(disabledInputBackground);
    setIsBtnActive(true);
    setTimeout(async ()=>{
      if (fn && await fn(username, password)){
        await fn(username, password);
        setSubmitErrMsg("")
      } else {
        setSubmitErrMsg(notFound);
      } 
      setIsInputDisabled(false);
      setInputBackgroundColor(inputBackground);
      setIsBtnActive(false);
    }, Math.floor(Math.random() * (5000-1000)+1000));
  };

  return { 
      submitErrMsg, 
      setSubmitErrMsg, 
      isInputDisabled, 
      inputBackgroundColor, 
      isBtnActive, 
      isJoinBtnActive,
      setIsJoinBtnActive,
      onSubmit 
  }
};
