import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


export default function Layout({ children }) {
    return (
        <div className="font-serif">
            <Navbar />
        <div className="min-h-screen ">
            <main>
           { children }
            </main>
        </div>
  <Footer />
  </div>
    )
}
