import NavbarUser from "../components/NavbarUser";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GrDocument } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import profile from "../profilePhoto.png";


export default function HomeUser() {
    return (
        <div className="bg-gray-200 pt-14 px-5">
            <NavbarUser />
            <h1 className="text-2xl font-bold pt-5 pb-3 px-16">Good Evening!</h1>
            <div className="flex flex-col py-7 justify-center lg:gap-7 space-y-20 lg:space-y-0 lg:flex-row">
                <div class="w-full lg:w-1/2 rounded p-5 shadow-lg bg-white">
                    <div className="flex flex-row justify-between items-center">
                        <div class="font-bold text-xl mt-2 mb-5">Profile</div>
                        <div class="text-lg mt-2 mb-5 underline"><a href="/home-user/directordetails">Director Details</a></div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col py-4">
                            <img src={profile} className="w-40 h-40 m-auto" alt="profile" />
                            <h1 className="text-center text-lg">Satyam</h1>
                            <div className="text-sm text-center">Operations <strong>@netflix</strong></div>
                        </div>
                        <div class="flex flex-col gap-10 mx-5 leading-normal text-base font-bold justify-center">
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
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 rounded p-5 space-y-5 shadow-lg bg-white">
                    <div class="font-bold text-xl mt-2 mb-5">Upcoming Compliance</div>
                    <h1 className="font-semibold text-lg">Financial</h1>
                    <div className="flex flex-row gap-10 px-5 py-3 border rounded-md justify-between items-center">
                        <div className="text-lg font-bold">Do do non sunt consectetur dolore.</div>
                        <div>
                            <h6 className="text-xs underline">View More</h6>
                        </div>
                    </div>
                    <h1 className="font-semibold text-lg">General</h1>
                    <div className="flex flex-row gap-5 px-5 py-3 border rounded-md justify-between items-center">
                        <div className="text-lg font-bold">Do do non sunt consectetur dolore.</div>
                        <div>
                            <h6 className="text-xs underline">View More</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-10 justify-center lg:gap-20 space-y-20 lg:space-y-0 lg:flex-row">
                <div class="w-full lg:w-1/2 rounded p-3 space-y-5 shadow-lg bg-white">
                    <div class="font-bold text-xl mt-2 px-3 mb-5">Laws and Amendments</div>
                    <div className="flex flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div>Dates for filling ITR have been extended by the Income Tax Department</div>
                        <div>
                            <h6 className="text-xs underline">Know More</h6>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div>Dates for filling ITR have been extended by the Income Tax Department</div>
                        <div>
                            <h6 className="text-xs underline">Know More</h6>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div>Dates for filling ITR have been extended by the Income Tax Department</div>
                        <div>
                            <h6 className="text-xs underline">Know More</h6>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div>Dates for filling ITR have been extended by the Income Tax Department</div>
                        <div>
                            <h6 className="text-xs underline">Know More</h6>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 px-5 py-3 border rounded-md justify-between items-center">
                        <div>Dates for filling ITR have been extended by the Income Tax Department</div>
                        <div>
                            <h6 className="text-xs underline">Know More</h6>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:space-x-14">
                    <div class="w-full lg:w-72 rounded p-5 space-y-5 shadow-lg bg-white">
                        <div className="flex flex-row justify-between items-center">
                            <div class="font-bold text-lg">Documents</div>
                            <div class="underline text-sm">Export as CSV</div>
                        </div>
                        <div className="flex flex-row gap-2 px-5 py-3 border bg-blue-300 rounded-md justify-between items-center">
                            <div>
                                <h6 className="text-lg font-bold">GST Bill</h6>
                            </div>
                            <div>
                                <AiOutlineDownload size={25} />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 px-5 py-3 border bg-blue-300 rounded-md justify-between items-center">
                            <div>
                                <h6 className="text-lg font-bold">GST Bill</h6>
                            </div>
                            <div>
                                <AiOutlineDownload size={25} />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 px-5 py-3 border bg-blue-300 rounded-md justify-between items-center">
                            <div>
                                <h6 className="text-lg font-bold">GST Bill</h6>
                            </div>
                            <div>
                                <AiOutlineDownload size={25} />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 px-5 py-3 border bg-blue-300 rounded-md justify-between items-center">
                            <div>
                                <h6 className="text-lg font-bold">GST Bill</h6>
                            </div>
                            <div>
                                <AiOutlineDownload size={25} />
                            </div>
                        </div>
                        <div className="p-5">
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#3C37FF] px-3 py-3 text-md leading-6 text-white shadow-sm hover:bg-blue-600"
                            >
                                Upload Document
                            </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-64 rounded p-5 shadow-lg bg-white">
                        <div class="font-bold text-lg mt-2 mb-5">Excalation Matrix</div>
                        <div className="flex flex-row justify-center gap-10">
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-400 text-white w-6 h-6 rounded-full">
                                    <TiTick size={25}/>
                                </div>
                                <div className="bg-gray-400 h-16 w-px"></div>
                                <div className="bg-gray-400 h-6 w-6 rounded-full"></div>
                                <div className="bg-gray-400 h-16 w-px"></div>
                                <div className="bg-gray-400 h-6 w-6 rounded-full"></div>
                                <div className="bg-gray-400 h-16 w-px"></div>
                                <div className="bg-gray-400 h-6 w-6 rounded-full"></div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h1 className="font-bold text-lg">John Doe</h1>
                                    <p>Sr. Associate</p>
                                </div>
                                <div>
                                    <h1 className="font-bold text-lg">John Doe</h1>
                                    <p>Sr. Associate</p>
                                </div>
                                <div>
                                    <h1 className="font-bold text-lg">John Doe</h1>
                                    <p>Sr. Associate</p>
                                </div>
                                <div>
                                    <h1 className="font-bold text-lg">John Doe</h1>
                                    <p>Sr. Associate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full rounded">
                <div class="font-bold text-xl mt-2 mb-5">DSE Status</div>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-md text-center font-bold">
                        <thead class="text-md text-gray-700 uppercase bg-blue-200">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Director's Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    DIN Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Valid From
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Valid Till
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Expiry Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Renewal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                                    1.
                                </th>
                                <td class="px-6 py-4">
                                    John Doe
                                </td>
                                <td class="px-6 py-4">
                                    98754621
                                </td>
                                <td class="px-6 py-4">
                                    06/22
                                </td>
                                <td class="px-6 py-4">
                                    06/23
                                </td>
                                <td class="px-6 py-4">
                                    <button className="font-semibold cursor-none border border-green-500 p-2 text-green-400 bg-green-200 rounded-md">Stay Relaxed!</button>
                                </td>
                                <td class="px-6 py-4">
                                    N/A
                                </td>
                            </tr>
                            <tr class="border-b bg-blue-200">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                                    2.
                                </th>
                                <td class="px-6 py-4">
                                    John Doe
                                </td>
                                <td class="px-6 py-4">
                                    98754621
                                </td>
                                <td class="px-6 py-4">
                                    06/22
                                </td>
                                <td class="px-6 py-4">
                                    06/22
                                </td>
                                <td class="px-6 py-4">
                                    <button className="font-semibold cursor-none border border-yellow-300 p-2 text-yellow-200 bg-gray-300 rounded-md">Expiring Soon</button>
                                </td>
                                <td class="px-6 py-4">
                                    N/A
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                                    3.
                                </th>
                                <td class="px-6 py-4">
                                    John Doe
                                </td>
                                <td class="px-6 py-4">
                                    98754621
                                </td>
                                <td class="px-6 py-4">
                                    06/24
                                </td>
                                <td class="px-6 py-4">
                                    06/25
                                </td>
                                <td class="px-6 py-4">
                                    <button className="font-semibold cursor-none border border-red-600 px-5 py-2 text-red-600 bg-red-300 rounded-md">Expired</button>
                                </td>
                                <td class="px-6 py-4">
                                    N/A
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}