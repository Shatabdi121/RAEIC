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
              <li>Dr. Mukti Kanta Mishra, President, Bhubaneswar, India</li>
              <li>
                Prof. D.N.Rao, Vice-President, CUTM, Bhubaneswar, Odisha, India
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Patron:</h3>
            <ul className="list-disc list-inside">
              <li>
                Prof. Supriya Pattnaik, Vice-Chancellor, CUTM, Bhubaneswar,
                India
              </li>
              <li>Prof. Anita Patra, Registrar, CUTM, Bhubaneswar, India</li>
              <li>Prof. Jagannath Padhi, Director, CUTM, Bhubaneswar, India</li>
              <li>
                Prof. Biswajit Mishra, Pro-Vice-Chancellor (Academics), CUTM,
                Bhubaneswar, India
              </li>
              <li>
                Prof. Ajay Kumar Nayak, Pro-Vice-Chancellor (Administrative),
                CUTM, Bhubaneswar, India
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Honorary Chairs:
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Prof. Ganapati Panda, Ex Director, IIT Bhubaneswar</li>
              <li>Prof. Ashutosh Dutta, Johns Hopkins University</li>
              <li>Prof. Subhransu Sekhar Samantray, IIT Bhubaneswar</li>
              <li>Prof. Sukumar Mishra, IIT Dhanbad, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              General Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Ashok Kumar Tripathy, IEEE, Bhubaneswar Section</li>
              <li>Shri. Hare Krishna Ratha, Former Director, DRDO</li>
              <li>Prof. Bansidhar Majhi, CGU, Bhubaneswar </li>
              <li>Prof. Pradipta Kumar Nanda , SoA, Bhubaneswar</li>
              <li>Prof. Debi Prosad Dogra, IIT, Bhubaneswar</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Organizing Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Sujata Chakravarty, CUTM, Bhubaneswar</li>
              <li>Prof. Tapan Kumar Gandhi, IIT, Delhi</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Conference Secretaries:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Sudhansu Kumar Samal, CUTM, Bhubaneswar, Odisha</li>
              <li>Prof. Manoj Kumar Debnath, SoA, Bhubaneswar</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Publication Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Prof. Ramesh Chandra Mohanty,CUTM, Bhubaneswar, Odisha, India
              </li>
              <li>
                Prof. Ashish Ranjan Dash, CUTM, Bhubaneswar, Odisha, India
              </li>
              <li>Prof. Tanmay Ray Chodhury, (NIT, Rourkela)</li>
              <li>Prof. Rahul Ray, CUTM, Bhubaneswar</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Technical Program Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Sangam Keshari Swain, CUTM, Bhubaneswar</li>
              <li>Prof. Debendra Kumar Sahoo, CUTM, Paralakhemundi</li>
              <li>
                Prof. Rajendra Kumar Khadanga, CUTM, Bhubaneswar, Odisha, India
              </li>
              <li>Prof. Satyasis Mishra, CUTM, Bhubaneswar, Odisha, India</li>
              <li>Prof. Chinmayee Dora, CUTM, Bhubaneswar, Odisha, India</li>
              <li>Prof. Sunil Mohapatra, CUTM, Odisha, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Finance Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Mr. Debasis Panda, CUTM, Bhubaneswar, Odisha, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Steering Committee:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Ashok Mishra, CUTM, Odisha, India</li>
              <li>Prof. Amit Kumar Sahoo, CUTM, Bhubaneswar, Odisha, India</li>
              <li>Prof. Sasmita Kumari Nayak, Bhubaneswar, Odisha, India</li>
              <li>Prof. Chnadra Sekhar Dash, , Bhubaneswar, Odisha, India</li>
              <li>Prof. Prafulla Kumar Panda, CUTM, Praralakumdi,</li>
              <li>Prof. Dhabaleswar Rao, CUTM, Praralakumdi</li>
              <li>Prof. Prabhat Kumar Patnaik, CUTM, Praralakumdi</li>
              <li>Prof. Chnadra Sekhar Dash, CUTM, Bhubaneswar</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Technical Program Committee:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Dipayan Gulia, NfT Allahabad</li>
              <li>Prof. Abhishek Dey, (NIT, Rourkela)</li>
              <li>Prof. Renu Sharma, (ITER, BBSR)</li>
              <li>Prof. Chinmaya Panighrahi (KIIT, BBSR)</li>
              <li>Prof. Rajeeta Patel, KIIT, BBSR)</li>
              <li>Prof. Debendra Kumar Sahoo, CUTM, Paralakhemundi</li>
              <li>Prof. Usahrani Rout (IIIT, BBSR)</li>
              <li>Prof. Tapas Kumar patra (OUTR, BBSR)</li>
              <li>Prof. Umamani Subudhi, (IIIT, Bhubaneswar)</li>
              <li>Prof. Chandrasekhar Perumalla, IIT Bhubaneswar</li>
              <li>Prof. Puspanjali Mohapatra, IIIT Bhubaneswar</li>
              <li>Prof. Manohar Mishra, SOA University, Bhubaneswar</li>
              <li>Prof. Abhialsh Patel, IIT, Kanpur</li>
              <li>Prof. Soumyaranjan Mohapatra, VIT, Chennai</li>
              <li>Prof. Satyajit Das, VIT, Vellore</li>
              <li>Prof. Trilocahn Penthia, NIT, Patna</li>
              <li>Prof. Sudarshan Swain, BITS Pilani, GOA Campus</li>
              <li>
                Prof. Biranchi Narayan Ratha, Silicon University, Bhubaneswar
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Hospitality and Logistics chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Rajkumar Mahanta, CUTM, Bhubaneswar</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Local Organizing Committee:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Surya Narayan Sahu, CUTM, Bhubaneswar</li>
              <li>Prof. Sushant Meher, CUTM, Bhubaneswar</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Women in Engineering Chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Celia Shahnaz, BUET, Bangladesh</li>
              <li>Prof. Umamoni Subudhi, IIT Bhubaneswar</li>
              <li>Prof. Bharati Mishra, IIT Bhubaneswar</li>
              <li>Prof. Smitanjali Rout, CUTM, Bhubaneswar</li>
              <li>Prof. Swarnaprabha Jena, CUTM, Bhubaneswar</li>
              <li>Prof. Prachee Dewangan, CUTM, Bhubaneswar</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Student Activity and Awards chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Prof. Rama Prasanna Dalai, CUTM, Bhubaneswar, Odisha, India
              </li>
              <li>Prof. Satyananda Biswal, Bhubaneswar, Odisha, India</li>
              <li>Prof. Biranchi Prasad Mishra, Bhubaneswar, Odisha, India</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Industry and Sponsorship chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Rakesh Ray, CUTM, Bhubaneswar</li>
              <li>Prof. Jyoti Prakash Giri, CUTM, Bhubaneswar</li>
              <li>Prof. Deepak Ku Sahoo, CUTM, Bhubaneswar</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Publicity chairs:
            </h3>
            <ul className="list-disc list-inside">
              <li>Prof. Harish Chandra Mahanta, CUTM, Bhubaneswar</li>
              <li>Prof. Sunita Routray, CUTM, Bhubaneswar</li>
              <li>Prof. Manas Ranjan Padhi, CUTM, Bhubaneswar</li>
              <li>Prof. Satyabrata Nanda, CUTM, Bhubaneswar</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patrons;
