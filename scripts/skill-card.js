const skillCardTemplate = document.createElement('template');
skillCardTemplate.innerHTML = `

    <style>
        .card{
            
        }
        .card .card-header{
            text-align: center;
        }
        .card .card-header .content{
            font-weight: bold;
        }
        .card .card-header img {
            display: block;
            margin: auto;
            width: 100px;
            height: 100px;
        }
        .card .card-body{
            text-align: center;
        }
    </style>

    <div class='card'>
        <div class='card-header'>
            <img class='card-avater' />
            <p class='content'>
                
            </p>
        </div>
        <div class='card-body'>
            <p class='content'>
            
            </p>
        </div>
    </div>
`

class SkillCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(skillCardTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector(".card .card-header .content").innerHTML = this.getAttribute("header");
        this.shadowRoot.querySelector(".card .card-header .card-avater").setAttribute("src", this.getAttribute("avatar"));
        this.shadowRoot.querySelector(".card .card-body .content").innerText = this.getAttribute("text");
    }
}

window.customElements.define('skill-card', SkillCard);