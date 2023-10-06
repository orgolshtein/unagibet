import { useContext } from "react";
import { AppContext } from "../state/AppContext";
import GameThumb from "./GameThumb";
import { useOncePostMount } from "../hooks/UseOnce"
import { GameListDiv } from "../styles/Containers"

export default function SlotGames () {
    const { gamesList, getSlotGamesList, fetchErrorHandler, loadingIsFinished } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getSlotGamesList();
          } catch {
            fetchErrorHandler();
          } finally {
            loadingIsFinished();
          }
        })();
      });

    return(
        <GameListDiv>
            {gamesList
            .map((item) => (
                <div key={item.id} /* onClick={() => updateProfileRobot(item)} */>
                <GameThumb image={item.thumb} $res={180} />
                </div>
                ))}
            
        </GameListDiv>
    );
}