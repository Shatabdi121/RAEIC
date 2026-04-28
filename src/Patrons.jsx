import React from "react";
import Carouselcard from "./Carouselcard";
const Patrons = () => {
  return (
    <>
      {/* ===== CENTER TEXT SECTION (NO MARQUEE) ===== */}
      <section className="relative w-full mt-20 h-[220px] overflow-hidden rounded-2xl">
        {/* 🔁 BACKGROUND CAROUSEL */}
        <div className="absolute inset-0 z-0 opacity-55">
          <Carouselcard />
        </div>

        {/* 🌈 DARK OVERLAY */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/85 via-blue-700/75 to-blue-900/85" />

        {/* 🏆 HERO CONTENT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 gap-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold
          text-transparent bg-clip-text
          bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400"
            style={{
              textShadow:
                "2px 2px 0 rgba(0,0,0,0.5), 4px 4px 0 rgba(0,0,0,0.4)",
            }}
          >
            COMMITTEE
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl opacity-90">
            Acknowledging the invaluable contributions of our committee in
            fostering knowledge, collaboration
          </p>
        </div>
      </section>

      <div className="w-full bg-[#E7ECFF] py-20">
        {/* ===== COMMITTEE LIST SECTION (OUTSIDE marquee) ===== */}
        <div className="max-w-5xl mx-auto px-6 text-slate-700">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Chief Patron:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Mukti Kanta Mishra, President, CUTM, Odisha,India</li>
              <li>
                Prof. D.N.Rao, Vice-President, CUTM, Odisha,India
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Patron:</h3>
            <ul className="list-disc list-inside">
              <li>
                Prof. Supriya Pattnaik, Vice-Chancellor, CUTM, Odisha,India   
              </li>
              <li>Prof. Anita Patra, Registrar, CUTM, Odisha,India</li>
              <li>Prof. Jagannath Padhi, Director, CUTM, Odisha,India</li>
              <li>
                Prof. Biswajit Mishra, Pro-Vice-Chancellor (Academics), CUTM,
                Odisha,India
              </li>
              <li>
                Prof. Ajay Kumar Nayak, Pro-Vice-Chancellor (Administrative),
                CUTM, Odisha,India  
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Honorary Chairs:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Prof. Ganapati Panda, Ex Director, IIT Bhubaneswar, India</li>
              <li>Prof. Ashutosh Dutta, Johns Hopkins University, USA</li>
              <li>Prof. Subhransu Sekhar Samantray, IIT Bhubaneswar, India </li>
              <li>Prof. Sukumar Mishra, IIT Dhanbad, India</li>
               <li>Prof. Chitaranjan Tripathy, Silicon University, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Organizing Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Ashok Kumar Tripathy, IEEE, Bhubaneswar Section, India</li>
              <li>Shri. Hare Krishna Ratha, Former Director, DRDO, India</li>
              <li>Prof. Bansidhar Majhi, CGU, Bhubaneswar, India</li>
              <li>Prof. Pradipta Kumar Nanda , SoA, Bhubaneswar, India</li>
              <li>Prof. Debi Prosad Dogra, IIT, Bhubaneswar, India</li>
              <li>Prof. Durga Prasad Mohapatra, NIT, Rourkela, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              General Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Sujata Chakravarty, CUTM, Odisha,India</li>
              <li>Prof. Tapan Kumar Gandhi, IIT, Delhi, India</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Conference Secretaries:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Sudhansu Kumar Samal, CUTM, Odisha,India</li>
              <li>Prof. Manoj Kumar Debnath, SoA, Bhubaneswar, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Publication Chairs:
            </h3>
            <ul className="list-disc list-inside">
            <li>Prof. Sudarson Jena, SUIIT, Sambalpur University,Odisha, India</li>
              <li>
                Prof. Ramesh Chandra Mohanty, CUTM, Odisha, India   
              </li>
              <li>
                Prof. Ashish Ranjan Dash, CUTM, Odisha, India
              </li>
              <li>Prof. Tanmay Ray Chodhury, (NIT, Rourkela), India</li>
              <li>Prof. Nimay Chandra Giri, CUTM, Odisha, India</li>
              <li>Prof. Rahul Ray, CUTM, Odisha, India</li>
              <li>Prof. Satyabrata Dash, GITAM, AP, India</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Technical Program Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Sangam Keshari Swain, CUTM, Odisha, India</li>
              <li>Prof. Debendra Kumar Sahoo, CUTM, Odisha, India</li>
              <li>
                Prof. Rajendra Kumar Khadanga, CUTM, Odisha, India
              </li>
              <li>Prof. Satyasis Mishra, CUTM, Odisha, India</li>
              <li>Prof. Chinmayee Dora, CUTM, Odisha, India</li>
              <li>Prof. Sunil Kumar Mohapatra, CUTM, Odisha, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Finance Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Mr. Debasis Panda, CUTM, Odisha, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Steering Committee:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Ashok Mishra, CUTM, Odisha, India</li>
              <li>Prof. Amit Kumar Sahoo, CUTM, Odisha, India</li>
              <li>Prof. Sasmita Kumari Nayak, Odisha, India</li>
              <li>Prof. Prafulla Kumar Panda, CUTM, Odisha, India</li>
              <li>Prof. Dhawaleswar Rao, CUTM, Odisha, India</li>
              <li>Prof. Prabhat Kumar Patnaik, CUTM, Odisha, India</li>
              <li>Prof. Chandra Sekhar Dash, CUTM, Odisha, India</li>
              <li>Prof. Abhisekh Das, CUTM, Odisha, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Technical Program Committee:
            </h3>
            <ul className="list-disc list-inside">
            <li>Prof. B. K. Panigrahi, IIT, Delhi, India</li>
              <li>Prof. Dipayan Gulia, NfT Allahabad, India</li>
              <li>Prof. Abhishek Dey, (NIT, Rourkela), India</li>
              <li>Prof. Renu Sharma, (ITER, BBSR), India</li>
              <li>Prof. Chinmaya Panighrahi (KIIT, BBSR), India</li>
              <li>Prof. Rajeeta Patel, KIIT, BBSR), India</li>
              <li>Prof. Usahrani Rout (IIIT, BBSR), India</li>
              <li>Prof. Tapas Kumar patra (OUTR, BBSR), India</li>
              <li>Prof. Umamani Subudhi, (IIIT, Bhubaneswar), India</li>
              <li>Prof. Chandrasekhar Perumalla, IIT Bhubaneswar, India</li>
              <li>Prof. Puspanjali Mohapatra, IIIT Bhubaneswar, India</li>
              <li>Prof. Manohar Mishra, SOA University, Bhubaneswar, India</li>
              <li>Prof. Abhialsh Patel, IIT, Kanpur, India</li>
              <li>Prof. Soumyaranjan Mohapatra, VIT, Chennai, India</li>
              <li>Prof. Satyajit Das, VIT, Vellore, India</li>
              <li>Prof. Trilocahn Penthia, NIT, Patna, India</li>
              <li>Prof. Sudarshan Swain, BITS Pilani, GOA Campus, India</li>
              <li>
                Prof. Biranchi Narayan Ratha, Silicon University, Bhubaneswar, India
              </li>
              <li>Prof. Brojo Kishore Mishra, NIST, Odisha, India</li>
              <li>Prof. Mamata Wagh, CGU, India</li>
              <li>Prof. Mamata Gadanayak, KIIT, India</li>
              <li>Prof. Sanjaya Kumar Panda, NIT, Warangal, India</li>
              <li>Prof. Sanjib Kumar Nayak, VSSUT, Burla, India</li>
              <li>Prof. Atul Vikas Lakra, VSSUT, Burla, India</li>
              <li>Prof. Santosh Kumar Majhi, Guru Ghasidas Vishwavidyalaya Bilaspur,India</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Hospitality and Logistics chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Raj Kumar Mohanta, CUTM, Odisha, India</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Local Organizing Committee:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Surya Narayan Sahu, CUTM, Odisha, India</li>
              <li>Prof. Sushanta Kumar Meher, CUTM, Odisha, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Women in Engineering Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Celia Shahnaz, BUET, Bangladesh</li>
              <li>Dr. Sakuntala Mohapatra, CUTM, Odisha, India</li>
              <li>Prof. Umamoni Subudhi, IIT Bhubaneswar, India</li>
              <li>Prof. Bharati Mishra, IIT Bhubaneswar, India</li>
              <li>Prof. Smitanjali Rout, CUTM, Odisha, India</li>
              <li>Prof. Swarnaprabha Jena, CUTM, Odisha, India</li>
              <li>Prof. Prachee Dewangan, CUTM, Odisha, India</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Student Activity and Awards chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Prof. Rama Prasanna Dalai, CUTM, Odisha, India 
              </li>
              <li>Prof. Satyananda Swain, CUTM, Odisha, India</li>
              <li>Prof. Biranchi Prasad Mishra, CUTM, Odisha, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Industry and Sponsorship chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Rakesh Kumar Ray, CUTM, Odisha, India</li>
              <li>Prof. Jyoti Prakash Giri, CUTM, Odisha, India</li>
              <li>Prof. Deepak Kumar Sahu, CUTM, Odisha, India</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Publicity chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Harish Chandra Mohanta, CUTM, Odisha, India</li>
              <li>Prof. Sunita Routray, CUTM, Odisha, India</li>
              <li>Prof. Manas Ranjan Padhi, CUTM, Odisha, India</li>
              <li>Prof. Satyabrata Nanda, CUTM, Odisha, India</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patrons;
