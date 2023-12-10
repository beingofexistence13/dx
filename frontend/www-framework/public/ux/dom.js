// Variables 
let element_length;
// Functions
const CLICK = ({ ELEMENT, FUNCTION }) => {
    element_length = ELEMENT.length;
    if (ELEMENT == null) console.log('Click Listner');;
    if (element_length > 1) {
        ELEMENT.forEach((elements) => {
            if (elements == null) console.log('Click Listner');;
            elements.addEventListener('click', FUNCTION);
        });
    } else {
        ELEMENT.addEventListener('click', FUNCTION);
    }
}
// Class 
class clickandhold {
    constructor(target,callback) {
        this.target = target;
        this.callback = callback;
        this.isHeld = false;
        this.activeHoldTimeoutId = null;
        
        ['mousedown','touchstart'].forEach((type) =>{
            this.target.addEventListener(type,this._onHoldStart.bind(this));    
        })
        ['mouseup','mouseleave','mouseout','touchend','touchcancel'].forEach((type) =>{
            this.target.addEventListener(type,this._onHoldStart.bind(this));    
        })
        
    }
    _onHoldStart(){
        this.isHeld = true;
        this.activeHoldTimeoutId = setTimeout(()=>{
            if(this.isHeld){
                
                this.callback(); 
            }
            
        },1000)
    }
    _onHoldEnd(){
        this.isHeld = false;
        clearTimeout(this.activeHoldTimeoutId);
    }
}

function q(child) { return document.querySelector(child); }
function qa(child) { return document.querySelectorAll(child); }
// Exports
export {

    CLICK,
    q,
    qa

}
