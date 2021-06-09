var apiListAuthor = "http://localhost:3000/authors";

fetch(apiListAuthor)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var listOption = "";

        data.forEach(function (author) {
            listOption += `<option value="${ author.id }">${ author.name }</option>`;
        });

        document.querySelector('#author_id').innerHTML = listOption;
    });

var params = new URLSearchParams(window.location.search);
var apiShowUrl = "http://localhost:3000/posts/" + params.get('id');

fetch(apiShowUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.querySelector('#title').value = data.title;
        document.querySelector('#contents').value = data.contents;
    });

document.querySelector('#form_edit')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        var title = document.querySelector("#title").value;
        var authorId = document.querySelector("#author_id").value;
        var contents = document.querySelector("#contents").value;
        var data = {
            title: title,
            authorId: authorId,
            contents: contents,
        };

        var options = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(apiShowUrl, options)
    });
