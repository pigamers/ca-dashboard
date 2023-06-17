import profile from "../profilePhoto.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { GrDocument } from "react-icons/gr";
import NavbarAdmin from "../components/NavbarAdmin";
import { BiArrowBack } from "react-icons/bi";


export default function ClientProfile() {
    return(
        <div className="bg-gray-200 min-h-screen px-5">
            <NavbarAdmin />
            <div className="py-16">
            <div class="flex gap-3 text-xl font-bold px-20 py-4">
                    <a href="/home-admin/">
                        <BiArrowBack size={30} />
                    </a>
                    Client Profile
                </div>
                <div class="w-full rounded mx-auto p-5 shadow-lg bg-white">
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <img src={profile} className="w-40 h-40 m-auto" alt="profile" />
                            <h1 className="text-center text-lg">Satyam</h1>
                            <div className="text-sm text-center">Operations <strong>@netflix</strong></div>
                        </div>
                        <div className="bg-gray-400 hidden lg:block lg:mx-3 h-[350px] w-px"></div>
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
                                    GSTIN
                                </div>
                                <div>:</div>
                                <div>25AZ121554AAZZE47</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <CiLocationOn size={25} />
                                </div>
                                <div>
                                    Company Name
                                </div>
                                <div>:</div>
                                <div>Netflix</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <GrDocument size={25} />
                                </div>
                                <div>
                                    Mail of SPOC
                                </div>
                                <div>:</div>
                                <div>spocname@gmail.com</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <GrDocument size={25} />
                                </div>
                                <div>
                                    SPOC for PLUTUS
                                </div>
                                <div>:</div>
                                <div>SPOC Name</div>
                            </div>
                        </div>
                        <div className="bg-gray-400 lg:mx-3 hidden lg:block h-[350px] w-px"></div>
                        <div class="flex flex-col gap-4 p-5 leading-normal text-base font-bold justify-center">
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <GrDocument size={25} />
                                </div>
                                <div>
                                    CIN
                                </div>
                                <div>:</div>
                                <div>157994532104</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <CgProfile size={25} />
                                </div>
                                <div>
                                    No. of Directors
                                </div>
                                <div>:</div>
                                <div>21</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <GrDocument size={25} />
                                </div>
                                <div>
                                    PAN
                                </div>
                                <div>:</div>
                                <div>BXCR485795</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <GrDocument size={25} />
                                </div>
                                <div>
                                    TAN
                                </div>
                                <div>:</div>
                                <div>BHVCDF45120</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <GrDocument size={25} />
                                </div>
                                <div>
                                    GSTIN
                                </div>
                                <div>:</div>
                                <div>1212145202147</div>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <div>
                                    <CiLocationOn size={25} />
                                </div>
                                <div>
                                    Registered Address
                                </div>
                                <div>:</div>
                                <div>14th main, 2nd block, Bengaluru, Karnataka-5600009</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8">
                <div class="w-full rounded mx-auto space-y-5 py-3 shadow-lg bg-white">
                    <div class="text-2xl font-bold px-8 py-4">
                        Status of Compliance
                    </div>
                    <div className="flex mx-5 flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div className="text-lg">In pariatur fugiat reprehenderit nisi.</div>
                        <div>
                            <h6 className="text-xs underline">View More</h6>
                        </div>
                    </div>
                    <div className="flex mx-5 flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div className="text-lg">In pariatur fugiat reprehenderit nisi.</div>
                        <div>
                            <h6 className="text-xs underline">View More</h6>
                        </div>
                    </div>
                    <div className="flex mx-5 flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div className="text-lg">In pariatur fugiat reprehenderit nisi.</div>
                        <div>
                            <h6 className="text-xs underline">View More</h6>
                        </div>
                    </div>
                    <div className="flex mx-5 flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div className="text-lg">In pariatur fugiat reprehenderit nisi.</div>
                        <div>
                            <h6 className="text-xs underline">View More</h6>
                        </div>
                    </div>
                    <div className="flex mx-5 flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div className="text-lg">In pariatur fugiat reprehenderit nisi.</div>
                        <div>
                            <h6 className="text-xs underline">View More</h6>
                        </div>
                    </div>
                    <div className="flex mx-5 flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div className="text-lg">In pariatur fugiat reprehenderit nisi.</div>
                        <div>
                            <h6 className="text-xs underline">View More</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}