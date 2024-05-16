import { useNavigate } from 'react-router-dom';
import "./summary.css"
import Logo from "../../images/cdcfib-logo.png";
import Check from "../../images/check.png";
import Passport from "../../images/passport.jpg";
import { useEffect, useState } from 'react';

const Summary = () => {

    const navigate = useNavigate();

    const [personalInfo, setPersonalInfo] = useState({});
    const [tertiaryInfo, setTertiaryInfo] = useState({});

    useEffect(() => {
        // Retrieve data from local storage for different keys
        const storedPersonalInfo = localStorage.getItem('personalInfo');
        const storedTertiaryInfo = localStorage.getItem('tertiaryInfo');

        storedPersonalInfo && setPersonalInfo(JSON.parse(storedPersonalInfo));
        storedTertiaryInfo &&  setTertiaryInfo(JSON.parse(storedTertiaryInfo));

      }, [])
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      localStorage.removeItem('personalInfo');
      localStorage.removeItem('tertiaryInfo');
      // Move to the next component (passport photograph component)
      navigate('/');
    };


  return (
    <div className="summary container-fluid">
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
                        <div className="menu">
                            <img src={Check} alt="" />
                            <span>Passport Photograph</span>
                        </div>
                        <div className="menu">
                            <img src={Check} alt="" />
                            <span>Tertiary Education</span>
                        </div>
                        <div className="menu active">
                            <img src={Check} alt="" />
                            <span>Summary</span>
                        </div>
                        <div className="menu">
                            <img src={Check} alt="" />
                            <span>Logout</span>
                        </div>
                    </div>

                    <div className="col-lg-8 details">
                        <h1 className="p-Info">Summary</h1>
                        <p>John Doe</p>
                        <p>Application Code: <span className="p-Info">07FS2024-95030406</span></p>

                        <div className="p-infoDiv">
                            <div className="personal-div">
                                <div className="logoDiv">
                                    <img src={Logo} alt="" />
                                    <div className="p-details">
                                        <span>{personalInfo.name}</span>
                                        <span>Assitant General of Fire</span>
                                        <span>07FS2024-95030406</span>
                                    </div>
                                </div>
                                <div className="passport-div">
                                    <img src={Passport} alt="" />
                                </div>
                            </div>

                            <div className="d-top">
                                <div className="user-details">
                                    <span>Full name</span>
                                    <span>{personalInfo.name}</span>
                                </div>
                                <div className="user-details">
                                    <span>Email</span>
                                    <span>John@gmail.com</span>
                                </div>
                                <div className="user-details hidden"></div>
                                <div className="user-details">
                                    <span>Phone Number</span>
                                    <span>09035537330</span>
                                </div>
                            </div>

                            <div className="d-top">
                                <div className="user-details">
                                    <span>National Identity Number (NIN)</span>
                                    <span>{personalInfo.nin}</span>
                                </div>
                                <div className="user-details">
                                    <span>Address</span>
                                    <span>{personalInfo.address}</span>
                                </div>
                                <div className="user-details">
                                    <span>City</span>
                                    <span>{personalInfo.city}</span>
                                </div>
                                <div className="user-details">
                                    <span>WhatsApp</span>
                                    <span>{personalInfo.whatsAppNumber}</span>
                                </div>
                            </div>

                            <div className="d-top">
                                <div className="user-details">
                                    <span>State</span>
                                    <span>{personalInfo.state}</span>
                                </div>
                                <div className="user-details">
                                    <span>LGA</span>
                                    <span>{personalInfo.lga}</span>
                                </div>
                                <div className="user-details">
                                    <span>Gender</span>
                                    <span>Male</span>
                                </div>
                                <div className="user-details">
                                    <span>Marital Status</span>
                                    <span>{personalInfo.marital}</span>
                                </div>
                            </div>

                            <div className="d-top">
                                <div className="user-details">
                                    <span>Religion</span>
                                    <span>{personalInfo.religion}</span>
                                </div>
                                <div className="user-details">
                                    <span>Date of Birth</span>
                                    <span>11/07/1996</span>
                                </div>
                                <div className="user-details hidden"></div>
                                <div className="user-details hidden"></div>
                            </div>


                        </div>

                        <div className="eduDiv">
                            <p>Tertiary Education</p>
                            <hr />

                            <div className="d-top">
                                <div className="user-details">
                                    <span>School</span>
                                    <span>{tertiaryInfo.tertiary}</span>
                                </div>
                                <div className="user-details">
                                    <span>Course Studied</span>
                                    <span>{tertiaryInfo.course}</span>
                                </div>
                                <div className="user-details">
                                    <span>Qualification</span>
                                    <span>{tertiaryInfo.qualification}</span>
                                </div>
                                <div className="user-details">
                                    <span>Year Graduated</span>
                                    <span>{tertiaryInfo.year}</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 continue-btn">
                            <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
                        </div>

                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Summary