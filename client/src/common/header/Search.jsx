import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  // stores state for users search input
  const [ searchInputCurr, setSearchInputCurr ] = useState(""); 

  // handles changes in search input
  const handleSearchInput = (event) => {
    event.preventDefault();
    const userRef = collection(db, 'userInputs');
    addDoc(userRef, { searchInputCurr })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      })
  };
  
  console.log(searchInputCurr);

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
              <i className='fa fa-search'></i>
              <form onSubmit={ handleSearchInput }>
                <input 
                  type='type' 
                  placeholder='Search and hit enter...'
                  onChange={(event) => setSearchInputCurr(event.target.value)}
                />
              </form>
              <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
