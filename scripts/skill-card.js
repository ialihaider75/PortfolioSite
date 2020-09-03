const skillCardTemplate = document.createElement('template');
skillCardTemplate.innerHTML = `

    <style>
        .card{
            width: 300px;
        }
        .card .card-header{
            text-align: center;
        }
        .card .card-header img {
            width: 100px;
            height: 100px;
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
    }
}

window.customElements.define('skill-card', SkillCard);