import { useContext } from "react";

import { AppContext } from "../../state/AppContext";
import { assetUrl, serverUrl } from "../../api/app.api";
import { GameOverlayDiv, PopupCtaBtn, PopupCloseBtn } from "../../styles/popups";
import { GameImg } from "../../styles/global";
import * as AppColor from "../../styles/colors";

export default function GameOverlay () {
    const { 
        selectedGame, 
        isGameOverlayDisplayed, 
        setIsGameOverlayDisplayed, 
        openLoginPopup 
    } = useContext(AppContext);

    return (
        <GameOverlayDiv>
            <div className={isGameOverlayDisplayed? "shown" : "hidden"}>
                <PopupCloseBtn onClick={() => setIsGameOverlayDisplayed(false)} 
                    $url={`${assetUrl}/icons/cross_white_icon.svg`} />
                <h1>{selectedGame.title}</h1>
                <GameImg 
                    src={`${serverUrl}/${selectedGame.thumb}`} 
                    $display_412px_height="none" 
                    height="260" 
                    width="260" 
                    title={selectedGame.title}
                />
                <p>{selectedGame.descrition}</p>
                <PopupCtaBtn 
                    $background={AppColor.JoinBtn}
                    $width="3rem"
                    $line_height="2.5rem"
                    onClick={() => {openLoginPopup()}}
                >play now</PopupCtaBtn>
            </div>
        </GameOverlayDiv>
    );
};
