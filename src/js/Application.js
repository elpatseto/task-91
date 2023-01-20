import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {

    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();

        const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
        let count = 0;

        const message = document.createElement("div");
        message.classList.add("message");
        message.innerText = "Ah";

        this._beat = new Beat();

        document.querySelector(".main").appendChild(message);


        this._beat.addListener(Beat.events.BIT, function () {
            _create();
            count++;
            if(count === 6) {
                count = 0;
            }
        });

        const _create = () => {
            message.textContent = lyrics[count];
        }

        this.emit(Application.events.READY);

    }


}
