import NavbarAdmin from "../components/NavbarAdmin";

export default function Announcements() {
    return (
        <div className="bg-gray-200 min-h-screen p-12">
            <NavbarAdmin />
            <h1 className="text-2xl font-bold py-5 px-16">Announcements</h1>
            <div className="flex flex-col py-10 justify-center lg:gap-20 space-y-20 lg:space-y-0 lg:flex-row">
                <div class="w-full rounded p-5 shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mt-2 mb-5">Make Announcement</div>
                        <div className="flex items-center gap-5 justify-between py-5">
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <button
                                type="submit"
                                className="flex rounded-md bg-[#3C37FF] px-3 py-3 text-md leading-6 text-white shadow-sm hover:bg-blue-600"
                            >
                                Upload Document
                            </button>
                        </div>
                        <div className="flex items-center gap-5 justify-between py-5">
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
        </div>
    )
}