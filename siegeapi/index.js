
function changeVersion(version=0) {
    if (version === 0) {
        version = $("#version-select").val();
    }

    $(`[data-versions]`).each( (i, cls) => {
        let class_versions = $(cls).attr('data-versions').split(",");
        if (class_versions.includes(version)) {
            $(cls).show();
        } else {        
            $(cls).hide();
        }
    });
}


$("#version-select").change( (e) => {
    changeVersion($("#version-select").val());
});


$(document).ready( () => {
    changeVersion();
});
 