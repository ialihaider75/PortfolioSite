const navigationBarTemplate = document.createElement('template');
navigationBarTemplate.innerHTML = `
    <style>
    @import 'styles/style.css';
        nav {
            position: fixed;
            z-index:1;
            background-color: rgba(0,0,0,0.1);
            width: 100%;
            display: block;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0; 
        }
        nav ul li{
            display: inline;
        }
        nav ul li a{
            display: block;
            text-decoration: none;
            float: left;
            padding: 8px;
            color: black;
            font-size: 20px;
            font-weight: bold;
            margin-right: 5px;
            transition: transform 1s;
        }
        nav ul li a:hover{
            transform: scale(1.1);
        }
        nav ul li a img{
            height: 50px;
            width: 50px;
        }
        nav ul .menu-btn{
            display: none;
        }
        nav div{
            height: 2px;
            background-color: rgba(0,0,0,0.3);
        }
        .nav-active{
            background-color: grey;
        }
        @media screen and (max-width: 600px) {
            nav {
                background-color: #A2A6A6;
            }
            nav ul li {
                display: none;
            }
            nav ul .menu-btn{ 
                display: inline-block;
            }
            nav ul li a{
                display: block;
                text-decoration: none;
                float: none;
                padding: 8px;
                color: black;
                font-size: 20px;
                font-weight: bold;
                margin-right: 5px;
                transition: transform 1s;
            }
          }
    </style>
    <nav>
        <ul class='clearfix'>
            <li class='menu-btn'>
                <a href ="#">
                    <img src='images/menu.png'>
                </a>
            </li>
            <li> 
                <a href="#">Home</a> 
            </li>
            <li> 
                <a href="#">About</a> 
            </li>
            <li> 
                <a href="#">Projects</a> 
            </li>
            <li> 
                <a href="#">Blogs</a> 
            </li>
            <li> 
                <a href="#">Contact me</a> 
            </li>
        </ul>
        <div class='under-border'>

        </div>
    </nav>
`;
class NavigationBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(navigationBarTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector(".menu-btn").addEventListener('click', function () {
            show(this.shadowRoot.querySelector("nav ul"));
        }.bind(this));
    }
}
window.customElements.define('nav-bar', NavigationBar);

function show(obj) {
    if (obj.style.display == 'none') {
        obj.style.display = 'block';
    } else {
        obj.style.display = 'none';
    }
}