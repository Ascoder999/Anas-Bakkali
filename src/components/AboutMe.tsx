import Image from "next/image"
import Signature from "../../public/signature.png"
import Man from "../../public/man.png"
const AboutMe = () => {
  return (
    <section className="se" id="aboutme">
        <div className=" max-md:hidden">
          <Image 
            src={Man}
            width="200"
            height="200"
            alt="Man"
          />
        </div>  
        <div className="w-5/6 h-7.5/6 mt-5 text-wrap flex items-center rounded-3xl shadow-2xl flex-col md:w-4/6 sm:mt-0">
            <h1 className="font-bold text-[30px] mt-6">
                About &nbsp;<span className="text-[#a5b1c2]">Anas Bakkali</span>
            </h1>
            <p className="p">
              I am a technical professional with a comprehensive understanding of both front-end and back-end development . With the ability to work on both client-side and server-side technology, I'm equipped to handle the development of a complete web application, from conceptualization to deployment. I have a deep understanding of web development languages and frameworks, including HTML, CSS, JavaScript, React, Node.js, Laravel, and php, as well as experience with mysql databases, server management, and version control.
            </p>
            <Image 
              src={Signature}
              width="180"
              height="180"
              alt="signature"
            />
        </div>
    </section>
  )
}

export default AboutMe