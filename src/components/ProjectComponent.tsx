import { SkillTag } from "./SkillTag";


export function ProjectComponent({project}: {project: Project}) {

    const skillArray = project.skills.map((skill: string) => {
        return(
            <div key={skill} className="mt-2">
                <SkillTag skill={skill} />
            </div>
        );
    })

    return (
        <div className="h-fit md:h-48 w-full my-5 grid md:flex rounded-lg border-2 border-black overflow-hidden">
            <img className="object-cover" src={project.src} alt={project.alt} />
            <div className="flex flex-col">
                <div className="grid md:flex ml-3 h-fit mt-2">
                    <p className="text-3xl font-bold align-middle">{project.title}</p>
                    <p className="text-xl font-bold md:ml-2 content-center mt-1">{project.subtitle}</p>
                </div>
                <p className="md:text-lg text-left ml-3 w-11/12 mt-2 leading-snug font-semibold">{project.description}</p>
                <div className="md:flex w-full grid grid-cols-2 items-start md:items-end h-full mb-2 ml-3 md:space-x-2">
                    {skillArray}
                </div>
            </div>
        </div>
    )
}