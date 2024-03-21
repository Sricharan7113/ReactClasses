import React from 'react'

export default function Logout() {

    localStorage.removeItem("StoreToken");
    window.location.href="/";
 
}
