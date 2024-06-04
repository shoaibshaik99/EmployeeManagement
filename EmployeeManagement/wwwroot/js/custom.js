$(document).ready(function () {
    //alert('ok');
    ShowEmployeeData();
});

function ShowEmployeeData(){
    debugger
    //var url = '/Employee/EmployeeList';
    //var url = $('#urlEmployeeData').val();
    $.ajax
        ({
            url: '/Employee/EmployeeList',
            type: 'Get',
            dataType: 'json',
            contentType: 'application/json;charset=utf-8',
            success: function (result, status, xhr) {
                var object = '';
                $.each(result, function (index, item) {
                    object += '<tr>';
                    object += '<td>' + item.id + '</td>';
                    object += '<td>' + item.name + '</td>';
                    object += '<td>' + item.email + '</td>';
                    object += '<td>' + item.phone + '</td>';
                    object += '<td>' + item.salary + '</td>';
                    object += '<td>' + item.address + '</td>';
                    object += '<td><a href="#" class="btn btn-primary">Edit</a> || <a href="#" class="btn btn-danger">Delete</a></td>';
                    object += '</tr>';
                });
                $('#table_data').html(object);

            },
            error: function () {
                alert("Cannot fetch data");
            }
        });
}
