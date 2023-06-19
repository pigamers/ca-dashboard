import NavbarUser from "../components/NavbarUser";

export default function Issue() {
    return (
        <div className="bg-gray-200 min-h-screen">
            <NavbarUser />
            <div className="pt-20 px-5">
                <div className="text-2xl font-bold py-4">Open Issue Tracker</div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-md text-center font-bold">
                        <thead class="text-md text-gray-700 uppercase bg-blue-200">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Issue Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Responsibility
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Area
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Particulars
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Remarks
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
                                    <button className="font-semibold cursor-none border border-green-500 p-2 text-green-400 bg-green-200 rounded-md">Closed</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-yellow-300 p-2 text-yellow-200 bg-gray-300 rounded-md">VIP</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-red-600 px-5 py-2 text-red-600 bg-red-300 rounded-md">Open</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
                                </td>
                            </tr>
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
                                    <button className="font-semibold cursor-none border border-green-500 p-2 text-green-400 bg-green-200 rounded-md">Closed</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-yellow-300 p-2 text-yellow-200 bg-gray-300 rounded-md">VIP</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-red-600 px-5 py-2 text-red-600 bg-red-300 rounded-md">Open</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
                                </td>
                            </tr>
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
                                    <button className="font-semibold cursor-none border border-green-500 p-2 text-green-400 bg-green-200 rounded-md">Closed</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-yellow-300 p-2 text-yellow-200 bg-gray-300 rounded-md">VIP</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-red-600 px-5 py-2 text-red-600 bg-red-300 rounded-md">Open</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
                                </td>
                            </tr>
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
                                    <button className="font-semibold cursor-none border border-green-500 p-2 text-green-400 bg-green-200 rounded-md">Closed</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-yellow-300 p-2 text-yellow-200 bg-gray-300 rounded-md">VIP</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-red-600 px-5 py-2 text-red-600 bg-red-300 rounded-md">Open</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
                                </td>
                            </tr>
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
                                    <button className="font-semibold cursor-none border border-green-500 p-2 text-green-400 bg-green-200 rounded-md">Closed</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-yellow-300 p-2 text-yellow-200 bg-gray-300 rounded-md">VIP</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
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
                                    <button className="font-semibold cursor-none border border-red-600 px-5 py-2 text-red-600 bg-red-300 rounded-md">Open</button>
                                </td>
                                <td class="px-6 py-4">
                                    SST to Revert
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}