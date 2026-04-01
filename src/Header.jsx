
import ai from "../src/assets/aisigh1.png"
import {  useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
const [openAbout, setOpenAbout] = useState(false);
const [openAuthors, setOpenAuthors] = useState(false);
const [openSpeakers, setOpenSpeakers] = useState(false);
const [openAwards, setOpenAwards] = useState(false);



    // This opens the download link in a hidden iframe or new tab
    // to force the browser to trigger the "Save As" dialog
    const fileId = "1QBi_C1RJq8WlZqOHiKbG1x72qC48415Y";
    const downloadUrl = `https://drive.google.com/file/d/197UlvYcjeZfy9miVgFBrAgQQtAdlE5yB/view`;

  return (
    <>

    
      {/* --- NAVBAR --- */}
     <nav className="fixed top-0 left-0 w-full h-20 z-50
                bg-[#E7ECFF] border-b border-blue-200">




        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">

            {/* LOGO */}
          <div className="flex items-center gap-2 cursor-pointer">
  <img
    src={ai}        // must be a PNG/SVG with transparency
    alt="Logo"
    className="w-27 h-27 object-contain bg-transparent"
  />
</div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-5">

               
    <Link to="/" className="nav-link mr-2">HOME</Link>




              {/* <HashLink smooth to="/#aboutconference" className="nav-link">ABOUT </HashLink> */}
               <div className="relative group">
    <span className="nav-link cursor-pointer">ABOUT</span>

    <div
      className="absolute left-0 mt-2 w-56 bg-[#E7ECFF] rounded-md shadow-lg
      opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
    >
      <HashLink smooth to="/#aboutconference" className="dropdown-link">
        About Conference
      </HashLink>

      <Link to="/aboutcutm" className="dropdown-link">
        About CUTM
      </Link>
    </div>
  </div>

              {/* AUTHORS */}
              <div className="relative group">
                <span className="nav-link cursor-pointer">AUTHORS
                  
                </span>
               <div
  className="
    absolute left-0 top-full
    pt-2
    w-56 bg-[#E7ECFF] rounded-md shadow-lg
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-200
    z-50
  "
>

                  <Link to="/callForPapers" className="dropdown-link">
                    Call for Papers
                  </Link>
                  <Link to="/camera-ready-paper-submission" className="dropdown-link">
                    Camera Ready Paper Submission
                  </Link>
                  <Link to="/publication-and-templates" className="dropdown-link">
                    Publication and Templates
                  </Link>
                </div>
              </div>

              {/* SPEAKERS */}
              <div className="relative group">
                <span className="nav-link cursor-pointer">SPEAKERS
                  
                </span>
                <div className="absolute left-0 mt-2 w-56 bg-[#E7ECFF] rounded-md shadow-lg
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <Link to="/keynote-speakers" className="dropdown-link">
                    Keynote Speakers
                  </Link>
                  <Link to="/wie-speakers" className="dropdown-link">
                    WIE Speakers
                  </Link>
                  <Link to="/penalties" className="dropdown-link">
                    Penalties
                  </Link>
                </div>
              </div>

              <Link to="/patrons" className="nav-link">COMMITTEE</Link>

              {/* AWARDS */}
              <div className="relative group">
                <span className="nav-link cursor-pointer">AWARDS
                  
                </span>
                <div className="absolute left-0 mt-2 w-56 bg-[#E7ECFF] rounded-md shadow-lg
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <Link to="/best-paper" className="dropdown-link">
                    Best Paper Award
                  </Link>
                  <Link to="/best-poster" className="dropdown-link">
                    Best Poster Award
                  </Link>
                  <Link to="/all-women" className="dropdown-link">
                    All Women Authored Paper Award
                  </Link>
                  <Link to="/all-industry" className="dropdown-link">
                    All Industry Authored Paper Award
                  </Link>
                </div>
              </div>

              <Link to="/accomodation" className="nav-link">
                ACCOMODATION
              </Link>
<HashLink smooth to="/#schedule" className="nav-link">
               SCHEDULE
              </HashLink>
              <Link to="/sponsership" className="nav-link">
                SPONSORSHIP
              </Link>


              {/* CTA BUTTONS */}
              <Link to="/registration">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-[13px] font-semibold hover:bg-blue-900 transition">
  REGISTRATION
</button>
</Link>
<a href={downloadUrl} target="_blank" rel="noopener noreferrer">
 <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-[13px] font-semibold hover:bg-blue-900 transition" >
  BROCHURE
</button>
</a>

            </div>


            
           {/* Mobile Toggle Button */}
<button
  className="md:hidden text-slate-800"
  onClick={() => setOpenMobileMenu(!openMobileMenu)}
>
  ☰
</button>

{/* MOBILE MENU */}
{openMobileMenu && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
    <div className="flex flex-col px-6 py-4 space-y-3">

      {/* HOME */}
      <Link to="/" className="nav-link" onClick={() => setOpenMobileMenu(false)}>
        HOME
      </Link>

      {/* ABOUT */}
      <button
        onClick={() => setOpenAbout(!openAbout)}
        className="nav-link flex justify-between items-center"
      >
        ABOUT <span>{openAbout ? "▲" : "▼"}</span>
      </button>

      {openAbout && (
        <div className="ml-4 rounded-md bg-[#E7ECFF] shadow-md">
          <HashLink smooth to="/#aboutconference" className="dropdown-link">
            About Conference
          </HashLink>
          <Link to="/aboutcutm" className="dropdown-link">
            About CUTM
          </Link>
        </div>
      )}

      {/* AUTHORS */}
      <button
        onClick={() => setOpenAuthors(!openAuthors)}
        className="nav-link flex justify-between items-center"
      >
        AUTHORS <span>{openAuthors ? "▲" : "▼"}</span>
      </button>

      {openAuthors && (
        <div className="ml-4 rounded-md bg-[#E7ECFF] shadow-md">
          <Link to="/callForPapers" className="dropdown-link">
            Call for Papers
          </Link>
          <Link to="/camera-ready-paper-submission" className="dropdown-link">
            Camera Ready Paper Submission
          </Link>
          <Link to="/publication-and-templates" className="dropdown-link">
            Publication and Templates
          </Link>
        </div>
      )}

      {/* SPEAKERS */}
      <button
        onClick={() => setOpenSpeakers(!openSpeakers)}
        className="nav-link flex justify-between items-center"
      >
        SPEAKERS <span>{openSpeakers ? "▲" : "▼"}</span>
      </button>

      {openSpeakers && (
        <div className="ml-4 rounded-md bg-[#E7ECFF] shadow-md">
          <Link to="/keynote-speakers" className="dropdown-link">
            Keynote Speakers
          </Link>
          <Link to="/wie-speakers" className="dropdown-link">
            WIE Speakers
          </Link>
          <Link to="/penalties" className="dropdown-link">
            Penalties
          </Link>
        </div>
      )}

      {/* COMMITTEE */}
      <Link to="/patrons" className="nav-link">
        COMMITTEE
      </Link>

      {/* AWARDS */}
      <button
        onClick={() => setOpenAwards(!openAwards)}
        className="nav-link flex justify-between items-center"
      >
        AWARDS <span>{openAwards ? "▲" : "▼"}</span>
      </button>

      {openAwards && (
        <div className="ml-4 rounded-md bg-[#E7ECFF] shadow-md">
          <Link to="/best-paper" className="dropdown-link">
            Best Paper Award
          </Link>
          <Link to="/best-poster" className="dropdown-link">
            Best Poster Award
          </Link>
          <Link to="/all-women" className="dropdown-link">
            All Women Authored Paper Award
          </Link>
          <Link to="/all-industry" className="dropdown-link">
            All Industry Authored Paper Award
          </Link>
        </div>
      )}

      {/* ACCOMODATION */}
      <Link to="/accomodation" className="nav-link">
        ACCOMODATION
      </Link>

      {/* SCHEDULE */}
      <HashLink smooth to="/#schedule" className="nav-link">
        SCHEDULE
      </HashLink>

      {/* SPONSERSHIP */}
      <Link to="/sponsership" className="nav-link">
        SPONSORSHIP
      </Link>

      {/* CTA BUTTONS */}
      <Link to="/registration">
        <button className="w-full bg-blue-600 text-white py-2 rounded-full text-[13px] font-semibold hover:bg-blue-900 transition">
          REGISTRATION
        </button>
      </Link>

      <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
      <button className="w-full bg-blue-600 text-white py-2 rounded-full text-[13px] font-semibold hover:bg-blue-900 transition">
        BROCHURE
      </button>

      </a>
    </div>
  </div>
)}

        
</div>

</div>
      </nav>
    </>
  );
};

export default Header;
