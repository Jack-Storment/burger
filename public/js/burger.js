//click handler 
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var isDevoured = $(this).data("isDevoured");

        var Devoured = {
            devoured: isDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: Devoured
        }).then(
            function () {
                console.log("if burger is eaten", isDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".burgerBtn").on("click", function (event) {
        console.log('SUBMITTING')
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var burgerName = {
            name: $("#burgerName").val().trim(),
            eaten: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerName
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".burgerDelete").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});