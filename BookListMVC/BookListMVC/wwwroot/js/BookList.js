﻿var dataTable;
3
$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#DT_load').DataTable({
        "ajax": {
            "url": "/books/getall/",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "name", "width": "30%" },
            { "data": "author", "width": "30%" },
            { "data": "isbn", "width": "30%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center">
                        <a href="/Books/Upsert?id=${data}" class'btn btn-success text-white' style='cursor:pointer; width:100px;>
                            Edit
                        </a>
                        &nbsp;
                        <a class'btn btn-success text-white' style='cursor:pointer; width:100px;'
                            onclick=Delete('/books/Delete?id='+${data})>
                            Delete
                        </a>
                    </div>`;
                }, "width": "40%"
            }
        ],
        "language": {
            "emptyTable": "No data found"
        },
        "width":"100%"
    });
}
