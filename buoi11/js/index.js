var url = "http://localhost:3000/posts?_expand=author";
fetch(url)
    .then(function (response) {
        return response.json(); // response.json() trả về 1 promise -> then lần 2
    })
    .then(function (respData) {
        var html = '';
        console.log("Dữ liệu server trả về: ", respData);

        console.log("Bắt đầu lặp")
        respData.forEach(function (post, index) {
            console.log(`post[${ index }] = `, post)
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
                    <button class="btn btn-danger">Delete</button>
                </td>
            </tr>`;

            html += tRow;
        });

        document.getElementById('list_post').innerHTML = html;
    });
