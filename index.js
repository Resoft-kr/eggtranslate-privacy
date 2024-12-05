function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

const language = getQueryParam('lan');
const cat = getQueryParam('cat');
let htmlFile;

switch (language) {
    case 'fr':
        htmlFile = 'fr.html';
        break;
    case 'ru':
        htmlFile = 'ru.html';
        break;
    case 'zh':
        htmlFile = 'zh.html';
        break;
    case 'vi':
        htmlFile = 'vi.html';
        break;
    case 'en':
        htmlFile = 'en.html';
        break;
    default:
        htmlFile = 'ko.html';
        break;
}




fetch(htmlFile)
    .then(response => {
        if (!response.ok) {
            throw new Error('약관을 불러오는데 실패하였습니다');
        }
        return response.text();
    })
    .then(html => {
        document.querySelector('body').innerHTML = html;
    }).then(() => {

        console.log(document.querySelector(`#${cat}`));
        document.querySelector(`#${cat}`).scrollIntoView({
            behavior: 'auto',  
            block: 'start',
        }

        );
    })
    .catch(error => {
        console.error('약관 을 불러오는데 실패하였습니다:', error);
        document.querySelector('body').innerText = '약관을 불러오는데 실패하였습니다.';
    });




