import { useNavigate } from 'react-router-dom';
import "./passportPhotograph.css"
import Logo from "../../images/cdcfib-logo.png";
import Check from "../../images/check.png";
import UploadImg from "../../images/file-upload.svg";


const PassportPhotograph = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Move to the next component (passport photograph component)
        navigate('/education');
      };

    return (
        <div className="passport container-fluid">
            <div className="row">
                <div className="navbar"></div>
            </div>

            <div className="row">
                <div className="col-10 wrapper-item shadow">
                    <div className="logo-div">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="row info-div">
                        <div className="col-lg-4 info-col">
                            <div className="menu">
                                <img src={Check} alt="" />
                                <span>Personal Information</span>
                            </div>
                            <div className="menu active">
                                <img src={Check} alt="" />
                                <span>Passport Photograph</span>
                            </div>
                            <div className="menu">
                                <img src={Check} alt="" />
                                <span>Tertiary Education</span>
                            </div>
                            <div className="menu">
                                <img src={Check} alt="" />
                                <span>Summary</span>
                            </div>
                            <div className="menu">
                                <img src={Check} alt="" />
                                <span>Logout</span>
                            </div>
                        </div>

                        <div className="col-lg-8 details">

                            <div className="p-header">
                                <p>Upload your Passport photograph with a <b>maximum size of 80KB*</b></p>
                                <p>You may need to seek help on how to resize/compress your passport photograph.</p>
                                <p>Click in the box or button below to upload your photo.</p>
                            </div>

                            <form className="row g-3 mt-3" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="upload-div">
                                        <div className="file-input">
                                            <input type="file" id="file" style={{ display: "none" }} />
                                            <label htmlFor="file" className="file-input-label">
                                                <img src={UploadImg} alt="" width={80}/> upload passport
                                            </label>
                                        </div>
                                        <div className="uploaded-img"></div>
                                    </div>
                                </div>

                                <div className="col-12 continue-btn">
                                    <p>* required field</p>
                                    <button type="submit" className="btn">Save and Continue</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PassportPhotograph