export default function Otp() {
    return (
        <div className="flex flex-row lg:justify-between min-h-screen">
            <div className="lg:flex hidden lg:flex-col w-1/2 gap-32 bg-[#3C37FF] justify-start items-center">
                <div className="my-5">
                    <img src="assets/logo.png" alt="logo" className="h-20" />
                </div>
                <div className="my-5">
                    <img src="assets/otpPhoto.png" alt="loginphoto" className="h-80" />
                </div>
            </div>
            <div className="flex lg:flex-col m-auto justify-center lg:items-center lg:w-1/2">
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="text-2xl font-semibold my-3">Verify OTP</h1>
                    <p className="text-sm font-medium my-3">Please enter the otp sent to your email</p>
                    <form className="space-y-6" action="#">
                        <div class="flex flex-col gap-5">
                            <div class="flex flex-row gap-4 items-center justify-between mx-auto w-full max-w-xs">
                                <div class="w-16 h-16 ">
                                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                </div>
                                <div class="w-16 h-16 ">
                                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                </div>
                                <div class="w-16 h-16 ">
                                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
                                </div>
                                <div class="w-16 h-16 ">
                                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
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
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}