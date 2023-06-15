import NavbarUser from "../components/NavbarUser";


export default function ProfileUser() {
    return (
        <div className="bg-gray-200 p-20">
            <NavbarUser />
            <div>
                <h1 className="text-2xl font-bold py-5">Director Profile</h1>
            <div class="max-w-xl m-auto  bg-white border border-gray-200 rounded-lg shadow">
                <div class="flex lg:flex-row flex-col justify-center items-center py-10">
                    <div className="flex flex-col gap-4 p-8">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="assets/logo.png" alt="Bonnie" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900">Bonnie Green</h5>
                    </div>
                    <div class="flex flex-col mt-4 gap-4 font-semibold md:mt-6">
                        <div className="flex flex-row">
                            <h4>Email</h4>
                            <p> : Exercitation fugiat nulla </p>
                        </div>
                        <div className="flex flex-row">
                            <h4>Mobile {"  "} </h4>
                            <p>: Exercitation fugiat nulla </p>
                        </div>
                        <div className="flex flex-row">
                            <h4>GST Number</h4>
                            <p> : Exercitation fugiat nulla </p>
                        </div>
                        <div className="flex flex-row">
                            <h4>Company Address</h4>
                            <p> : Exercitation fugiat nulla </p>
                        </div>
                        <div className="flex flex-row">
                            <h4>DIN Number</h4>
                            <p> : Exercitation fugiat nulla </p>
                        </div>
                        <div className="flex flex-row">
                            <h4>Valid From</h4>
                            <p> : Exercitation fugiat nulla </p>
                        </div>
                        <div className="flex flex-row">
                            <h4>Valid Till</h4>
                            <p> : Exercitation fugiat nulla </p>
                        </div>    
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}