import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { AdminBtn, ConfirmPopupContainer, ConfirmPopupDiv } from "../../styles/admin";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";


export default function AdminConfirmPopup () {
    const { 
        adminConfirmPopupMsg,
        isAdminLoggedIn,
        isAdminConfirmPopup, 
        setIsAdminConfirmPopup,
        isAdminConfirmAlertOnly,
        adminConfirmPopupSuccessMsg,
        displayConfirmPopup
    } = useContext(AppContext);

    useImpDisableScrollHandler(isAdminConfirmPopup);

    return(
    <>    
        {isAdminLoggedIn && isAdminConfirmPopup? 
        <ConfirmPopupContainer>
            <ConfirmPopupDiv>
            <p className="alert-text">
                {adminConfirmPopupMsg}
            </p>
            {
                isAdminConfirmAlertOnly ?
                <div className="alert-button">
                    <AdminBtn 
                        type="button" 
                        onClick={()=>setIsAdminConfirmPopup(false)}
                    >OK</AdminBtn>
                </div> 
                : <div className="alert-buttons">
                    <AdminBtn 
                        type="button"
                        onClick={()=>displayConfirmPopup(adminConfirmPopupSuccessMsg, true)}
                    >Yes</AdminBtn>
                    <AdminBtn 
                        type="button"
                        onClick={()=>setIsAdminConfirmPopup(false)}
                    >No</AdminBtn>
                </div>
            }
            </ConfirmPopupDiv>
        </ConfirmPopupContainer> : null
        }</>
    );
};