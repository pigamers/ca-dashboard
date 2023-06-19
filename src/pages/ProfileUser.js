import NavbarUser from "../components/NavbarUser";
import profile from "../profilePhoto.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { GrDocument } from "react-icons/gr";


export default function ProfileUser() {
    return (
        <div className="bg-gray-200 min-h-screen px-5">
            <NavbarUser />
            <div className="py-16">
                <div class="flex gap-3 text-2xl font-bold px-20 py-4">
                    Profile
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
                <div class="w-full rounded mx-auto shadow-lg bg-white">
                    <div class="text-2xl font-bold px-8 py-4">
                        Directors of the Company
                    </div>
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-md text-center font-bold">
                            <thead class="text-md text-gray-700 uppercase bg-blue-200">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Director's Details
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Director 1
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Director 2
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Director 3
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Director 4
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Director 5
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        Name
                                    </th>
                                    <td class="px-6 py-4">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4">
                                        John Doe
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        Start Date
                                    </th>
                                    <td class="px-6 py-4">
                                        21-03-2023
                                    </td>
                                    <td class="px-6 py-4">
                                        21-03-2023
                                    </td>
                                    <td class="px-6 py-4">
                                        21-03-2023
                                    </td>
                                    <td class="px-6 py-4">
                                        21-03-2023
                                    </td>
                                    <td class="px-6 py-4">
                                        21-03-2023
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        DIN
                                    </th>
                                    <td class="px-6 py-4">
                                        21451246587
                                    </td>
                                    <td class="px-6 py-4">
                                        21451246587
                                    </td>
                                    <td class="px-6 py-4">
                                        21451246587
                                    </td>
                                    <td class="px-6 py-4">
                                        21451246587
                                    </td>
                                    <td class="px-6 py-4">
                                        21451246587
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        PAN
                                    </th>
                                    <td class="px-6 py-4">
                                        BYEDFA1459
                                    </td>
                                    <td class="px-6 py-4">
                                        BYEDFA1459
                                    </td>
                                    <td class="px-6 py-4">
                                        BYEDFA1459
                                    </td>
                                    <td class="px-6 py-4">
                                        BYEDFA1459
                                    </td>
                                    <td class="px-6 py-4">
                                        BYEDFA1459
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        Aadhar
                                    </th>
                                    <td class="px-6 py-4">
                                        22023 21542 0215
                                    </td>
                                    <td class="px-6 py-4">
                                        22023 21542 0215
                                    </td>
                                    <td class="px-6 py-4">
                                        22023 21542 0215
                                    </td>
                                    <td class="px-6 py-4">
                                        22023 21542 0215
                                    </td>
                                    <td class="px-6 py-4">
                                        22023 21542 0215
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        DSC Status
                                    </th>
                                    <td class="px-6 py-4">
                                        Active
                                    </td>
                                    <td class="px-6 py-4">
                                        Active
                                    </td>
                                    <td class="px-6 py-4">
                                        Active
                                    </td>
                                    <td class="px-6 py-4">
                                        Active
                                    </td>
                                    <td class="px-6 py-4">
                                        Active
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        Mobile Number
                                    </th>
                                    <td class="px-6 py-4">
                                        +9184659210
                                    </td>
                                    <td class="px-6 py-4">
                                        +9184659210
                                    </td>
                                    <td class="px-6 py-4">
                                        +9184659210
                                    </td>
                                    <td class="px-6 py-4">
                                        +9184659210
                                    </td>
                                    <td class="px-6 py-4">
                                        +9184659210
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <td class="px-6 py-4">
                                        director@org.com
                                    </td>
                                    <td class="px-6 py-4">
                                        director@org.com
                                    </td>
                                    <td class="px-6 py-4">
                                        director@org.com
                                    </td>
                                    <td class="px-6 py-4">
                                        director@org.com
                                    </td>
                                    <td class="px-6 py-4">
                                        director@org.com
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        Permanent Address
                                    </th>
                                    <td class="px-6 py-4">
                                        10-503,CNBH
                                    </td>
                                    <td class="px-6 py-4">
                                        10-503,CNBH
                                    </td>
                                    <td class="px-6 py-4">
                                        10-503,CNBH
                                    </td>
                                    <td class="px-6 py-4">
                                        10-503,CNBH
                                    </td>
                                    <td class="px-6 py-4">
                                        10-503,CNBH
                                    </td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <th scope="row" class="px-6 py-4 font-semibold text-gray-900">
                                        DOB
                                    </th>
                                    <td class="px-6 py-4">
                                        02-03-1854
                                    </td>
                                    <td class="px-6 py-4">
                                        02-03-1854
                                    </td>
                                    <td class="px-6 py-4">
                                        02-03-1854
                                    </td>
                                    <td class="px-6 py-4">
                                        02-03-1854
                                    </td>
                                    <td class="px-6 py-4">
                                        02-03-1854
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}