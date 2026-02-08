import Image from "next/image"
import Front from "../../public/front-end.png"
import Server from "../../public/server.png"
import DataBase from "../../public/database.png"
const Services = () => {
  return (
    <section className="h-[180vh] sm:h-screen" id="services">
      <div className="h-[15vh] flex items-center justify-center mt-5">
        <h1 className="text-5xl">My Services</h1>
      </div>
      <div className="h-full flex items-center justify-center flex-col gap-5 sm:flex-row sm:h-[80vh]">
        <div className="shadow-2xl rounded-4xl h-[70%] w-[60%] mt-10 sm:mx-5 sm:mt-0">
          <div className="flex items-center justify-center mt-3 h-2/4 ">
            <Image
              src={Front}
              width="150"
              height="50"
              alt="front"
            />
          </div>
          <div className="h-2/4">
            <div className="h-[30%] flex items-center justify-center">
             <h1 className="font-bold mt-5 sm:mt-0">Web Development</h1>
            </div>
            <div className="h-[70%] flex items-center justify-center">
              <p className="p-2 leading-[23px] mb-5 tc">I design and develop custum websites and web applications using the latest technologies and framewors.</p>
            </div>
          </div>
        </div>
        <div className="shadow-2xl rounded-4xl h-[70%] w-[60%] mt-10 sm:mt-0">
          <div className="flex items-center justify-center mt-3 h-2/4">
            <Image
              src={DataBase}
              width="150"
              height="50"
              alt="Database"
            />
          </div>
          <div className="h-2/4">
            <div className="h-[30%] flex items-center justify-center">
             <h1 className="font-bold mt-5 sm:mt-0">Database Management</h1>
            </div>
            <div className="h-[70%] flex items-center justify-center">
              <p className="p-2 leading-[23px] mb-5 tc">I can help you manage and optimize your databases, ensuring efficient data storage and retieval.</p>
            </div>
          </div>
        </div>
        <div className="shadow-2xl rounded-4xl h-[70%] w-[60%] mt-10 sm:mx-5 sm:mt-0">
          <div className="flex items-center justify-center mt-3 h-2/4">
            <Image
              src={Server}
              width="150"
              height="50"
              alt="Server"
            />
          </div>
          <div className="h-2/4">
            <div className="h-[30%] flex items-center justify-center">
             <h1 className="font-bold mt-5 sm:mt-0">Server Management</h1>
            </div>
            <div className="h-[70%] flex items-center justify-center">
              <p className="p-2 leading-[23px] mb-5 tc">I provide server management services to ensure your website or application runs smoothly and efficiently.</p>
            </div>
          </div>
        </div>
      </div>
      

    </section>

  )
}

export default Services