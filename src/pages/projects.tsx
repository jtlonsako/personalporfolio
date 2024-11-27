import { ProjectComponent } from "@/components/ProjectComponent"


const projects = [
    {
        title: 'Multibrew',
        subtitle: 'Specialty Coffee. Simplified.',
        src: '/multibrewicon.png',
        description: 'Created a web/mobile app that helps brew specialty coffee. The primary focus was on ease-of-use and simple design.',
        skills: ['React Native', 'SvelteKit', 'SQLite']
    },
    {
        title: 'HotswapAI',
        subtitle: 'AI Without Subscription Fees',
        src: '/HotswapAI.png',
        description: 'Created a web app that allows users to bring their own API keys to chat with LLMs from multiple providers. In doing so, users get to use their favorite LLMs on a pay-as-you-go pricing model.',
        skills: ['NextJS', 'PostgreSQL', 'Docker', 'Azure Key Valut']
    }
]

export default function Projects() {
    const projectList = projects.map((project) => {
        return (
            <ProjectComponent project={project} />
        )
    })
    return (
        <div className="grid">
            <p className="text-3xl font-bold">Projects</p>
            <div className="justify-self-center w-4/6">
                {projectList}
            </div>
        </div>
    )
}