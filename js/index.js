//for simply cloning content__label elements
function addContentLabel(obj) {
    var contentItem = obj.parentElement.parentElement,
        contentLabel = document.getElementsByClassName('content__label');

    var clone = contentLabel[0].cloneNode(true);
    var children = clone.children;

    [].forEach.call(children, function (el) {
        el.value = "";
    });

    if(clone.getElementsByClassName('button button-light').length) {
        clone.removeChild(children[children.length - 1]);
    }
    contentItem.insertBefore(clone, contentItem.children[0]);
}


$(document).ready(function () {
    $('#myModal').on('shown.bs.modal', function (e) {
        $(".sa-success").addClass("hide");
        setTimeout(function() {
            $(".sa-success").removeClass("hide");
        }, 10);
    })
});