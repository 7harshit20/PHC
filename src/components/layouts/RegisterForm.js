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
                                <div className="row">
                                    <div className="form-group col">
                                        <input type="text" className="form-control" id="firstName" placeholder="FirstName" />
                                    </div>
                                    <div className="form-group col">
                                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                    <div className="form-group col">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label for="inputZip">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" for="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>

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
