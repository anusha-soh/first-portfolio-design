interface Inavitms {
    name:string,
    link:string
}
// Nav links
export const navItems: Inavitms[] = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"About",
        link:"/about"
    },
    {
        name:"Contact",
        link:"/contact"
    },
]

// 

interface Ifooternavlinks {
    name:string,
    key:number,
    link:string
} 

export const footernavlinks : Ifooternavlinks[] = [
    {
        name:"Home",
        key:1,
        link:"/"    
    },
    {
        name:"Services",
        key:2,
        link:"/"    
    },
    {
        name:"Portfolio",
        key:3,
        link:"/"    
    },
    {
        name:"Contact",
        key:4,
        link:"/contact"    
    },
]

// footercopywrite links

interface IfooterCwLinks {
    name:string,
    key:number,
    link:string  
} 

export const footerCwLinks : IfooterCwLinks[]= [
    {
    name:"Privicy Policy",
    key:1,
    link:"/"
    },
    {
    name:"Terms of services",
    key:2,
    link:"/"
    },
    {
    name:"Cookies seting",
    key:3,
    link:"/"
    },
    
        
]