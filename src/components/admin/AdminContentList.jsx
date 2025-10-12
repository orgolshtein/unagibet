import { useContext } from "react";

import { AppContext } from "../../state/AppContext";
import { Loader } from "../../styles/global";
import { ContentListContainerDiv, ContentListTable } from "../../styles/admin";
import useCapitalized from "../../hooks/useCapitalized";
import { serverUrl } from "../../api/app.api";

export default function AdminContentList () {
    const { 
        isAdminLoggedIn,
        adminContentTab,
        adminContentList,
        adminContentListOrderProp,
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
                            <th style={{width: "18rem"}}>
                                Title
                            </th>
                            {
                            adminContentTab !== "banners" ?
                            <th style={{width: "auto"}}>
                                Description
                            </th>: null
                            }
                            {
                            adminContentTab === "home" || adminContentTab === "new" ?
                            <th style={{width: "6rem"}} align="center">
                                Type
                            </th> : null
                            }
                            {
                            adminContentTab !== "new" && adminContentTab !== "banners" ?
                            <th style={{width: "6rem"}} align="center">
                                New
                            </th>: null
                            }
                            <th style={{width: "auto"}} align="center">
                                Image
                            </th>
                            <th style={{width: "10rem"}} align="center">
                                Order <span style={{margin: "10px"}}></span> <button type="button">Save</button>
                            </th>
                            <th style={{width: "10rem"}} align="center">
                                <button 
                                    type="button" 
                                    id="add-button"
                                >+</button>
                            </th>
                        </tr>
                    </thead>
                    {adminContentList?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            {
                            adminContentTab !== "banners" ?
                            <td>{item.description}</td>: null
                            }
                            {
                            adminContentTab === "home" || adminContentTab === "new" ?
                            <td align="center">{useCapitalized(item.type)}</td>: null
                            }
                            {
                            adminContentTab !== "new" && adminContentTab !== "banners" ?
                            <td align="center">{item.new? "Yes" : "No"}</td>: null
                            }
                            {
                            adminContentTab === "banners" ?
                            <td align="center">
                                <img src={`${serverUrl}/${item.srcbig}`} width={"450rem"}/>
                            </td>
                            : <td align="center">
                                <img src={`${serverUrl}/${item.thumb}`} width={"80rem"}/>
                            </td>
                            }
                            <td align="center">{item[adminContentListOrderProp]}
                                <span style={{margin: "10px"}}></span>
                                <input style={{width: "2rem", height: "2rem"}}/>
                            </td>
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