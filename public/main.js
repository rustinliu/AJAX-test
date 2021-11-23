const request = new XMLHttpRequest();
getCSS.onclick = () => {
    request.open("GET", "./style.css");
    request.onload = () => {
        console.log("success");
        console.log(request.response);
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
    };
    request.onerror = () => {
        console.log("fail");
    };
    request.send();
};

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onload = () => {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
    };
    request.onerror = () => {};
    request.send();
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onreadystatechange = () => {
        if (
            request.readyState === 4 &&
            request.status >= 200 &&
            request.status < 300
        ) {
            const div = document.createElement("div");
            div.innerHTML = request.response;
            document.body.appendChild(div);
        } else {
            alert("fail");
        }
    };
    request.send();
};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseXML);
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(JSON.parse(request.response));
        }
    };
    request.send();
};
let n = 1;
getPage.onclick = (evt) => {
    const request = new XMLHttpRequest();
    request.open("GET", `page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach((element) => {
                const li = document.createElement("li");
                li.textContent = element.id;
                xxx.appendChild(li);
            });
            n += 1;
            n >= 3 && evt.target.setAttribute("disabled", "");
        }
    };
    request.send();
};
