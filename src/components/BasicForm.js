import { useState } from "react"
import useInput from "../hooks/use-input"

const BasicForm = (props) => {
    const {
        value: enteredFname,
        isValid: enteredFnameIsValid,
        hasError: FnameInputHasError,
        valueChangeHandler: FnameChangeHandler,
        inputBlurHandler: FnameInputBlurHandler,
        reset: resetFnameInput,
    } = useInput((value) => value.trim() !== "")

    const {
        value: enteredLname,
        isValid: enteredLnameIsValid,
        hasError: LnameInputHasError,
        valueChangeHandler: LnameChangeHandler,
        inputBlurHandler: LnameInputBlurHandler,
        reset: resetLnameInput,
    } = useInput((value) => value.trim() !== "")

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes("@"))

    let formIsValid = false
    if (enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }

        resetFnameInput()
        resetLnameInput()
        resetEmailInput()
    }

    const FnameInputClasses = FnameInputHasError
        ? "form-control invalid"
        : "form-control"

    const LnameInputClasses = LnameInputHasError
        ? "form-control invalid"
        : "form-control"

    const emailInputClasses = emailInputHasError
        ? "form-control invalid"
        : "form-control"

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">
                <div className={FnameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={FnameChangeHandler}
                        onBlur={FnameInputBlurHandler}
                        value={enteredFname}
                    />
                    {FnameInputHasError && (
                        <p className="error-text">
                            Please enter a valid First Name.
                        </p>
                    )}
                </div>
                <div className={LnameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={LnameChangeHandler}
                        onBlur={LnameInputBlurHandler}
                        value={enteredLname}
                    />
                    {LnameInputHasError && (
                        <p className="error-text">
                            Please enter a valid Last Name.
                        </p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className="error-text">Please enter a valid Email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default BasicForm
