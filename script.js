


$(document).ready(
    function () {
        $.ajax({
            url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
            success: function (res) {
                twenty_movies = res.data.movies.slice(0, 2)

                twenty_movies.forEach(function (movie) {
                    $("main").append(
                        `
                        <div class="movie">
                            <img src="${movie.medium_cover_image}" alt="${movie.title}">
                        </div>
                        `
                    )
                })
            }
        })
    $("button").click(
        function () {
            id_num = $(this).attr("id")
            $(".greyed").removeClass("greyed")
            $(".active").removeClass("active")
            if (id_num == 1) {
                $(".prev").addClass("greyed")
            }
            if (id_num == 10) {
                $(".next").addClass("greyed")
            }
            $(this).addClass("active")
            $("main").children().remove()
            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    id_num = id_num * 2
                    twenty_movies = res.data.movies.slice(id_num - 2, id_num)

                    twenty_movies.forEach(function (movie) {
                        $("main").append(
                            `
                            <div class="movie">
                                <img src="${movie.medium_cover_image}" alt="${movie.title}">
                            </div>
                            `
                        )
                    })
                }
            })
        }
    )
})