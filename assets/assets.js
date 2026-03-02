import user_image from './user-image.png';
import code_icon from './code-icon.png';
import edu_icon from './edu-icon.png';
import project_icon from './project-icon.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import menu_black from './menu-black.png';
import close_black from './close-black.png';
import send_icon from './send-icon.png';
import vercel from './vercel.png';
import supabase from './supabase.png';
import claude from './claude.png';
import notion from './notion.png';

export const assets = {
    user_image,
    code_icon,
    edu_icon,
    project_icon,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    profile_img,
    download_icon,
    hand_icon,
    menu_black,
    close_black,
    send_icon,
    vercel,
    supabase,
    claude,
    notion

};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const infoList = [
    { icon: assets.code_icon, title: 'Skills', description: 'HTML, CSS, JavaScript, TypeScript, Python, Java, React, Node.js, SQL, Next.js, Tailwind CSS, Restful API' },
    { icon: assets.edu_icon, title: 'Education', description: 'BCIT, Wake Forest University, NC State University' },
    { icon: assets.project_icon, title: 'Companies', description: 'EY, Willis Towers Watson, Inmar Intelligence' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git, assets.vercel, assets.supabase, assets.claude, assets.notion
];