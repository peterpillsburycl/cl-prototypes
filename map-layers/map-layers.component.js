$(function() {
    // Tooltip
    $(".j-layerListItems .NavBar_menuItem.disabled").tooltip({
        "title": "Zoom-in to enable"
    });

    // Toggle Date Range Options
    $(".mls_status_option").change(function() {
        var target = this.getAttribute('data-target');
        $('#' + target).toggle();
    });

});