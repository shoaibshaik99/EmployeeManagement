//const { hide } = require("@popperjs/core");

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
                    object += '<td><a href="#" class="btn btn-primary">Edit</a> || <a href="#" class="btn btn-danger" onclick="DeleteEmployee('+item.id+')">Delete</a></td>';
                    object += '</tr>';
                });
                $('#table_data').html(object);

            },
            error: function () {
                alert("Cannot fetch data");
            }
        });
}


$('#btnAddEmployee').click(function () {
    $('#EmployeeModal').modal('show');
    $('#EmployeeId').hide();

});

function HideModalPopUp() {
    $('#EmployeeModal').modal('hide');
}

function ClearTextBox() {
    $('#Name').val('');
    $('#Email').val('');
    $('#Phone').val('');
    $('#Salary').val('');
    $('#Address').val('');
}

function AddEmployee() {
    var objdata = {
        Name: $('#Name').val(),
        Email: $('#Email').val(),
        Phone: $('#Phone').val(),
        Salary: $('#Salary').val(),
        Address: $('#Address').val()
    };
    $.ajax(
        {
            url: '/Employee/AddEmployee',
            type: 'Post',
            data: objdata,
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded;charset=utf-8',
            success: function () {
                alert("Data Saved");
                ClearTextBox();
                ShowEmployeeData();
                HideModalPopUp();
            },
            error: function () {
                alert("Data could not be saved");
            }
        }
    );
}

function DeleteEmployee(id) {
    $.ajax(
        {
            url: '/Employee/DeleteEmployee?id='+id,
            type: 'Delete',
            success: function () {
                alert("Data removed");
                ShowEmployeeData();
            },
            error: function () {
                alert("Data could not be deleted");
            }
        }
    );
}