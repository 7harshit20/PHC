import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Button, Input, Icon, Message } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext'

const LoginForm = () => {
    // const authContext = {
    //     isAuthenicated: false,
    //     error: false,
    //     login: false,
    //     loadUser: false
    // };
    // const { isAuthenicated, error, login, loadUser } = authContext;

    const authContext = useContext(AuthContext);
    const { isAuthenicated, error, login, loadUser } = authContext;


    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const [err, setErr] = useState({
        type: null,
        msg: null
    })

    useEffect(() => {
        if (localStorage.getItem('authenticated')) loadUser();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (isAuthenicated) navigate('/doctor');
        setErr({ msg: error });

    }, [isAuthenicated, error, navigate])

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        login(form);
    }

    return (
        <Fragment>

            <h1 style={{ fontSize: '4vw' }} > <span style={{ color: 'green' }}>Health managament app for IIITDMJ.</span></h1>
            <br />
            {err.msg !== null ? <Message error header={err.msg} /> : null}

            <Input error={err.type === 'email'} name='email' type='email' placeholder='Email/Roll number' size='big' fluid focus onChange={onChange} /><br />

            <div class={`ui focus fluid big input ${err.type === 'password' ? 'error' : ''}`}><input name='password' type={!show ? 'password' : 'text'} placeholder="Password" onChange={onChange} /><button onClick={() => setShow(!show)} class={`ui basic icon button ${err.type === 'password' ? 'red' : 'teal'}`}><i aria-hidden="true" class={show ? 'eye slash icon' : 'eye icon'}></i></button></div> <br />

            <span style={{ fontSize: '15px' }} > <Link to='/'>Forgot Password?</Link> </span> <br /> <br />

            <Button type='submit' onClick={onSubmit} size='huge' style={{ borderRadius: '40px' }} positive fluid> <span style={{ fontSize: '20px' }}> <Icon name='sign-in'></Icon> Sign in </span> </Button>

        </Fragment>
    )
}

export default LoginForm
