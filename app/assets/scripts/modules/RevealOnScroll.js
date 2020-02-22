import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
class RevealOnScroll {
    constructor(itemsToReveal, thresholdPercent) {
        this.itemsToReveal = itemsToReveal;
        this.thresholdPercent = thresholdPercent;
        this.browersHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events(){
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            // console.log("brower jus resized")
            this.browersHeight=window.innerHeight;
        }, 333));
    }

    hideInitially() {
        this.itemsToReveal.forEach(e => {
            e.classList.add("reveal-item");
            e.isRevealed=false;
        });
        this.itemsToReveal[this.itemsToReveal.length-1].isLastItem = true;
    }
    calcCaller() {
        // console.log("Scroll function ran")
        this.itemsToReveal.forEach(e => {
            if(!e.isRevealed){
                this.calculateIfScrolledTo(e);
            }
        });
    }
    calculateIfScrolledTo(el){
        if(window.scrollY + this.browersHeight > el.offsetTop){
            // console.log("element was calculated");
            let scrollPercent = (el.getBoundingClientRect().top / this.browersHeight)*100;
            if(scrollPercent < this.thresholdPercent){
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                if(el.isLastItem){
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
            }
        }
    }
}

export default RevealOnScroll;