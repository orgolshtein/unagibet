import React, { useEffect, useState } from "react";

import * as api from "../api/app.api";
import { useOncePostMount } from "../hooks/useOncePostMount";

const AppContext = React.createContext();
const { Provider } = AppContext;

const AppProvider = ({children}) =>{
  const [width, setWidth] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(0);
  const [sliderList, setSliderList] = useState([]);
  const [gamesList, setGamesList] = useState([]);
  const [newGamesList, setNewGamesList] = useState([]);
  const [slotsGamesList, setSlotsGamesList] = useState([]);
  const [tableGamesList, setTableGamesList] = useState([]);
  const [selectedGame, setSelectedGame] = useState({});
  const [isSliderLoading, setIsSliderLoading] = useState(true);
  const [areGamesLoading, setAreGamesLoading] = useState(true);
  const [isAdminContentLoading, setIsAdminContentLoading] = useState(true);
  const [isForgotPassDisplayed, setIsForgotPassDisplayed] = useState(false);
  const [isRegBlockDisplayed, setIsRegBlockDisplayed] = useState(false);
  const [isLoginDisplayed, setIsLoginDisplayed] = useState(false);
  const [isGameOverlayDisplayed, setIsGameOverlayDisplayed] = useState(false);
  const [isToTopDisplayed, setIsToTopDisplayed] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(undefined);
  const [adminContentTab, setAdminContentTab] = useState("");
  const [adminContentList, setAdminContentList] = useState(undefined);
  const [adminContentListOrderProp, setAdminContentListOrderProp] = useState("")
  const [sliderErrorMessage, setSliderErrorMessage] = useState("");
  const [gamesErrorMessage, setGamesErrorMessage] = useState("");
  const [adminLoginMessage, setAdminLoginMessage] = useState("");
  const [adminContentErrorMessage, setAdminContentErrorMessage] = useState("");
  
  useOncePostMount(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    api.riseAndShine();
    loadBanners();
    loadGames();
    loadAdminContentList("banners");
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
      scrollY > 265 ?
        setIsToTopDisplayed(true) :
        setIsToTopDisplayed(false)
    });
  },[scrollY]);
  
  const loadBanners = async () => {
    try {
      const slider_data = await api.fetchData("slider");
      setSliderList(slider_data.sort((a, b) => a.order - b.order));
    } catch {
      setSliderErrorMessage("Connection error: cannot display content");
    } finally {
      setIsSliderLoading(false);
    }
  };

  const loadGames = async () => {
    try {
      const game_data = await api.fetchData("games");
      setGamesList(game_data.map((item)=>({...item, show: true}))
        .sort((a, b) => a.order - b.order));
      setNewGamesList(game_data.filter((item) => item.new === true)
        .map((item)=>({...item, show: true})).sort((a, b) => a.new_order - b.new_order));
      setSlotsGamesList(game_data.filter((item) => item.type === "slot")
        .map((item)=>({...item, show: true})).sort((a, b) => a.cat_order - b.cat_order));
      setTableGamesList(game_data.filter((item) => item.type === "table")
        .map((item)=>({...item, show: true})).sort((a, b) => a.cat_order - b.cat_order));
    } catch {
      setGamesErrorMessage("Connection error: cannot display games");
    } finally {
      setAreGamesLoading(false);
    }
  };

  const loadAdminContentList = async (tab) => {
    try {
      const game_data = await api.fetchData("games");
      const slider_data = await api.fetchData("slider");
      setAdminContentTab(tab)
      switch (tab) {
        case "banners":
          setAdminContentListOrderProp("order");
          setAdminContentList(slider_data.sort((a, b) => a.order - b.order));
          break;
        case "home":
          setAdminContentListOrderProp("order");
          setAdminContentList(game_data.map((item)=>({...item, show: true}))
          .sort((a, b) => a.order - b.order));
          break;
        case "new":
          setAdminContentListOrderProp("new_order");
          setAdminContentList(game_data.filter((item) => item.new === true)
          .map((item)=>({...item, show: true})).sort((a, b) => a.new_order - b.new_order));
          break;
        case "slots":
          setAdminContentListOrderProp("cat_order");
          setAdminContentList(game_data.filter((item) => item.type === "slot")
          .map((item)=>({...item, show: true})).sort((a, b) => a.cat_order - b.cat_order));
          break;
        case "table":
          setAdminContentListOrderProp("cat_order");
          setAdminContentList(game_data.filter((item) => item.type === "table")
          .map((item)=>({...item, show: true})).sort((a, b) => a.cat_order - b.cat_order));
          break;
        default:
          break;
      }
    } catch {
      setAdminContentErrorMessage("Connection error: cannot display content");
    } finally {
      setIsAdminContentLoading(false);
    }
  };

  const openLoginPopup = (overlayDisplayed) => {
    overlayDisplayed? overlayDisplayed(false): null;
    setIsLoginDisplayed(true);
  };

  const openRegBlockPopup = (ctaActive, overlayDisplayed) => {
    overlayDisplayed? overlayDisplayed(false): null;
    ctaActive(true);
    setTimeout(()=>{
        setIsRegBlockDisplayed(true);
        ctaActive(false);
    }, Math.floor(Math.random() * (2000-1000)+1000));
  };

  const openGameOverlay = (selectedgame) => {
    setIsGameOverlayDisplayed(false);
    setTimeout(()=>{
      setSelectedGame(selectedgame);
      setIsGameOverlayDisplayed(true);
    },200)
  };

  const filterGames = (input) => {
    const filter = (list) => list.map((item)=>{
      item.show = item.title.toLowerCase().includes(input.current.value.toLowerCase());
      return item;
    });
    setGamesList(filter(gamesList));
    setNewGamesList(filter(newGamesList));
    setSlotsGamesList(filter(slotsGamesList));
    setTableGamesList(filter(tableGamesList));
  };

  const adminLogin = async (username, password) => {
    try {
      const logged = await api.adminLogin(username, password);
      if (logged){
        setIsAdminLoggedIn(true)
        setAdmin(logged.name)
        setAdminLoginMessage("Logged in successfully... \nSay it! Say we are Unagi")
        return true;
      } else{
        setAdmin(undefined);
        return false;
      }
    } catch (err){
      console.log(err)
    }
  };

  const adminLogout = async () => {
    try {
      setIsAdminLoggedIn(false)
      setAdmin(undefined)
      setAdminLoginMessage("Logged out \nMaybe next time, we can attack them together...")
    } catch (err){
      console.log(err)
    }
  };

  const state = {
    width,
    isSliderLoading,
    sliderList,
    areGamesLoading,
    isAdminContentLoading,
    gamesList,
    newGamesList,
    slotsGamesList,
    tableGamesList,
    selectedGame,
    isForgotPassDisplayed,
    isRegBlockDisplayed,
    isLoginDisplayed,
    isGameOverlayDisplayed,
    isToTopDisplayed,
    admin,
    adminContentTab,
    adminContentList,
    adminContentListOrderProp,
    isAdminLoggedIn,
    sliderErrorMessage,
    gamesErrorMessage,
    adminLoginMessage,
    adminContentErrorMessage
  };
  
  const actions = {
    setIsSliderLoading,
    setSliderList,
    setAreGamesLoading,
    setIsAdminContentLoading,
    setGamesList,
    setNewGamesList,
    setSlotsGamesList,
    setTableGamesList,
    setSelectedGame,
    filterGames,
    openGameOverlay,
    setIsForgotPassDisplayed,
    setIsRegBlockDisplayed,
    openRegBlockPopup,
    setIsLoginDisplayed,
    openLoginPopup,
    setIsGameOverlayDisplayed,
    setIsToTopDisplayed,
    setAdmin,
    setAdminContentList,
    setIsAdminLoggedIn,
    loadAdminContentList,
    setSliderErrorMessage,
    setGamesErrorMessage,
    setAdminLoginMessage,
    setAdminContentErrorMessage,
    adminLogin,
    adminLogout
  };
  
  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { AppProvider, AppContext };
