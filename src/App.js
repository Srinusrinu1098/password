import {Component} from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="card-container">
          <div className="card2-container">
            <p className="para">Add new password</p>
            <div className="flex">
              <div className="img-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
              />
            </div>
            <div className="flex">
              <div className="img-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-logo"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
              />
            </div>
            <div className="flex">
              <div className="img-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-logo"
                />
              </div>
              <input
                type="text"
                className="input"
                placeholder="Enter Password"
              />
            </div>
            <div className="button-flex">
              <button type="button" className="button">
                Add
              </button>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="pass-img"
          />
        </div>

        <div className="card-container3">
          <div className="bottom-flex">
            <div className="flexing">
              <p className="para1">Your Password</p>
              <div className="span">
                <p className="span1">0</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-logo1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="input-logo"
                />
              </div>
              <input type="text" className="input1" placeholder="Search" />
            </div>
          </div>
          <hr />
          <div className="check-box">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label">
              Show Password
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default App
