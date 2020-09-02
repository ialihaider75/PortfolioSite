const homeTemplate = document.createElement('template');
homeTemplate.innerHTML = `
    <style>
    @import '../styles/style.css';
    .home-section {
        background-image: url('../images/bg-1.jpg');
        background-position: top center; 
        background-repeat: no-repeat;
        background-size: cover;
        postion: relative
    }
    .home-section .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .home-section .content p{
        text-align: center;
        font-weight: bold;
        font-size: 28px;
        padding: 0;
        margin: 0;
        line-height: 0.7cm;
        font-family: 'Long Cang', cursive;
    }
    .home-section .content div{
        text-align: center;
        margin-top: 15px;
        border: 2px solid black;
        background-color: rgba(0,0,0,0.1);
        font-size: 20px;
        box-shadow: 3px 3px 5px 6px rgba(0,0,0,0.2);
        cursor: pointer;
        transition: transform 1s;
    }
    .home-section .content div:hover {
        transform: scale(1.2);
    }
    .home-section .content p .name{
        color: #A2A6A6;
        font-size: 36px;
    }
    .home-section .content p .period{
        color: #313335;
        font-size: 60px;
    }
    </style>
    <div class='section home-section'>
        <div class='content'>
            <p>
                Hi, I'm <span class='name'>Ali Haider</span><span class='period'>.</span>
            </p>
            <p>
                I'm a full stack engineer<span class='period'>.</span>
            </p>
            <div>
                View more
            </div>
        </div>
    </div>`;
export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(homeTemplate.content.cloneNode(true));
    }

}
window.customElements.define('my-home', Home);