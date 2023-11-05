// Imports
import { q,qa,CLICK } from '../../dom.js';


let setting_page = q('.setting_page');


// Functions
if(setting_page == null);
const setting = () => {
    
    
    // Variables
    let setting_dropdown_container = qa('.setting_page .dropdownn');
    let setting_dropdown_buttons = qa('.setting_page .dropdown_select');
    let setting_dropdown_selects = qa('.dropdown_menu > *');
    let game_dropdown_result = q('.game_dropdown_result');
    let crypto_dropdown_result = q('.crypto_dropdown_result');
    let network_dropdown_result = q('.network_dropdown_result');
    
    
    // Menu
    if(setting_dropdown_buttons == null) return console.log('Setting Important Element not found');
    setting_dropdown_buttons.forEach((setting_dropdown_button) => {
        let parentDropdownElement = setting_dropdown_button.parentElement;
        // Adding class 
        setting_dropdown_button.addEventListener('click', () => {
            parentDropdownElement.classList.toggle('active');
            console.log('Setting menu opened');
        })
        setting_dropdown_selects.forEach((setting_dropdown_select) => {
            
            setting_dropdown_select.addEventListener('click',()=>{
                
                parentDropdownElement.classList.remove('active');
                
            })
        })
        
    });
    // Menu Text
    if(setting_dropdown_selects == null) return console.log('Navbar not found');
    setting_dropdown_selects.forEach((setting_dropdown_select) => {
        let parentDropdownContainer = setting_dropdown_select.parentElement.parentElement;
        setting_dropdown_select.addEventListener('click', () => {
            
            console.log(setting_dropdown_select.innerText);
            console.log(parentDropdownContainer.getAttribute('class'));
            
            
            
            if (parentDropdownContainer.classList.contains('game')){ 
                console.log('Game Drop-down')
                game_dropdown_result.innerText = setting_dropdown_select.innerText;
                localStorage.setItem('GAME_DROPDOWN_RESULT',setting_dropdown_select.innerText);
                
            }
            if (parentDropdownContainer.classList.contains('network')){ 
                console.log('Network Drop-down');
                
                console.log(setting_dropdown_select.getAttribute('src'));
                network_dropdown_result.setAttribute('src', setting_dropdown_select.getAttribute('src'));
                localStorage.setItem('NETWORK_DROPDOWN_RESULT',setting_dropdown_select.getAttribute('src'));
                
            }
            if (parentDropdownContainer.classList.contains('crypto')){ 
                
                console.log('Crypto Drop-down')
                crypto_dropdown_result.innerText = setting_dropdown_select.innerText;
                localStorage.setItem('CRYPTO_DROPDOWN_RESULT',setting_dropdown_select.innerText);
                
            }
            
            
            
        })
        // Localstorage Power
        game_dropdown_result.innerText = localStorage.getItem('GAME_DROPDOWN_RESULT');
        network_dropdown_result.setAttribute('src', localStorage.getItem('NETWORK_DROPDOWN_RESULT'));
        crypto_dropdown_result.innerText = localStorage.getItem('CRYPTO_DROPDOWN_RESULT');
    });
    
    
}









// Exports
export{
    
    setting 
    
}
