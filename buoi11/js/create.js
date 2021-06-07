
var apiListAuthor = "http://localhost:3000/authors";

fetch(apiListAuthor)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        var listOption = "";

        data.forEach(function (author) {
            listOption += `<option value="${ author.id }">${ author.name }</option>`;
        });

        document.querySelector('#author_id').innerHTML = listOption;
    });

document.getElementById('form_create')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        var url = 'http://localhost:3000/posts';
        var title = document.querySelector("#title").value;
        var authorId = document.querySelector("#author_id").value;
        var contents = document.querySelector("#contents").value;
        var data = {
            title: title,
            authorId: authorId,
            contents: contents
        };

        var options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch (url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (respData) {
                console.log(respData);
            });
    });
