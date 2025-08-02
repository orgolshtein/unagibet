import { useContext } from "react";

import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GameListDiv } from "../../styles/main.content";
import { Loader } from "../../styles/global";
import GameThumb from "./GameThumb";
import { serverUrl } from "../../api/app.api";

export default function Home () {
  const { 
    width,
    gamesList,
    gamesErrorMessage, 
    areGamesLoading,
    setIsGameOverlayDisplayed 
  } = useContext(AppContext);

  useOncePostMount(() => {
    setIsGameOverlayDisplayed(false);
  });

    return(
        <GameListDiv>
            {
            gamesErrorMessage ? 
              <h1 className="loading-failed">{gamesErrorMessage}</h1>
             : areGamesLoading ? 
              <Loader 
                $size="20rem" 
                $margin_left="30rem"
                $margin_left_medium="2rem"
              />
             :
            gamesList?.filter((game) => game.show)
            .map((item, i) => (
              <GameThumb 
                key={item.id} 
                selectedgame={item} 
                image={width > 1024 && i === 2 ? `${serverUrl}/${item.thumbwide}` : `${serverUrl}/${item.thumb}`} 
                title={item.title} 
                isnew={item.new}
                type={width > 1024 && i === 3 ? "big" : width > 1024 && i === 2 ? "wide-top" : "normal"}
              />
                ))}
        </GameListDiv>
    );
};
