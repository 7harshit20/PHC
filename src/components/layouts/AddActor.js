import React,{useState} from 'react'

const AddDoctor = () => {
    const [form, setForm] = useState({
        role:'',
        name: '',
        email: '',
        password: '',
        cnf_password: '',
    })
    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
  return (
    <div class="container-xl px-4">
        <h3 className="text-center">Create New account</h3>
    <div class="row mt-3">
        <div class="col-xl-8" style={{margin:"auto"}}> 
            <div class="card mb-4" >
                <div class="card-header">Account Details</div>
                <div class="card-body">
                <form>
                    <div className="mb-3">
                     <select class="form-select" aria-label="Select Actor" onChange={onChange} name='role'>
                        <option value="" disabled selected hidden>Select Actor</option>
                        <option value="1">Doctor</option>
                        <option value="2">Compounder</option>
                        <option value="3">Admin</option>
                     </select>
                    </div>
                    <div class="mb-3">
                        <label class="small mb-1" for="inputemail">Email address</label>
                        <input onChange={onChange} required={true} name="email" class="form-control" id="inputemail" type="email" placeholder="Enter actor's e-mail" />
                    </div>
                    <div class="mb-3">
                        <label class="small mb-1" for="inputName">Name</label>
                        <input onChange={onChange} required={true} name="name" class="form-control" id="inputName" type="text" placeholder="Enter actor's Full name" />
                    </div>
                    <div class="row gx-3 mt-3 mb-3">
                        <label class="small mb-1" for="inputAddress">Set Password</label>
                        <div class="col-md-6">
                            <input onChange={onChange} required={true} name="password" type="password" class="form-control" id="inputPassword" aria-label="Password" placeholder='Password' />
                        </div>
                        <div class="col-md-6">
                            <input onChange={onChange} required={true} name="cnf_password" type="password" class="form-control" id="inputConfirmPassword" aria-label="Password" placeholder='Confirm Password' />
                        </div>
                    </div>
                    <div class="d-grid gap-2 mt-5">
                    <button class="btn btn-primary" type="button">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddDoctor
