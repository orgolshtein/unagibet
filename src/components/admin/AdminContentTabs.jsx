import { useContext, useState } from "react";

import { ContentTabsUl } from "../../styles/admin";
import { AppContext } from "../../state/AppContext";

export default function AdminContentTabs () {
    const [bannersClass, setBannersClass] = useState("chosen")
    const [homeClass, setHomeClass] = useState("")
    const [newClass, setNewClass] = useState("")
    const [slotClass, setSlotClass] = useState("")
    const [tableClass, setTableClass] = useState("")
    
    const {
        isAdminLoggedIn,
        loadAdminContentList
    } = useContext(AppContext);

    const setActiveTab = (tab) => {
        setBannersClass("")
        setHomeClass("")
        setNewClass("")
        setSlotClass("")
        setTableClass("")
        switch (tab) {
            case "banners":
                setBannersClass("chosen")
                break;
            case "home":
                setHomeClass("chosen")
                break;
            case "new":
                setNewClass("chosen")
                break;
            case "slots":
                setSlotClass("chosen")
                break;
            case "table":
                setTableClass("chosen")
                break;
            default:
                break;
            }
            loadAdminContentList(tab)
    };

    return (
        <>{isAdminLoggedIn?
            <ContentTabsUl
                $display={isAdminLoggedIn? "flex" : "none"}
            >
                <li className={bannersClass} onClick={()=>setActiveTab("banners")}>Banner Gallery</li>
                <li className={homeClass} onClick={()=>setActiveTab("home")}>HP Games</li>
                <li className={newClass} onClick={()=>setActiveTab("new")}>New Games</li>
                <li className={slotClass} onClick={()=>setActiveTab("slots")}>Slot Games</li>
                <li className={tableClass} onClick={()=>setActiveTab("table")}>Table Games</li>
            </ContentTabsUl> : null
        }</>
    )
};