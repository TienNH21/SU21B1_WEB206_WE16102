var url = "http://localhost:3000/posts?_expand=author";
fetch(url)
    .then(function (response) {
        return response.json(); // response.json() trả về 1 promise -> then lần 2
    })
    .then(function (respData) {
        var html = '';

        console.log("Bắt đầu lặp")
        respData.forEach(function (post, index) {
            var tRow = `<tr>
                <td>${ post.id }</td>
                <td>${ post.title }</td>
                <td>${ post.author.name }</td>
                <td>${ post.contents }</td>
                <td>
                    <a href="edit.html?id=${ post.id }" class="btn btn-primary">
                        Update
                    </a>
                </td>
                <td>
                    <button
                        class="btn btn-danger"
                        data-id="${ post.id }"
                        id="btn_delete_${ post.id }">
                        Delete
                    </button>
                </td>
            </tr>`;

            html += tRow;
        });

        document.getElementById('list_post').innerHTML = html;
    });

// Event delegation
$('tbody#list_post').on('click', 'button[id^="btn_delete_"]', function (event) {
    // console.log( 'id: ', event.currentTarget.attributes['id'].value.split('_').reverse()[0] )
    console.log($('#' + event.currentTarget.attributes['id'].value))
    var id = event.currentTarget.attributes['data-id'].value;

    var apiDelete = 'http://localhost:3000/posts/' + id;
    var options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(apiDelete, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            alert("Xóa thành công");
        })
});
