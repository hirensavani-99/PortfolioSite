import { MdWork } from 'react-icons/md'
import { GiNotebook } from 'react-icons/gi'
import './Experience.css'

export const frontendDevelopment = [
    {
        name: "HTML",
        skillrate: "Proficient",
        from: "w3school"
    }, {
        name: "css",
        skillrate: "Intermediate",
        from: "w3school"
    }, {
        name: "JS",
        skillrate: "Intermediate",
        from: "Youtube"
    }, {
        name: 'React',
        skillrate: "Proficient",
        from: "Udemy"
    },
    {
        name: "Nextjs",
        skillrate: "Beginner",
        from: "youtube"
    },
    {
        name: "Typescript",
        skillrate: "Beginner",
        from: "youtube"
    }
]

export const backendDevelopment = [
    {
        name: "Nodejs",
        skillrate: "Intermediate",
        from: "udemy"
    }, {
        name: "Expressjs",
        skillrate: "Intermediate",
        from: "udemy"
    }, {
        name: "Mongodb",
        skillrate: "Intermediate",
        from: "udemy"
    }, {
        name: 'Sql',
        skillrate: "Beginner",
        from: "university"
    },
    {
        name: "python",
        skillrate: "Beginner",
        from: "university"
    },
    {
        name: "c#",
        skillrate: "Beginner",
        from: "university"
    },
    {
        name: "Solidity",
        skillrate: "Beginner",
        from: "udemy"
    }
]


export const Journey = [
    {
        name: "HCL Technologies",
        role: "Junior React developer",
        from: "06-2022 - current",
        logo: <MdWork className='experience__details-icon' />,
        hr: <hr className='horizontalLine' />
    }, {
        name: "Collabera",
        role: "React trainee",
        from: "04-2022 - 06-2022",
        logo: <MdWork className='experience__details-icon' />,
        hr: <hr className='horizontalLine' />
    },
    {
        name: "Opole university of technology",
        role: "Student",
        from: "09-2018 - 03-2022",
        logo: <GiNotebook className='experience__details-icon' />
    }
]


export const OtherSkills = [
    {
        name: "AWS",
        skillrate: "Beginner"
    }, {
        name: "Agile",
        skillrate: "Beginner"
    }, {
        name: "DSA",
        skillrate: "Intermediate"
    }, {
        name: 'DBMS',
        skillrate: "Beginner"
    }, {
        name: "communication skills",
        skillrate:"Intermediate"
    },
    {
        name: "stock Trading",
        skillrate: "Intermediate"
    }
]
