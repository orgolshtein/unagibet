import { useContext } from "react";
import { AdminBtn, MainFormContainer, MainFormDiv } from "../../styles/admin";
import { AppContext } from "../../state/AppContext";
import { serverUrl } from "../../api/app.api";

export default function AdminMainForm () {
    const {
        isAdminDarkMode,
        isAdminLoggedIn,
        isAdminMainForm,
        setIsAdminMainForm,
        mainFormContent,
        adminSelectedObject,
        adminContentTab
    } = useContext(AppContext)

    return(
        <>{isAdminLoggedIn && isAdminMainForm? <MainFormContainer
            $dark_mode={isAdminDarkMode}
        >
            <MainFormDiv
                $dark_mode={isAdminDarkMode}
            >
                <form>
                    <fieldset className="form-inputs">
                        <legend>{mainFormContent[0]}</legend>
                        <div>
                            <p>{mainFormContent[1]}:</p>
                            <p>
                                <input
                                    type="text"
                                    autoComplete="off" 
                                    name={mainFormContent[1].toLowerCase()} 
                                    id={mainFormContent[1].toLowerCase()} 
                                    className="level2-input"
                                    defaultValue={adminSelectedObject? adminSelectedObject[mainFormContent[1].toLowerCase()] : ""}
                                />
                            </p>
                            {mainFormContent[2]? <>
                            <p>{mainFormContent[2]}:</p>
                            <p>
                                <textarea
                                    autoComplete="off" 
                                    name={mainFormContent[2].toLowerCase()} 
                                    id={mainFormContent[2].toLowerCase()} 
                                    className="level2-input"
                                    rows={4}
                                    cols={38}
                                    defaultValue={adminSelectedObject? adminSelectedObject[mainFormContent[2].toLowerCase()] : ""}
                                />
                            </p></>: ""}
                        </div>
                        <div>
                            {mainFormContent[3]? <>
                            <p>{mainFormContent[3]}:</p>
                            <p>
                                <select
                                    style={{minWidth: "10rem"}}
                                    autoComplete="off" 
                                    name={mainFormContent[3].toLowerCase()} 
                                    id={mainFormContent[3].toLowerCase()} 
                                    className="level2-input"
                                    defaultValue={adminSelectedObject? adminSelectedObject[mainFormContent[3].toLowerCase()] : ""}
                                >
                                    <option value=""></option>
                                    <option value="slot">Slot</option>
                                    <option value="table">Table</option>
                                </select>
                            </p></>: ""}
                            {mainFormContent[4]? <>
                            <p>{mainFormContent[4]}:</p>
                            <p>
                                <input 
                                    type="checkbox"
                                    id={mainFormContent[4].toLowerCase()}
                                    name={mainFormContent[4].toLowerCase()}
                                    className="level2-input"
                                    defaultChecked={adminSelectedObject && adminSelectedObject[mainFormContent[4].toLowerCase()]? true : false}
                                />
                            </p></>: ""}
                            <p>{adminContentTab === "banners" ? "Big Image" : "Image"}:</p>
                            <p>
                                {
                                adminSelectedObject && adminContentTab === "banners" ?
                                <><img src={`${serverUrl}/${adminSelectedObject[mainFormContent[5].toLowerCase()]}`} width={"180rem"}/><br /></>
                                : adminSelectedObject ? 
                                <><img src={`${serverUrl}/${adminSelectedObject[mainFormContent[5].toLowerCase()]}`} width={"80rem"}/><br /></>
                                : ""}
                                <AdminBtn $dark_mode={isAdminDarkMode} type="button" className="level2-btn" >New Image</AdminBtn>
                            </p>
                            <p>{adminContentTab === "banners" ? "Small Image" : "Wide Image"}:</p>
                            <p>
                                {
                                adminSelectedObject && adminContentTab === "banners" ?
                                <><img src={`${serverUrl}/${adminSelectedObject[mainFormContent[6].toLowerCase()]}`} width={"180rem"}/><br /></>
                                : adminSelectedObject ? 
                                <><img src={`${serverUrl}/${adminSelectedObject[mainFormContent[6].toLowerCase()]}`} width={"80rem"}/><br /></>
                                : ""}
                                <AdminBtn $dark_mode={isAdminDarkMode} type="button" className="level2-btn" >New Image</AdminBtn>
                            </p>
                        </div>
                    </fieldset>
                    <fieldset className="form-buttons">
                        <AdminBtn $dark_mode={isAdminDarkMode} className="level2-btn" type="reset">Reset</AdminBtn>
                        <AdminBtn $dark_mode={isAdminDarkMode} className="level2-btn" type="button" id="submit-form">Submit</AdminBtn>
                    </fieldset>
                    <AdminBtn $dark_mode={isAdminDarkMode} type="button" className="close-button level2-btn" onClick={
                        ()=>setIsAdminMainForm(false)
                        }>X</AdminBtn>
                </form>
            </MainFormDiv>
        </MainFormContainer> : null} </>
    )
};