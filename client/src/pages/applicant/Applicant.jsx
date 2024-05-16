import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./applicant.css"
import Logo from "../../images/cdcfib-logo.png";
import Check from "../../images/check.png";

const Applicant = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
      name: '',
      whatsAppNumber: '',
      address: '',
      city: '',
      state: '',
      lga: '',
      marital: '',
      religion: '',
      nin: '',
      dob: '',
      gender: ''
    });
  
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
      
    console.log(inputs);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Move to the next component (passport photograph component)
      navigate('/passport');
    };


  return (
    <div className="applicant container-fluid">
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
                        <div className="menu active">
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
                        <h1 className="p-Info">Personal Information</h1>
                        <p>John Doe</p>
                        <p>Application Code: <span className="p-Info">07FS2024-95030406</span></p>

                        <form className="row g-3 mt-5" onSubmit={handleSubmit}>
                            <div className="col-lg-6">
                                <label for="inputName4" className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputName4" name="name" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-6">
                                <label for="inputWhatsApp4" className="form-label">WhatsApp Number*</label>
                                <input type="text" className="form-control" id="inputWhatsApp4" name="whatsAppNumber" placeholder="input your whatsApp number" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-8">
                                <label for="inputAddress4" className="form-label">Address*</label>
                                <input type="text" className="form-control" id="inputAddress4" name="address" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-4">
                                <label for="inputCity4" className="form-label">City*</label>
                                <input type="text" className="form-control" id="inputCity4" name="city" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-6">
                                <label for="inputState4" className="form-label">State of Origin*</label>
                                <input type="text" className="form-control" id="inputState4" name="state" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-6">
                                <label for="inputLga4" className="form-label">Local Govt. Area*</label>
                                <input type="text" className="form-control" id="inputLga4" name="lga" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-6">
                                <label for="inputMarital4" className="form-label">Marital Status*</label>
                                <input type="text" className="form-control" id="inputMarital4" name="marital" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-6">
                                <label for="inputReligion4" className="form-label">Religion*</label>
                                <input type="text" className="form-control" id="inputReligion4" name="religion" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-4">
                                <label for="inpuNin4" className="form-label">National Identification Number*</label>
                                <input type="text" className="form-control" id="inpuNin4" placeholder="NIN" name="nin" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-4">
                                <label for="inpuDob4" className="form-label">Date of Birth*</label>
                                <input type="date" className="form-control" id="inpuDob4" name="dob" onChange={handleChange} required/>
                            </div>
                            <div className="col-lg-4">
                                <label for="inputGender4" className="form-label">Gender*</label>
                                <input type="text" className="form-control" id="inputGender4" name="gender" onChange={handleChange} required/>
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

export default Applicant