import NavbarAdmin from "../components/NavbarAdmin";

export default function HomeAdmin() {
    return (
        <div className="bg-gray-200 min-h-screen p-12">
            <NavbarAdmin />
            <h1 className="text-2xl font-bold py-5 px-16">Good Evening!</h1>
            <div className="flex flex-col py-10 justify-center lg:gap-20 space-y-20 lg:space-y-0 lg:flex-row">
                <div class="max-w-xl rounded p-5 shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mt-2 mb-5">Employees</div>
                        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                </div>
                <div class="max-w-xl rounded p-5 shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mt-2 mb-5">Clients</div>
                        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        <div className="p-5">
                                <button
                                    type="submit"
                                    className="flex rounded-md bg-[#3C37FF] px-3 py-3 text-md leading-6 text-white shadow-sm hover:bg-blue-600"
                                >
                                    Upload Document
                                </button>
                            </div>
                    </div>
                </div>
            </div>
            <div class="w-full rounded p-5 shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mt-2 mb-5">Tenure Ending Clients</div>
                        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                </div>
        </div>
    )
}