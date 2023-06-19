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
                <div class="w-full m-auto lg:w-2/3 rounded p-3 shadow-lg bg-white">
                    <div className="flex flex-col lg:flex-row gap-3 items-center">
                        <div>
                            <ul>
                                <li><img src={profile} className="w-32 h-32 m-auto" alt="profile" /></li>
                                <li><h1 className="text-center text-lg">Satyam</h1></li>
                                <li><h2>Operations <strong>@netflix</strong></h2></li>
                            </ul>
                        </div>
                        <div className="flex text-sm lg:text-base my-3 flex-row justify-between font-semibold">
                            <div className="px-3 space-y-5">
                            <div className="flex items-center gap-3">
                                <AiOutlineMail size={20} />
                                Email
                            </div>
                            <div className="flex items-center gap-3">
                                <BsTelephone size={20}/>
                                Mobile
                            </div>
                            <div className="flex items-center gap-3">
                                <GrDocument size={20}/>
                                GST Number
                            </div>
                            <div className="flex items-center gap-3 whitespace-nowrap">
                                <CiLocationOn size={20}/>
                                Company Address
                            </div>
                            <div className="flex pt-5 lg:pt-0 items-center gap-3">
                                <GrDocument size={20}/>
                                DIN Number
                            </div>
                            <div className="flex items-center gap-3">
                                <BiCalendar size={20}/>
                                Valid From
                            </div>
                            <div className="flex items-center gap-3">
                                <BiCalendar size={20}/>
                                Valid Till
                            </div>
                            
                            </div>
                            <div className="px-2 space-y-5">
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div className="pt-5 lg:pt-0">:</div>
                            <div>:</div>
                            <div>:</div>
                            </div>
                            <div className="space-y-5">
                            <div>satyam@company.com</div>
                            <div>+91 8945123265</div>
                            <div>29AAAZA1235648AZ</div>
                            <div>14th main, 2nd block, Bengaluru, Karnataka-5600009</div>
                            <div>29AAAZA1235648AZ</div>
                            <div>29 Nov,2022</div>
                            <div>31 Dec,2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}