import { useContext } from "react";

import { ContentTabsUl } from "../../styles/admin";
import { AppContext } from "../../state/AppContext";

export default function AdminContentTabs () {
    const {
        isAdminLoggedIn,
        loadAdminContentList
    } = useContext(AppContext);

    return (
        <>{isAdminLoggedIn?
            <ContentTabsUl
                $display={isAdminLoggedIn? "flex" : "none"}
            >
                <li onClick={()=>loadAdminContentList("banners")}>Banner Gallery</li>
                <li onClick={()=>loadAdminContentList("home")}>HP Games</li>
                <li onClick={()=>loadAdminContentList("new")}>New Games</li>
                <li onClick={()=>loadAdminContentList("slots")}>Slot Games</li>
                <li onClick={()=>loadAdminContentList("table")}>Table Games</li>
            </ContentTabsUl> : null
        }</>
    )
};