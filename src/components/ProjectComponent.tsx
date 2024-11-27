import { SkillTag } from "./SkillTag";


export function ProjectComponent({project}) {

    const skillArray = project.skills.map((skill) => {
        return(
            <SkillTag skill={skill} />
        );
    })

    return (
        <div className="h-48 w-full my-5 flex rounded-lg border-2 border-black overflow-hidden">
            <img className="object-cover" src={project.src} alt={project.alt} />
            <div className="flex flex-col">
                <div className="flex ml-3 h-fit mt-2">
                    <p className="text-3xl font-bold align-middle">{project.title}:</p>
                    <p className="text-xl font-bold ml-2 content-center mt-1">{project.subtitle}</p>
                </div>
                <p className="text-lg text-left ml-3 w-11/12 mt-2 font-semibold">{project.description}</p>
                <div className="flex items-end h-full mb-2 ml-3 space-x-2">
                    {skillArray}
                </div>
            </div>
        </div>
    )
}