import { inject } from './injector.js';
import { page404 } from './page404.js';

inject();

function HTMLrender() {

    window.addEventListener('popstate', () => {
        module.routesOnLoad();
    })
    window.onload = () => {
        module.routesOnLoad();
    }
    const module = {
        routesOnLoad: () => {
            let urlPath = location.hash.substr(1);
            let appId = document.getElementById("root");
            let xhttp = new XMLHttpRequest();
            let title = document.getElementsByTagName("title")[0]
            let navTitle = document.getElementsByClassName("nav-title")[0]

            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    appId.innerHTML = xhttp.response;
                } else if (xhttp.status == 404) {
                    appId.innerHTML = page404()
                    title.innerText = 'page not found 404 :('
                    navTitle.innerText = 'page not found 404 :('
                }
            }

            if (urlPath === '') {
                xhttp.open("GET", `./app/home.html`, true)
                title.innerText = 'home'
                navTitle.innerText = 'home'
            } else {
                xhttp.open("GET", `./app/${urlPath}.html`, true)
                title.innerText = urlPath.replace("-", " ")
                navTitle.innerText = urlPath.replace("-", " ")
            }
            xhttp.send()
        },
    }
}

HTMLrender()

