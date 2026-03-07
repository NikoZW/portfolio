import user_image from './user-image.png';
import code_icon from './code-icon.png';
import edu_icon from './edu-icon.png';
import project_icon from './project-icon.png';
import vscode from './vscode.png';
import cursor from './cursor.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow_dark from './right-arrow-dark.png';
import logo from './logo.png';
import logo_night from './logo_night.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import menu_black from './menu-black.png';
import close_black from './close-black.png';
import send_icon from './send-icon.png';
import send_icon_night from './send-icon-night.png';
import vercel from './vercel.png';
import supabase from './supabase.png';
import claude from './claude.png';
import notion from './notion.png';
import tableau from './tableau.png';


export const assets = {
    user_image,
    code_icon,
    edu_icon,
    project_icon,
    vscode,
    cursor,
    figma,
    git,
    mongodb,
    right_arrow_white,
    right_arrow_dark,
    logo,
    logo_night,
    profile_img,
    download_icon,
    hand_icon,
    menu_black,
    close_black,
    send_icon,
    send_icon_night,
    vercel,
    supabase,
    claude,
    notion,
    tableau

};

export const workData = [
    {
        title: 'Niko Tick',
        description: 'Full-Stack Todo App',
        tech: 'React, Vite, Supabase',
        bgImage: '/work-1.png',
        link: 'https://niko-tick.vercel.app',
    },
    {
        title: 'Niko Budget',
        description: 'AI-Powered Expense Tracker',
        tech: 'React Native, Expo, Express.js, DeepSeek AI, Supabase',
        bgImage: '/work-2.png',
        link: 'https://github.com/NikoZW/niko-budget',
    },
    {
        title: 'Niko Daily Briefs',
        description: 'Automated AI Newsletter',
        tech: 'React, Next.js, Inngest, Resend, RSS',
        bgImage: '/work-3.png',
        link: 'https://niko-brief.vercel.app',
    },
    {
        title: 'E. & J. Gallo Winery',
        description: 'Market Entry Analysis',
        tech: 'Python, R, SQL, Tableau',
        bgImage: '/work-4.png',
        link: 'https://github.com/NikoZW/gallo-market-analysis-portfolio',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        tech: '',
        bgImage: '/work-5.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        tech: '',
        bgImage: '/work-6.png',
    },
]

export const infoList = [
    { icon: assets.code_icon, title: 'Skills', description: 'HTML, CSS, JavaScript, TypeScript, Python, Java, React, Expo, Node.js, Express.js, SQL, Next.js, Vite, Tailwind CSS' },
    { icon: assets.edu_icon, title: 'Education', items: ['BCIT', 'Wake Forest University', 'NC State University'] },
    { icon: assets.project_icon, title: 'Companies', items: ['Ernst & Young', 'Willis Towers Watson', 'Inmar Intelligence'] }
];

export const toolsData = [
    assets.vscode, assets.cursor, assets.mongodb, assets.figma, assets.git, assets.vercel, assets.supabase, assets.claude
];