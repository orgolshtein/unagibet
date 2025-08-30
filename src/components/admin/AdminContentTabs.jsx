import { useContext } from "react";

import { ContentTabsUl } from "../../styles/admin";
import { AppContext } from "../../state/AppContext";

export default function AdminContentTabs () {
    const {
        isAdminLoggedIn
    } = useContext(AppContext);

    return (
        <ContentTabsUl
            $display={isAdminLoggedIn? "flex" : "none"}
        >
            <li>Banner Gallery</li>
            <li>HP Games</li>
            <li>New Games</li>
            <li>Slot Games</li>
            <li>Table Games</li>
        </ContentTabsUl>
    )
};