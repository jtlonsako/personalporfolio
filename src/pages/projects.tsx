import { ProjectComponent } from "@/components/ProjectComponent"


const projects = [
    {
        title: 'Multibrew',
        subtitle: 'Specialty Coffee. Simplified.',
        src: '/multibrewicon.png',
        description: 'Created a web/mobile app that helps brew specialty coffee. The primary focus was on ease-of-use and simple design.',
        skills: ['React Native', 'SvelteKit', 'SQLite'],
        alt: 'Multibrew Icon',
        url: 'https://apps.apple.com/us/app/multibrew/id6499178775'
    },
    {
        title: 'HotswapAI',
        subtitle: 'AI Without Subscription Fees',
        src: '/HotswapAI.png',
        description: 'Created a web app that allows users to bring their own API keys to chat with LLMs from multiple providers. In doing so, users get to use their favorite LLMs on a pay-as-you-go pricing model.',
        skills: ['NextJS', 'PostgreSQL', 'Docker', 'Azure Key Valut'],
        alt: 'HotswapAI Icon',
        url: 'https://hotswapai.com'
    }
]

export default function Projects() {
    const projectList = projects.map((project) => {
        return (
            <a key={project.title} target="_blank" href={project.url} className="no-underline text-black hover:no-underline">
                <ProjectComponent project={project} />
            </a>
        )
    })
    return (
        <div className="grid -mt-5">
            <p className="flex justify-center text-3xl font-bold">Projects</p>
            <div className="justify-self-center w-5/6 md:w-4/6">
                {projectList}
            </div>
        </div>
    )
}