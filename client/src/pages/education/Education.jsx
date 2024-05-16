import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./education.css"
import Logo from "../../images/cdcfib-logo.png";
import Check from "../../images/check.png";

const Education = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
      tertiary: '',
      course: '',
      qualification: '',
      year: ''
    });
  
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(inputs);
  
    const handleSubmit = (e) => {
      e.preventDefault();

      // For now, let's use local storage
      localStorage.setItem('tertiaryInfo', JSON.stringify(inputs));
      
      // Move to the next component (passport photograph component)
      navigate('/summary');
    };


  return (
    <div className="education container-fluid">
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
                        <div className="menu active">
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
                        <h1 className="p-Info">Tertiary Education</h1>
                        <p>John Doe</p>
                        <p>Application Code: <span className="p-Info">07FS2024-95030406</span></p>

                        <form className="row g-3 mt-5" onSubmit={handleSubmit}>
                            <div className="col-lg-12">
                                <label for="inputTertiary4" className="form-label">Name of your tertiary institution*</label>
                                <input type="text" className="form-control" id="inputTertiary4" name="tertiary" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-6">
                                <label for="inputCourse4" className="form-label">Course Studied*</label>
                                <input type="text" className="form-control" id="inputCourse4" name="course" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-6">
                                <label for="inputQualification4" className="form-label">Qualification*</label>
                                <input type="text" className="form-control" id="inputQualification4" name="qualification" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-3">
                                <label for="inputYear4" className="form-label">Year Graduated*</label>
                                <input type="text" className="form-control" id="inputYear4" name="year" onChange={handleChange} required/>
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

export default Education