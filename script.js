


$(document).ready(
    function () {
        $.ajax({
            url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
            success: function (res) {
                two_movies = res.data.movies.slice(0, 2)

                two_movies.forEach(function (movie) {
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
                    two_movies = res.data.movies.slice(id_num - 2, id_num)

                    two_movies.forEach(function (movie) {
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
    $(".next").click(
        function () {
            $(".prev").removeClass("greyed")
            previous_button = $(".active").attr("id")
            if (previous_button < 9) {
                previous_button = "#" + previous_button
                $(".active").next().addClass("active")
                $(previous_button).removeClass("active")
                $("main").children().remove()
                $.ajax({
                    url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                    success: function (res) {
                        previous_button = parseInt(previous_button.slice(1)) * 2
                        two_movies = res.data.movies.slice(previous_button, previous_button + 2)

                        two_movies.forEach(function (movie) {
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
            if (previous_button == 9) {
                previous_button = "#" + previous_button
                $(".active").next().addClass("active")
                $(previous_button).removeClass("active")
                $(this).addClass("greyed")
                $("main").children().remove()
                    $.ajax({
                        url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                        success: function (res) {
                            previous_button = parseInt(previous_button.slice(1)) * 2
                            two_movies = res.data.movies.slice(previous_button, previous_button + 2)

                            two_movies.forEach(function (movie) {
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
            }
            )
            $(".prev").click(
                function () {
                    $(".next").removeClass("greyed")
                    next_button = $(".active").attr("id")
                    if (next_button > 2) {
                        next_button = "#" + next_button
                        $(".active").prev().addClass("active")
                        $(next_button).removeClass("active")
                        $("main").children().remove()
                            $.ajax({
                                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                                success: function (res) {
                                    next_button = (parseInt(next_button.slice(1)) * 2) - 2
                                    two_movies = res.data.movies.slice(next_button - 2, next_button)
                
                                    two_movies.forEach(function (movie) {
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
                        if (next_button == 2) {
                            next_button = "#" + next_button
                            $(".active").prev().addClass("active")
                            $(next_button).removeClass("active")
                            $(this).addClass("greyed")
                            $("main").children().remove()
                                $.ajax({
                                    url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                                    success: function (res) {
                                        next_button = (parseInt(next_button.slice(1)) * 2) - 2
                                        two_movies = res.data.movies.slice(next_button - 2, next_button)
                    
                                        two_movies.forEach(function (movie) {
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
        }
    )
})