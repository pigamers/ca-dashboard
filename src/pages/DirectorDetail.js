import NavbarUser from "../components/NavbarUser";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GrDocument } from "react-icons/gr";
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import profile from "../profilePhoto.png";


export default function DirectorDetail() {
    return (
        <div className="bg-gray-200 min-h-screen px-5">
            <NavbarUser />
            <div className="py-16">
                <div class="flex gap-3 text-xl font-bold px-20 py-4">
                    <a href="/home-user/">
                        <BiArrowBack size={30} />
                    </a>
                    Director Profile
                </div>
                <div class="w-full lg:w-2/3 rounded mx-auto p-5 shadow-lg bg-white">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <img src={profile} className="w-40 h-40 m-auto" alt="profile" />
                            <h1 className="text-center text-lg">Satyam</h1>
                            <div className="text-sm text-center">Operations <strong>@netflix</strong></div>
                        </div>
                        <div class="flex flex-col gap-4 p-5 leading-normal text-base font-bold justify-center">
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <AiOutlineMail size={25} />
                                </div>
                                <div>
                                    Email
                                </div>
                                <div>:</div>
                                <div>satyam@company.com</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <BsTelephone size={25} />
                                </div>
                                <div>
                                    Mobile
                                </div>
                                <div>:</div>
                                <div>+9174568521</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <GrDocument size={25} />
                                </div>
                                <div>
                                    GST Number
                                </div>
                                <div>:</div>
                                <div>+9174568521</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <CiLocationOn size={25} />
                                </div>
                                <div>
                                    Company Address
                                </div>
                                <div>:</div>
                                <div>14th main, 2nd block, Bengaluru, Karnataka-5600009</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <GrDocument size={25} />
                                </div>
                                <div>
                                    DIN Number
                                </div>
                                <div>:</div>
                                <div>29AAAAA000A1ZA5</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <BiCalendar size={25} />
                                </div>
                                <div>
                                    Valid From
                                </div>
                                <div>:</div>
                                <div>22 Nov,2021</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <BiCalendar size={25} />
                                </div>
                                <div>
                                    Valid Till
                                </div>
                                <div>:</div>
                                <div>22 Nov,2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}