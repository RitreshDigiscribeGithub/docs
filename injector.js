export function inject() {
    function injector(element, attr, tag) {
        let createEle = document.createElement(element)
        attr.forEach(e => {
            createEle.setAttribute(e.name, e.value);
        });
        document.getElementsByTagName(tag)[0].appendChild(createEle);
    }

    //---------------inject style-------------------

    injector(
        'link',
        [
            { name: 'rel', value: 'stylesheet' },
            { name: 'href', value: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css' },
        ],
        'head'
    )

    injector(
        'link',
        [
            { name: 'rel', value: 'stylesheet' },
            { name: 'href', value: './style.css' },
        ],
        'head'
    )

    injector(
        'link',
        [
            { name: 'rel', value: 'stylesheet' },
            { name: 'href', value: './assets/css/prism.css' },
        ],
        'head'
    )

    injector(
        'link',
        [
            { name: 'rel', value: 'stylesheet' },
            { name: 'href', value: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css' },
        ],
        'head'
    )

    //---------------inject script-------------------

    injector(
        'script',
        [
            { name: 'src', value: './app/components/navbar.js' }
        ],
        'body'
    )

    injector(
        'script',
        [
            { name: 'src', value: './app/components/code.js' }
        ],
        'body'
    )
    injector(
        'script',
        [
            { name: 'src', value: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js' },
        ],
        'body'
    )

    setTimeout(() => {
        injector(
            'script',
            [
                { name: 'src', value: './assets/js/prism.js' }
            ],
            'body'
        )
    }, 500);
}



