import React from 'react';

const RegisterForm = () => {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Register
            </button>
            <div className="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form>
                        <div class="mb-3">
                            <label class="small mb-1" for="inputemail">Email address</label>
                            <input class="form-control" id="inputemail" type="email" placeholder="Your e-mail"/>
                        </div>
                        
                        <div class="row gx-6 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputRollno">Rollno</label>
                                <input class="form-control" id="inputRollno" type="text" placeholder="Enter your Rollno" />
                            </div>                  
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputName">Name</label>
                                <input class="form-control" id="inputName" type="text" placeholder="Enter your Name"/>
                            </div>
                        </div> 
                        <div class="row gx-3 mt-3 mb-3">
                            <div class="col-md-2">
                                <label class="small mb-1" for="inputGender">Gender</label>
                                <select class="form-select" aria-label="Select Your Gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label class="small mb-1" for="inputBirthday">Birthday</label>
                                <input class="form-control" id="inputBirthday" type="date" name="birthday" placeholder="Enter your birthday"/>
                            </div>
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="integer" placeholder="Enter your phone number"/>
                            </div>
                        </div>
                        <div class="row gx-3 mt-3 mb-3">
                        <label class="small mb-1" for="inputAddress">Set Password</label>
                            <div class="col-md-6">
                                <input type="password" class="form-control" id="inputPassword" aria-label="Password"  placeholder='Password'/>                                   
                            </div>
                            <div class="col-md-6">
                                <input type="password" class="form-control" id="inputConfirmPassword" aria-label="Password"  placeholder='Confirm Password'/>    
                            </div>
                        </div>
                    </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm


// Name email gender birthdate password roll no phone no 