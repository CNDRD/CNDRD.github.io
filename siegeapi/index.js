
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
};

function scrollTo(where=undefined) {
    if (where === undefined) {
        where = $(location).attr('hash');
    }

    where = where.replaceAll("#", "").split("-");

    let where_cls = where[0];
    let where_ver = where[1] || $("#version-select").val();

    $(`[data-class-name]`).each( (i, cls) => {
        let class_versions = $(cls).attr('data-versions').split(",");

        if ($(cls).attr('data-class-name').toLowerCase() == where_cls.toLowerCase() && class_versions.includes(where_ver)) {
            
            $('html, body').animate({ scrollTop: $(cls).offset().top }, 750);

            $(cls).addClass("highlight");
            setTimeout(() => { $(cls).removeClass("highlight"); }, 7500);
        }
    });
};


$("#version-select").change( (e) => {
    changeVersion($("#version-select").val());
});

$(document).ready( () => {
    changeVersion();
    scrollTo();
});
