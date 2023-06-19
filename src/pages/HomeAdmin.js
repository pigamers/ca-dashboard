import NavbarAdmin from "../components/NavbarAdmin";
import { AiOutlineDownload } from "react-icons/ai";

export default function HomeAdmin() {
    return (
        <div className="bg-gray-200 min-h-screen p-12">
            <NavbarAdmin />
            <h1 className="text-2xl font-bold py-5 px-16">Good Evening!</h1>
            <div className="flex flex-col py-10 justify-center lg:gap-20 space-y-20 lg:space-y-0 lg:flex-row">
                <div class="w-full rounded p-5 space-y-5 shadow-lg bg-white">
                    <div class="font-bold text-xl mt-2 mb-5">Employees</div>
                    <div className="flex flex-row justify-center items-center w-full gap-32 px-5 py-3 border bg-blue-200 rounded-md">
                        <div>
                            <h6 className="text-lg font-bold">John Doe</h6>
                        </div>
                        <div className="flex flex-row gap-3">
                            <h1>Working with</h1>
                            <div className="h-6 w-6 rounded-full bg-slate-600"></div>
                        </div>
                        <div>
                            <AiOutlineDownload size={25} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full gap-32 px-5 py-3 border bg-blue-200 rounded-md">
                        <div>
                            <h6 className="text-lg font-bold">John Doe</h6>
                        </div>
                        <div className="flex flex-row gap-3">
                            <h1>Working with</h1>
                            <div className="h-6 w-6 rounded-full bg-slate-600"></div>
                        </div>
                        <div>
                            <AiOutlineDownload size={25} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full gap-32 px-5 py-3 border bg-blue-200 rounded-md">
                        <div>
                            <h6 className="text-lg font-bold">John Doe</h6>
                        </div>
                        <div className="flex flex-row gap-3">
                            <h1>Working with</h1>
                            <div className="h-6 w-6 rounded-full bg-slate-600"></div>
                        </div>
                        <div>
                            <AiOutlineDownload size={25} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full gap-32 px-5 py-3 border bg-blue-200 rounded-md">
                        <div>
                            <h6 className="text-lg font-bold">John Doe</h6>
                        </div>
                        <div className="flex flex-row gap-3">
                            <h1>Working with</h1>
                            <div className="h-6 w-6 rounded-full bg-slate-600"></div>
                        </div>
                        <div>
                            <AiOutlineDownload size={25} />
                        </div>
                    </div>
                </div>
                <div class="w-full rounded p-5 shadow-lg space-y-5 bg-white">
                    <div class="font-bold text-xl mt-2 mb-5">Clients</div>
                    <div className="flex flex-row justify-start items-center w-full gap-20 px-5 py-3 border bg-blue-200 rounded-md">
                        <div className="flex flex-row items-center gap-5">
                            <div className="h-10 w-10 rounded-full bg-slate-600"></div>
                            <h1 className="text-lg font-medium">Sameer Wani</h1>
                        </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-20 px-5 py-3 border bg-blue-200 rounded-md">
                        <div className="flex flex-row items-center gap-5">
                            <div className="h-10 w-10 rounded-full bg-slate-600"></div>
                            <h1 className="text-lg font-medium">Sameer Wani</h1>
                        </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-20 px-5 py-3 border bg-blue-200 rounded-md">
                        <div className="flex flex-row items-center gap-5">
                            <div className="h-10 w-10 rounded-full bg-slate-600"></div>
                            <h1 className="text-lg font-medium">Sameer Wani</h1>
                        </div>
                    </div>
                    <div className="flex p-5 justify-end">
                        <button
                            type="submit"
                            className="flex rounded-md bg-[#3C37FF] px-10 py-3 text-md leading-6 text-white shadow-sm hover:bg-blue-600"
                        >
                            View All
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full rounded p-3 bg-white">
                <div class="font-bold text-xl mt-2 mb-5">Tenure Ending Clients</div>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}