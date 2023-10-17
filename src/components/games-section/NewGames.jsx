import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import GameThumb from "./GameThumb";
import { useOncePostMount } from "../../hooks/UseOnce"
import { GameListDiv } from "../../styles/Containers"

export default function NewGames () {
    const { gamesList, getNewGamesList, fetchErrorHandler, loadingIsFinished, newActive } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getNewGamesList();
          } catch {
            fetchErrorHandler();
          } finally {
            loadingIsFinished();
            newActive();
          }
        })();
      });

    return(
        <GameListDiv>
            {gamesList
            ?.filter((game) => game.show).map((item) => (
                <div key={item.id} /* onClick={() => updateProfileRobot(item)} */>
                <GameThumb image={item.thumb} $res={180} />
                </div>
                ))}
            
        </GameListDiv>
    );
}