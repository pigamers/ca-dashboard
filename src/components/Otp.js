export default function Otp() {
    return(
        <div className="flex flex-row lg:justify-between min-h-screen">
            <div className="lg:flex hidden lg:flex-col w-1/2 gap-32 bg-[#3C37FF] justify-start items-center">
                <div className="my-5">
                    <img src="logo.png" alt="logo" className="h-20" />
                </div>
                <div className="my-5">
                    <img src="assets/otpPhoto.png" alt="loginphoto" className="h-80"/>
                </div>
            </div>
            <div className="flex lg:flex-col m-auto justify-center lg:items-center lg:w-1/2">
                    <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="text-2xl font-semibold my-3">Verify OTP</h1>
                    <p className="text-sm font-medium my-3">Please enter the otp sent to your email</p>
                        <form className="space-y-6" action="#">
                            {/* Email */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                                        OTP
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        required
                                        className="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-[#3C37FF] placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#3C37FF] px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}