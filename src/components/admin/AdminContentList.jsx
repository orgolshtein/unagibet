import { useContext } from "react";

import { AppContext } from "../../state/AppContext";
import { Loader } from "../../styles/global";
import { ContentListContainerDiv, ContentListTable } from "../../styles/admin";
import useCapitalized from "../../hooks/useCapitalized";

export default function AdminContentList () {
    const { 
        isAdminLoggedIn,
        adminContentList,
        adminContentErrorMessage, 
        isAdminContentLoading
    } = useContext(AppContext);

    return(
        <>{isAdminLoggedIn? <ContentListContainerDiv>
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
                <ContentListTable>
                    <thead>
                        <tr align="left">
                            <th style={{width: "15%"}}>
                                Title
                            </th>
                            <th style={{width: "37%"}}>
                                Description
                            </th >
                            <th style={{width: "12%"}} align="center">
                                Type
                            </th>
                            <th style={{width: "12%"}} align="center">
                                New
                            </th>
                            <th style={{width: "12%"}} align="center">
                                Order <span style={{margin: "10px"}}></span> <button type="button">Save</button>
                            </th>
                            <th style={{width: "12%"}} align="center">
                                <button 
                                    type="button" 
                                    id="add-button"
                                >+</button>
                            </th>
                        </tr>
                    </thead>
                    {adminContentList?.map((item, i) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.description? item.description : ""}</td>
                            <td align="center">{item.type? useCapitalized(item.type) : ""}</td>
                            <td align="center">{item.new? "Yes" : "No"}</td>
                            <td align="center">{item.order}</td>
                            <td align="center">
                                <button type="button">Edit</button>  <button type="button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </ContentListTable>
            }
        </ContentListContainerDiv>: null
        }</>
    )
};