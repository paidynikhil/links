import React from 'react'
import { Link } from 'react-router-dom'
import './Css/Footer.css'
import { FaShareSquare } from 'react-icons/fa'
import { MdOutgoingMail } from "react-icons/md";

export default function Footer() {
    return (
        <footer>
        <p className='footer-title'>Suggestions and Remarks?</p>
            <div className="footer-link">
                <Link to="mailto:paidynikhil@gmail.com">Contact Us<FaShareSquare className='logo footer-icon' size={"25px"} target='_blank'/></Link>
                <Link to="mailto:paidynikhil@gmail.com">Write a Mail<MdOutgoingMail className='logo footer-icon' size={"25px"} target='_blank' /></Link>
            </div>
        </footer>
    )
}
