import Image from "next/image"
import Phone from "../../public/phone.png"
import Email from "../../public/email.png"
export const Contact = () => {
  return (
    <div className="h-screen sm:h-[85vh]" id="contact">
        <div className="h-[15vh] flex items-center justify-center mt-5">
            <h1 className="text-5xl">Contact Me</h1>
        </div>
        <div className="h-[85vh] flex items-center justify-center flex-col sm:flex-row sm:h-[80vh]">
          <div className="w-full h-[42.5vh] flex items-center justify-center sm:mb-25">
                  <div className="shadow-2xl rounded-4xl h-[80%] w-[60%]">
                      <div className="flex items-center justify-center h-2/4">
                        <Image
                          src={Phone}
                          width="50"
                          height="50"
                          alt="phone"
                        />
                      </div>
                      <div className="h-2/4">
                        <div className="h-[30%] flex items-center justify-center">
                         <h1 className="font-bold sm:mt-0">Phone</h1>
                        </div>
                        <div className="h-[70%] flex items-center justify-center">
                          <p className="p-2 leading-[23px] mb-5 tc">+212778294312</p>
                        </div>
                      </div>
                    </div>
          </div>
          <div className="w-full h-[42.5vh] flex items-center justify-center sm:mb-25">
                    <div className="shadow-2xl rounded-4xl h-[80%] w-[60%]">
                      <div className="flex items-center justify-center h-2/4">
                        <Image
                          src={Email}
                          width="50"
                          height="50"
                          alt="email"
                        />
                      </div>
                      <div className="h-2/4">
                        <div className="h-[30%] flex items-center justify-center">
                         <h1 className="font-bold sm:mt-0">Email</h1>
                        </div>
                        <div className="h-[70%] flex items-center justify-center">
                          <p className="p-2 leading-[23px] mb-5 tc">as.coder999@gmail.com</p>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
    </div>
  )
}
