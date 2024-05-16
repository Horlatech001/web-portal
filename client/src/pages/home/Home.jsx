import "./home.css"
import Logo from "../../images/cdcfib-logo.png";
import Check from "../../images/check.png";
import axios from 'axios';
import { useState } from "react";

const Home = () => {

    const [userData, setUserData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        position: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });
      const [passwordError, setPasswordError] = useState("")

      const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      }

    const handleClick = async (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            setPasswordError("Passwords do not match!")
            // Handle password mismatch
            return;
          }
      
          // Exclude confirmPassword from the data sent in the API request
          const { confirmPassword, ...registrationData } = userData;

        try {
            const response = await axios.post('http://localhost:8800/api/auth/register', registrationData);
      
            if (!response.data) {
              throw new Error('No data received');
            }
      
            const { token } = response.data;
      
            console.log(response.data);
            // Save the token in localStorage
            localStorage.setItem('jwtToken', token);
      
            // Optionally, perform any other actions after successful registration
            console.log('Registration successful!');
  
          } catch (error) {
            console.error('Registration failed:', error.message);
            // Handle registration failure here
          }
        };

  return (
    <div className="home container-fluid">
        <div className="row">
            <div className="navbar"></div>
        </div>

        <div className="row">
            <div className="col-10 wrapper-item shadow">
                <div className="logo-div">
                    <img src={Logo} alt="" />
                </div>

                <div className="instructions">
                    <h3>PLEASE NOTE THE FOLLOWING</h3>
                    <hr className="line"/>
                    <div className="instruction">
                        <img src={Check} alt="" />
                        <span>If you have enabled Do Not Disturb (DND) you may not be able to receive our SMS.</span>
                    </div>
                    <div className="instruction">
                        <img src={Check} alt="" />
                        <span>This application is ABSOLUTELY FREE. Please ignore every scheme that solicits for any form of payment.</span>
                    </div>
                    <div className="instruction">
                        <img src={Check} alt="" />
                        <span>An APPLICATION CODE will be generated after filling the form below. PLEASE ENSURE YOU MEMORIZE OR COPY THE NUMBER. IT WILL BE REQUIRED FOR SUBSEQUENT LOGIN AND FUTURE REFERENCES.</span>
                    </div>
                    <div className="instruction">
                        <img src={Check} alt="" />
                        <span>You would be asked to upload an electronic passport photograph not more than 80KB in size. You may need to seek help on how to resize/compress your passport photograph.</span>
                    </div>
                </div>

                <div className="login-btn">
                    <button className="btn">Login if you have already registered</button>
                </div>

                <div className="home-form">    
                    <form className="row g-3">
                        <div className="col-lg-4">
                            <label htmlFor="inputFirstname4" className="form-label">Firstname*</label>
                            <input type="text" className="form-control" id="inputFirstname4" name="firstName" onChange={handleChange}/>
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="inputMiddlename4" className="form-label">Middlename</label>
                            <input type="text" className="form-control" id="inputMiddlename4" name="middleName" onChange={handleChange}/>
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="inputLastname4" className="form-label">Lastname*</label>
                            <input type="text" className="form-control" id="inputLastName4" name="lastName" onChange={handleChange}/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPosition4" className="form-label">Position you are applying for*</label>
                            <select className="form-select" aria-label="Default select example" defaultValue="Choose" name="position" onChange={handleChange}>
                                <option value="Choose" disabled>Choose</option>
                                <option value="Inspector of Fire">Inspector of Fire</option>
                                <option value="Assistant Inspector of Fire (AIF)">Assistant Inspector of Fire (AIF)</option>
                                <option value="Fire Assistant (FA I)">Fire Assistant (FA I)</option>
                                <option value="Fire Assistant II (FA II)">Fire Assistant II (FA II)</option>
                            </select>

                        </div>
                        <div className="col-lg-8">
                            <label htmlFor="inputEmail4" className="form-label">Email*</label>
                            <input type="email" className="form-control" id="inputEmail4" name="email" onChange={handleChange}/>
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="inputPhone4" className="form-label">Phone Number*</label>
                            <input type="text" className="form-control" id="inputPhone4" name="phone" onChange={handleChange}/>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="inputPassword4" className="form-label">Password*</label>
                            <input type="password" className="form-control" id="inputPassword4" name="password" onChange={handleChange}/>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="inputCpassword4" className="form-label">Confirm Password*</label>
                            <input type="password" className="form-control" id="inputCpassword4" name="confirmPassword" onChange={handleChange}/>
                            {passwordError && <p className="error-message mt-1" style={{color:'red'}}>{passwordError}</p>}
                        </div>
                        <div className="col-12 continue-btn">
                            <p>* required field</p>
                            <button type="submit" className="btn" onClick={handleClick}>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="footer col-10">
                <p> &copy; 2024 Horlatech Portal. All rights reserved</p>
            </div>
        </div>
        
    </div>
  )
}

export default Home