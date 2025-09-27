import { useContext } from "react";

import { AppContext } from "../../state/AppContext";
import { Loader } from "../../styles/global";

export default function AdminContentList () {
    const { 
        adminContentList,
        adminContentErrorMessage, 
        isAdminContentLoading
    } = useContext(AppContext);

    return(
        <div>
            {
                adminContentErrorMessage ?
                <h1 className="loading-failed">{adminContentErrorMessage}</h1>
                : isAdminContentLoading ?
                <Loader 
                    $size="20rem" 
                    $margin_left="30rem"
                    $margin_left_medium="2rem"
                />
                :
                adminContentList?.map((item, i) => (
                    <div key={item.id}>
                        {i+1}: {item.title}
                    </div>
                ))
            }
        </div>
    )
};