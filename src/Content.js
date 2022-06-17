import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Content() {
    return (
        <div>
            <div className="d-flex flex-row">
                <div className="image1Div d-flex align-items-center justify-content-center">
                    <img src={require('./images/1.png')} alt="" id="image1" />
                </div>
                <div className="d-flex flex-column">
                    <h6 className="fw-bold fs-5">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
                    <ul>
                        <li className="fs-5"> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                        <li className="fs-5">  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                    </ul>
                    <img src={require('./images/2.png')} alt="" id="image2" />
                    <p className="fs-5">Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>
            <div>
                <div>
                    <p className="text-center mt-5 fs-5">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                    <img src={require('./images/3.png')} alt="" id="image3" />
                    <p className="text-center mt-3 fs-5">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                    <hr id="hr" noshade />
                    <h6 className="text-center fw-bold mb-4 fs-5">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
                    <p className="text-center mb-5 fs-5">CHEMICALS & PROCESS <span className="text-danger fw-bold">|</span> POWER <span className="text-danger fw-bold">|</span> WATER & WASTE WATER <span className="text-danger fw-bold">|</span> OILS & GAS <span className="text-danger fw-bold">|</span> PHARMA <span className="text-danger fw-bold">|</span> SUGARS & DISTILLERIES <span className="text-danger fw-bold">|</span> PAPER & PULP <span className="text-danger fw-bold">|</span> MARINE & DEFENCE <span className="text-danger fw-bold">|</span> METAL & MINING <span className="text-danger fw-bold">|</span> FOOD & BEVERAGE <span className="text-danger fw-bold">|</span>
                        PETROCHEMICAL & REFINERIES <span className="text-danger fw-bold">|</span> SOLAR <span className="text-danger fw-bold">|</span> BUILDING <span className="text-danger fw-bold">|</span> HVAC <span className="text-danger fw-bold">|</span> FIRE FIGHTING <span className="text-danger fw-bold">|</span> AGRICULTURE & RESIDENTIAL</p>
                </div>
            </div>
        </div>
    )
}

export default Content;