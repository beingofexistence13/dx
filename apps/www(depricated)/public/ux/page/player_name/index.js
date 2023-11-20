// Imports
import { q,qa,CLICK } from '../../dom.js';


let player_name_page = q('.profile_name_page')

// Functions
if(player_name_page == null);
const player_name = () => {
    
    // Variables
    const player_name_submit = q('.player_name_submit') || null;

    
    if(player_name_submit == null) return;
    player_name_submit.addEventListener('click',()=> {
        
        let profile_name_value = q('.player_name_input').value;
        console.log('The Player Name Is',profile_name_value);
        localStorage.setItem('Player_Name',profile_name_value);
        console.log(localStorage.getItem('Player_Name'));
        
    })
    
    
}









// Exports
export{
    
    player_name
    
}
