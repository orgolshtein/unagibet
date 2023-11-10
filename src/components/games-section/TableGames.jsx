import { useContext } from "react";
import * as api from "../../api/app.api";
// import games_data from "../../data/games-data.json";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GameListDiv } from "../../styles/containersGames";
import LoadingIcon from "../LoadingIcon";
import GameThumb from "./GameThumb";
import GameThumbLarge from "./GameThumbLarge";
import GameThumbWide from "./GameThumbWide";

export default function TableGames () {
   const { 
      width,
      gamesList,
      updateGamesList, 
      gamesErrorMessage, 
      fetchGamesError, 
      areGamesLoading, 
      gamesLoadingFinish,  
      updateGameOverlayDisplay 
    } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            const games_data = await api.fetchGameData();
            const datalist = games_data.filter((item) => item.type === "table").map((item)=>({...item, show: true}));
            updateGamesList(datalist);
          } catch {
            fetchGamesError("cannot display games");
          } finally {
            gamesLoadingFinish();
            updateGameOverlayDisplay(false);
          }
        })();
      });

    return(
      <GameListDiv>
        {
        gamesErrorMessage ? 
          <h1 className="loading-failed">{gamesErrorMessage}</h1>
         : areGamesLoading ? 
          <LoadingIcon 
            $size="20rem" 
            $marginleft="30rem"
            $marginleftmedium="2rem"
          />
         :
        gamesList?.filter((game) => game.show)
        .map((item, i) => (
          width > 1024 && i === 3 ?
          <GameThumbLarge 
          key={item.id} 
          selectedgame={item} 
          image={item.thumb} 
          title={item.title} 
          isnew={item.new}
          /> :
          width > 1024 && i === 2 ?
          <GameThumbWide 
            key={item.id} 
            selectedgame={item} 
            image={item.thumbwide} 
            title={item.title} 
            isnew={item.new}
            wideclass="wide-top"
          /> :
          width > 1024 && i === 8 ?
          <GameThumbWide 
            key={item.id} 
            selectedgame={item} 
            image={item.thumbwide} 
            title={item.title} 
            isnew={item.new}
            wideclass="wide-bottom"
          /> :
          <GameThumb 
            key={item.id} 
            selectedgame={item} 
            image={item.thumb} 
            title={item.title} 
            isnew={item.new}
          />
            ))}
      </GameListDiv>
  );
};
