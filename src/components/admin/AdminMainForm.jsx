import { useContext, useEffect, useRef } from "react";
import { AdminBtn, MainFormContainer, MainFormDiv } from "../../styles/admin";
import { AppContext } from "../../state/AppContext";
import { serverUrl } from "../../api/app.api";
import { useOncePostMount } from "../../hooks/useOncePostMount";

export default function AdminMainForm () {
    const {
        isAdminDarkMode,
        isAdminLoggedIn,
        isAdminMainForm,
        setIsAdminMainForm,
        mainFormCrud,
        adminSelectedObject,
        setAdminSelectedObject,
        adminContentTab
    } = useContext(AppContext)

    const formTitleInput = useRef();
    const formDescTextArea = useRef();
    const formTypeSelect = useRef();
    const formNewCheckbox = useRef();

    useOncePostMount(()=>{
        if(isAdminLoggedIn && isAdminMainForm){
            formTitleInput.current.defaultValue = adminSelectedObject? adminSelectedObject.title : ""
            formDescTextArea? (formDescTextArea.current.defaultValue = adminSelectedObject? adminSelectedObject.description : "") : null
            formTypeSelect? (formTypeSelect.current.value = adminSelectedObject? adminSelectedObject.type : "") : null
            formNewCheckbox? (formNewCheckbox.current.checked = adminSelectedObject? adminSelectedObject.new : false) : null
        }
    });

    useEffect(()=>{
        if(isAdminLoggedIn && isAdminMainForm){
            formTitleInput.current.defaultValue = adminSelectedObject? adminSelectedObject.title : ""
            formDescTextArea? (formDescTextArea.current.defaultValue = adminSelectedObject? adminSelectedObject.description : "") : null
            formTypeSelect? (formTypeSelect.current.value = adminSelectedObject? adminSelectedObject.type : "") : null
            formNewCheckbox? (formNewCheckbox.current.checked = adminSelectedObject? adminSelectedObject.new : false) : null
        }
    },[adminSelectedObject]);

    const resetForm = () => {
        formTitleInput.current.defaultValue = ""
        formDescTextArea? (formDescTextArea.current.defaultValue = ""): null
        formTypeSelect? (formTypeSelect.current.value = "") : null
        formNewCheckbox? (formNewCheckbox.current.checked = false) : null
    };

    return(
        <>{isAdminLoggedIn && isAdminMainForm? <MainFormContainer
            $dark_mode={isAdminDarkMode}
        >
            <MainFormDiv
                $dark_mode={isAdminDarkMode}
            >
                <form>
                    <fieldset className="form-inputs">
                        <legend>{mainFormCrud} {adminContentTab === "banners"? "Banner": "Game"}</legend>
                        <div>
                            <p>Title:</p>
                            <p>
                                <input
                                    type="text"
                                    autoComplete="off" 
                                    ref={formTitleInput}
                                    name="title" 
                                    id="title"
                                />
                            </p>
                            <p className={adminContentTab === "banners"? "hidden" : ""}>Description:</p>
                            <p className={adminContentTab === "banners"? "hidden" : ""}>
                                <textarea
                                    autoComplete="off"
                                    ref={formDescTextArea}
                                    name="description" 
                                    id="description" 
                                    rows={4}
                                    cols={38}
                                />
                            </p>
                        </div>
                        <div>
                            <p className={adminContentTab === "banners"? "hidden" : ""}>Type:</p>
                            <p className={adminContentTab === "banners"? "hidden" : ""}>
                                <select
                                    style={{minWidth: "10rem"}}
                                    autoComplete="off" 
                                    ref={formTypeSelect}
                                    name="type" 
                                    id="type"
                                >
                                    <option value=""></option>
                                    <option value="slot">Slot</option>
                                    <option value="table">Table</option>
                                </select>
                            </p>
                            <p className={adminContentTab === "banners"? "hidden" : ""}>New:</p>
                            <p className={adminContentTab === "banners"? "hidden" : ""}>
                                <input 
                                    type="checkbox"
                                    id="new"
                                    name="new"
                                    ref={formNewCheckbox}
                                />
                            </p>
                            <p>{adminContentTab === "banners"? "Big Image" : "Image"}:</p>
                            <p>
                                {
                                adminSelectedObject && adminContentTab === "banners" ?
                                <><img src={`${serverUrl}/${adminSelectedObject.srcbig}`} width={"180rem"}/><br /></>
                                : adminSelectedObject ? 
                                <><img src={`${serverUrl}/${adminSelectedObject.thumb}`} width={"80rem"}/><br /></>
                                : ""}
                                <AdminBtn $dark_mode={isAdminDarkMode} type="button" className="level2-btn" >New Image</AdminBtn>
                            </p>
                            <p>{adminContentTab === "banners" ? "Small Image" : "Wide Image"}:</p>
                            <p>
                                {
                                adminSelectedObject && adminContentTab === "banners" ?
                                <><img src={`${serverUrl}/${adminSelectedObject.srcsmall}`} width={"180rem"}/><br /></>
                                : adminSelectedObject ? 
                                <><img src={`${serverUrl}/${adminSelectedObject.thumbwide}`} width={"80rem"}/><br /></>
                                : ""}
                                <AdminBtn $dark_mode={isAdminDarkMode} type="button" className="level2-btn" >New Image</AdminBtn>
                            </p>
                        </div>
                    </fieldset>
                    <fieldset className="form-buttons">
                        <AdminBtn $dark_mode={isAdminDarkMode} className="level2-btn" type="reset" onClick={
                            ()=> resetForm()
                        }>Reset</AdminBtn>
                        <AdminBtn $dark_mode={isAdminDarkMode} className="level2-btn" type="button" id="submit-form">Submit</AdminBtn>
                    </fieldset>
                    <AdminBtn $dark_mode={isAdminDarkMode} type="button" className="close-button level2-btn" onClick={
                        ()=>{setIsAdminMainForm(false), setAdminSelectedObject(undefined)}
                        }>X</AdminBtn>
                </form>
            </MainFormDiv>
        </MainFormContainer> : null} </>
    )
};