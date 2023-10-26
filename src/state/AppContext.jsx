import React, { useState } from "react";
import slider_data from "../data/slider-data.json"
import games_data from "../data/games-data.json";
import * as AppColor from "../styles/Colors"

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({children}) =>{
  const [sliderList, setSliderList] = useState([]);  
  const [gamesList, setGamesList] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isForgotPassDisplayed, setIsforgotPassDisplayed] = useState(false);
  const [isRegBlockDisplayed, setIsRegBlockDisplayed] = useState(false);
  const [isLoginDisplayed, setIsLoginDisplayed] = useState(false);
  const [isGameOverlayDisplayed, setIsGameOverlayDisplayed] = useState(false);
  const [isToTopDisplayed, setIsToTopDisplayed] = useState(false);
  const [homeIcon, setHomeIcon] = useState("src/assets/icons/allgames_icon.svg");
  const [newIcon, setNewIcon] = useState("src/assets/icons/new_icon.svg");
  const [slotsIcon, setSlotsIcon] = useState("src/assets/icons/slots_icon.svg");
  const [tableIcon, setTableIcon] = useState("src/assets/icons/table_icon.svg");
  const [homeLabelColor, setHomeLabelColor] = useState(AppColor.GameTabLabel);
  const [newLabelColor, setNewLabelColor] = useState(AppColor.GameTabLabel);
  const [slotsLabelColor, setSlotsLabelColor] = useState(AppColor.GameTabLabel);
  const [tableLabelColor, setTableLabelColor] = useState(AppColor.GameTabLabel);
  const [errorMessage, setErrorMessage] = useState("");

  const getSliderList = ()=>{
    const datalist = slider_data.map((item)=>({...item, show: true}));
    setSliderList(datalist);
  }
  
  const getGamesList = ()=>{
    const datalist = games_data.map((item)=>({...item, show: true}));
    setGamesList(datalist);
  };

  const getNewGamesList = ()=>{
    const datalist = games_data.filter((item) => item.new === true).map((item)=>({...item, show: true}));
    setGamesList(datalist);
  };

  const getSlotGamesList = ()=>{
    const datalist = games_data.filter((item) => item.type === "slot").map((item)=>({...item, show: true}));
    setGamesList(datalist);
  };

  const getTableGamesList = ()=>{
    const datalist = games_data.filter((item) => item.type === "table").map((item)=>({...item, show: true}));
    setGamesList(datalist);
  };

  const updateGamesList = (x)=>{
    setGamesList(x);
  };

  const updateSelectedGame = (x) => {
    setSelectedGame(x);
  };

  const loadingIsFinished = () => {
    setIsLoading(false);
  };

  const updateforgotPasswordDisplay = (x) => {
    setIsforgotPassDisplayed(x);
  };

  const updateRegBlockDisplay = (x) => {
    setIsRegBlockDisplayed(x);
  };

  const updateLoginDisplay = (x) => {
    setIsLoginDisplayed(x);
  };

  const updateGameOverlayDisplay = (x) => {
    setIsGameOverlayDisplayed(x);
  }

  const updateToTopDisplay = (x) => {
    setIsToTopDisplayed(x);
  };

  const homeActive = () => {
    setHomeIcon("src/assets/icons/allgames_icon-active.svg");
    setNewIcon("src/assets/icons/new_icon.svg");
    setSlotsIcon("src/assets/icons/slots_icon.svg");
    setTableIcon("src/assets/icons/table_icon.svg");
    setHomeLabelColor(AppColor.GameTabLabelActive);
    setNewLabelColor(AppColor.GameTabLabel);
    setSlotsLabelColor(AppColor.GameTabLabel);
    setTableLabelColor(AppColor.GameTabLabel);
  };

  const newActive = () => {
    setHomeIcon("src/assets/icons/allgames_icon.svg");
    setNewIcon("src/assets/icons/new_icon-active.svg");
    setSlotsIcon("src/assets/icons/slots_icon.svg");
    setTableIcon("src/assets/icons/table_icon.svg");
    setHomeLabelColor(AppColor.GameTabLabel);
    setNewLabelColor(AppColor.GameTabLabelActive);
    setSlotsLabelColor(AppColor.GameTabLabel);
    setTableLabelColor(AppColor.GameTabLabel);
  };

  const slotsActive = () => {
    setHomeIcon("src/assets/icons/allgames_icon.svg");
    setNewIcon("src/assets/icons/new_icon.svg");
    setSlotsIcon("src/assets/icons/slots_icon-active.svg");
    setTableIcon("src/assets/icons/table_icon.svg");
    setHomeLabelColor(AppColor.GameTabLabel);
    setNewLabelColor(AppColor.GameTabLabel);
    setSlotsLabelColor(AppColor.GameTabLabelActive);
    setTableLabelColor(AppColor.GameTabLabel);
  };

  const tableActive = () => {
    setHomeIcon("src/assets/icons/allgames_icon.svg");
    setNewIcon("src/assets/icons/new_icon.svg");
    setSlotsIcon("src/assets/icons/slots_icon.svg");
    setTableIcon("src/assets/icons/table_icon-active.svg");
    setHomeLabelColor(AppColor.GameTabLabel);
    setNewLabelColor(AppColor.GameTabLabel);
    setSlotsLabelColor(AppColor.GameTabLabel);
    setTableLabelColor(AppColor.GameTabLabelActive);
  };

  const fetchErrorHandler = (error) => {
    setErrorMessage(`Connection error: ${error.message}`);
  };

  const state = {
    sliderList,
    gamesList,
    selectedGame,
    isLoading,
    isForgotPassDisplayed,
    isRegBlockDisplayed,
    isLoginDisplayed,
    isGameOverlayDisplayed,
    isToTopDisplayed,
    homeIcon,
    newIcon,
    slotsIcon,
    tableIcon,
    homeLabelColor,
    newLabelColor,
    slotsLabelColor,
    tableLabelColor,
    errorMessage
  };
  
  const actions = {
    getSliderList,
    getGamesList,
    getNewGamesList,
    getSlotGamesList,
    getTableGamesList,
    updateGamesList,
    updateSelectedGame,
    loadingIsFinished,
    updateforgotPasswordDisplay,
    updateRegBlockDisplay,
    updateLoginDisplay,
    updateGameOverlayDisplay,
    updateToTopDisplay,
    homeActive,
    newActive,
    slotsActive,
    tableActive,
    fetchErrorHandler
  };
  
  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { AppProvider, AppContext };
