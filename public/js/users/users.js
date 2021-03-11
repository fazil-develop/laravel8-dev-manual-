
$(document).ready(function () {

    get_users_data()

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    //Get all company
    function get_users_data() {

        $.ajax({
            url: root_url,
            type: 'GET',
            data: {}
        }).done(function (data) {
            table_data_row(data.data)
        });
    }

    //Company table row
    function table_data_row(data) {

        var rows = '';

        $.each(data, function (key, value) {

            rows = rows + '<tr>';
            rows = rows + '<td>' + value.name + '</td>';
            rows = rows + '<td>' + value.email + '</td>';
            rows = rows + '<td data-id="' + value.id + '">';
            rows = rows + '<a class="btn btn-sm btn-outline-danger py-0" style="font-size: 0.8em;" id="editCompany" data-id="' + value.id + '" data-toggle="modal" data-target="#modal-id">Edit</a> ';
            rows = rows + '<a class="btn btn-sm btn-outline-danger py-0" style="font-size: 0.8em;" id="deleteCompany" data-id="' + value.id + '" >Delete</a> ';
            rows = rows + '</td>';
            rows = rows + '</tr>';
        });

        $("tbody").html(rows);
    }

   
}); 