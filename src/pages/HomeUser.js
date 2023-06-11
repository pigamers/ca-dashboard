import NavbarUser from "../components/NavbarUser";


export default function HomeUser() {
    return (
        <div className="bg-gray-200 p-12">
            <NavbarUser />
            <h1 className="text-2xl font-bold py-5 px-16">Good Evening!</h1>
            <div className="flex flex-col py-10 justify-center lg:gap-20 space-y-20 lg:space-y-0 lg:flex-row">
                <div class="max-w-xl rounded p-5 shadow-lg">
                    {/* image */}
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mt-2 mb-5">Company Master Details</div>
                        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                </div>
                <div class="max-w-xl rounded p-5 shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mt-2 mb-5">Upcoming Compliance</div>
                        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-10 justify-center lg:gap-20 space-y-20 lg:space-y-0 lg:flex-row">
                <div class="max-w-xl rounded p-5 shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mt-2 mb-5">Laws and Amendments</div>
                        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-20 lg:gap-0 lg:flex-row lg:space-x-14">
                    <div class="w-full lg:w-64 rounded p-5 shadow-lg">
                        <div class="px-2 py-2">
                            <div class="font-bold text-lg mt-2 mb-5">Charter Documents</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            <div className="p-5">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#3C37FF] px-3 py-3 text-md leading-6 text-white shadow-sm hover:bg-blue-600"
                                >
                                    Upload Document
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-64 rounded p-5 shadow-lg">
                        <div class="px-6 py-4">
                            <div class="font-bold text-lg mt-2 mb-5">Excalation Matrix</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full rounded p-5 shadow-lg">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mt-2 mb-5">DSE Status</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
            </div>
        </div>
    )
}