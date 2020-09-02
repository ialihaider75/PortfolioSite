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
        font-family: 'Long Cang', cursive;
    }
    .home-section .content p{
        text-align: center;
        font-weight: bold;
        font-size: 28px;
    }
    </style>
    <div class='section home-section'>
        <div class='content'>
            <p>
                Hi, I'm <span>Ali Haider</span><span>.</span>
                <br/>
                I'm a full stack engineer<span>.</span>
            </p>
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