import { useContext, useEffect, useState } from "react";

import { AppContext } from "../state/AppContext";
import { useOncePostMount } from "./useOncePostMount";


export default function useSubmit(
    inputBackground,
    disabledInputBackground,
    loader,
    notFound,
    fromAdmin,
    darkInputBackground,
    darkDisabledInputBackground
  ){

  const {
    isAdminDarkMode
  } = useContext(AppContext);
  
  const [submitErrMsg, setSubmitErrMsg] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [inputBackgroundColor, setInputBackgroundColor] = useState(undefined);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [isJoinBtnActive, setIsJoinBtnActive] = useState(false);

  useEffect(()=>{
    isAdminDarkMode && fromAdmin?
    setInputBackgroundColor(darkInputBackground)
    : setInputBackgroundColor(inputBackground)
  }, [isAdminDarkMode]);

  const onSubmit = (fn, username, password) => {
    setSubmitErrMsg("");
    setSubmitErrMsg(loader);
    setIsInputDisabled(true);
    isAdminDarkMode && fromAdmin?
    setInputBackgroundColor(darkDisabledInputBackground)
    : setInputBackgroundColor(disabledInputBackground);
    setIsBtnActive(true);
    setTimeout(async ()=>{
      if (fn && await fn(username, password)){
        await fn(username, password);
        setSubmitErrMsg("")
      } else {
        setSubmitErrMsg(notFound);
      } 
      setIsInputDisabled(false);
      isAdminDarkMode && fromAdmin?
      setInputBackgroundColor(darkInputBackground)
      : setInputBackgroundColor(inputBackground);
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
