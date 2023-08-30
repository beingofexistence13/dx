'use-strick';
// Imports
import { q,qa,CLICK } from './dom.js';
import { NAVBAR_LOGIC } from './navbar.js';


// Dom Varibles
let body = q('body');
let many_elements = qa('h1');
let button = q('button') || q('.sound');
let sidebarToggeler = q('.sidebarToggeler');
// let sidebar = q('.sidebar');
// let theme = q('.theme');



// SideBar
// const sidebarFunctionality = ()=>{
    
//     if(sidebar.classList.contains("close")){
        
//         sidebar.classList.add("active");
//         sidebar.classList.remove("close");
//             console.log('yes');
//     }else{
//         sidebar.classList.add("close");
//         sidebar.classList.remove("active");
        
        
//     }
    
// }
// if(sidebarToggeler == null) console.log('Body Is Needed');
// CLICK({ELEMENT: sidebarToggeler,FUNCTION : sidebarFunctionality })

















// Functions
const opLog = ()=>{
}
if(body == null) console.log('Body Is Needed');
CLICK({ELEMENT: body,FUNCTION : opLog})


// Local Storage 
localStorage.setItem('Name',body);
localStorage.setItem('Email','manfrom');
localStorage.setItem('Namitse','Emon');


// Ethereum Detection
// if(!window.ethereum){
// }
// else{
    
//     console.log(window.ethereum);
//     console.log(ethers);
    
// }



// Function Inisilization
NAVBAR_LOGIC();































                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
