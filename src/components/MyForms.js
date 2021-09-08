import React, { useState } from 'react';

const MyForms = () => {
    const [user, setUser] = useState({
        Fname: '',
        Lname: '',
        Password: '',
        Email: '',
        subscribe: false,
        option: 'Choose your option'
    })
    const [errors, setErrors] = useState({
        FnameError: '',
        LnameError: '',
        PasswordError: '',
        EmailError: ''
    })
    const [showBtn, setshowBtn] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
    })
    const HandleUser = (e) => {
        let user = e.target.id;
        if (user === "first_name") {
            setUser((prev) => {
                return { ...prev, Fname: e.target.value }
            })
            if (e.target.value.length === 0) {
                setErrors((prev) => {
                    return { ...prev, FnameError: '' }
                })
                setshowBtn((prev) => {
                    return { ...prev, one: false }
                })
            }
            else if (e.target.value.length < 4) {
                setErrors((prev) => {
                    return { ...prev, FnameError: 'FirstName Must be Up to 4 Characters' }
                })
                setshowBtn((prev) => {
                    return { ...prev, one: false }
                })
            }
            else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
                setErrors((prev) => {
                    return { ...prev, FnameError: 'FirstName Must Have Only Alphabets' }
                })
                setshowBtn((prev) => {
                    return { ...prev, one: false }
                })
            } else {
                setErrors((prev) => {
                    return { ...prev, FnameError: '' }
                })
                setshowBtn((prev) => {
                    return { ...prev, one: true }
                })
            }
        } else if (user === "last_name") {
            setUser((prev) => {
                return { ...prev, Lname: e.target.value }
            })
            if (e.target.value.length === 0) {
                setErrors((prev) => {
                    return { ...prev, LnameError: '' }
                })
                setshowBtn((prev) => {
                    return { ...prev, two: false }
                })
            }
            else if (e.target.value.length < 4) {
                setErrors((prev) => {
                    return { ...prev, LnameError: 'LastName Must be Up to 4 Characters' }
                })
                setshowBtn((prev) => {
                    return { ...prev, two: false }
                })
            } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
                setErrors((prev) => {
                    return { ...prev, LnameError: 'LastName Must Have Only Alphabets' }
                })
                setshowBtn((prev) => {
                    return { ...prev, two: false }
                })
            } else {
                setErrors((prev) => {
                    return { ...prev, LnameError: '' }
                })
                setshowBtn((prev) => {
                    return { ...prev, two: true }
                })
            }
        } else if (user === "password") {
            setUser((prev) => {
                return { ...prev, Password: e.target.value }
            })
            if (e.target.value.length === 0) {
                setErrors((prev) => {
                    return { ...prev, PasswordError: '' }
                })
                setshowBtn((prev) => {
                    return { ...prev, three: false }
                })
            }
            else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(e.target.value)) {
                setErrors((prev) => {
                    return { ...prev, PasswordError: 'Password must have at least one uppercase, one lowercase, one number, one special character, and must be up to 8 characters.' }
                })
                setshowBtn((prev) => {
                    return { ...prev, three: false }
                })
            } else {
                setErrors((prev) => {
                    return { ...prev, PasswordError: '' }
                })
                setshowBtn((prev) => {
                    return { ...prev, three: true }
                })
            }
        } else if (user === "check") {
            setUser((prev) => {
                return { ...prev, subscribe: !prev.subscribe }
            })
        } else if (user === "option") {
            setUser((prev) => {
                return { ...prev, option: e.target.value }
            })
        } else {
            setUser((prev) => {
                return { ...prev, Email: e.target.value }
            })
            if (e.target.value.length === 0) {
                setErrors((prev) => {
                    return { ...prev, EmailError: '' }
                })
                setshowBtn((prev) => {
                    return { ...prev, four: false }
                })
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
                setErrors((prev) => {
                    return { ...prev, EmailError: 'Invalid Email Address' }
                })
                setshowBtn((prev) => {
                    return { ...prev, four: false }
                })
            }
            else {
                setErrors((prev) => {
                    return { ...prev, EmailError: '' }
                })
                setshowBtn((prev) => {
                    return { ...prev, four: true }
                })
            }
        }
    }
    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        setUser({
            Fname: '',
            Lname: '',
            Password: '',
            Email: '',
            subscribe: false,
            option: "Choose your option"

        })
    }
    return (
        <div className="container">
            <div className="row">
                <form onSubmit={HandleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" value={user.Fname} type="text" className="validate" onChange={HandleUser} />
                            <label htmlFor="first_name">First Name</label>
                            <span className="red-text">{errors.FnameError}</span>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" value={user.Lname} type="text" className="validate" onChange={HandleUser} />
                            <label htmlFor="last_name">Last Name</label>
                            <span className="red-text">{errors.LnameError}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" value={user.Password} type="password" className="validate" onChange={HandleUser} />
                            <label htmlFor="password">Password</label>
                            <span className="red-text">{errors.PasswordError}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" value={user.Email} type="email" className="validate" onChange={HandleUser} />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">{errors.EmailError}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <p>
                                <label>
                                    <input id="check" type="checkbox" onChange={HandleUser} checked={user.subscribe} />
                                    <span>Subscribe to our newsletter</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <select id='option' value={user.option} onChange={HandleUser}>
                                <option>Choose your option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {showBtn.one && showBtn.two && showBtn.three && showBtn.four
                            ? <button type="submit" className="btn waves-effect waves-light" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                            : <button className="btn" disabled>Submit
                                <i className="material-icons right">send</i>
                            </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyForms
