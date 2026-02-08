import Image from "next/image"
import Work from "../../public/work.png"
import Link from "next/link"
const Projects = () => {
  return (
    <div className="h-screen max-sm:h-[110vh] max-sm:mt-10" id="projects">
        <div className="h-[16vh] sm:hidden"></div>
        <div className="h-full">
            <div className="h-[15vh] flex items-center justify-center">
                <h1 className="text-5xl">My Projects</h1>
            </div>
            <div className="mt-10 h-[42.5vh] flex items-center justify-center">
              <Image
                src={Work}
                width="300"
                height="300"
                alt="work"
              />
            </div>
            <div className="h-[42.5vh] flex items-center justify-center">
              <Link href="/projects">
                <button className="projects_btn">
                  View my work here
                </button>
              </Link>
            </div>
        </div>
    </div>
    

  )
}

export default Projects