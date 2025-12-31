import { useContext, useEffect } from "react";

import { AppContext } from "../../state/AppContext";
import { Loader } from "../../styles/global";
import { AdminBtn, ContentListContainerDiv, ContentListTable } from "../../styles/admin";
import useCapitalized from "../../hooks/useCapitalized";
import { serverUrl } from "../../api/app.api";

export default function AdminContentList () {
    const { 
        isAdminDarkMode,
        isAdminLoggedIn,
        adminContentTab,
        loadAdminContentList,
        adminContentList,
        adminContentListOrderProp,
        adminContentErrorMessage, 
        isAdminContentLoading,
        displayConfirmPopup,
        setAdminConfirmPopupSuccessMsg,
        setAdminSelectedObject,
        setIsAdminMainForm,
        setMainFormCrud
    } = useContext(AppContext);

    useEffect(() => {
        loadAdminContentList("banners")
    }, [])

    return(
        <>{isAdminLoggedIn? <ContentListContainerDiv
            $dark_mode={isAdminDarkMode}
        >
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
                <ContentListTable
                     $dark_mode={isAdminDarkMode}
                >
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
                                Order <span style={{margin: "10px"}}></span> <AdminBtn
                                        $dark_mode={isAdminDarkMode}
                                        type="button"
                                        onClick={()=>{
                                            displayConfirmPopup("Save Changes?");
                                            setAdminConfirmPopupSuccessMsg("Successfully Saved!")
                                        }}
                                    >Save</AdminBtn>
                            </th>
                            <th style={{width: "10rem"}} align="center">
                                <AdminBtn 
                                    $dark_mode={isAdminDarkMode}
                                    type="button" 
                                    id="add-button"
                                    onClick={()=> {
                                            setIsAdminMainForm(true)
                                            setAdminSelectedObject(undefined)
                                            setMainFormCrud("New")
                                        }}
                                >+</AdminBtn>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
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
                            <td align="center">
                                <input 
                                    style={{width: "3rem", height: "2rem", paddingLeft: ".5rem"}}
                                    placeholder={item[adminContentListOrderProp]}
                                />
                            </td>
                            <td align="center">
                                <AdminBtn 
                                    $dark_mode={isAdminDarkMode}
                                    type="button"
                                    onClick={()=>{
                                        setIsAdminMainForm(true)
                                        setAdminSelectedObject(item)
                                        setMainFormCrud("Update")
                                    }}
                                >Edit</AdminBtn>  <AdminBtn 
                                    $dark_mode={isAdminDarkMode}
                                    type="button"
                                    onClick={()=>{
                                        displayConfirmPopup("Delete Entry?");
                                        setAdminConfirmPopupSuccessMsg("Successfully Deleted!")
                                    }}
                                >Delete</AdminBtn>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </ContentListTable>
            }
        </ContentListContainerDiv>: null
        }</>
    )
};