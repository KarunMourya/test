import { Button } from "../../Components/button/Button";
export default function Logout() {
  return (
    <>
      <div>
        <div>{/* <img src={}/> */}</div>
        <div>
          <h4>Are you sure want to logout?</h4>
        </div>
        <div>
          <div>
            <Link href="/">Logout</Link>
          </div>
          <div>
            <Button value="Stay" />
          </div>
        </div>
      </div>
    </>
  );
}
/*
import React from 'react'
import { baseUrl } from '../assets/js/helpers';

export default () => {
  const logout = () => {
    window.localStorage.clear();
    window.location.href = baseUrl + "login";
  }

  return (
    <button onClick={logout}>Logout</button>
  )
}
*/
