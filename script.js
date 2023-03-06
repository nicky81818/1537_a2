


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
    $("#2").click(
        function () {
            $(".greyed").removeClass("greyed")
            $(".active").removeClass("active")
            $("#2").addClass("active")
            $("main").children().remove()

            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    twenty_movies = res.data.movies.slice(2, 4)

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
    $("#3").click(
        function () {
            $(".prev").removeClass("greyed")
            $("#1").removeClass("active")
            $("#2").removeClass("active")
            $("#4").removeClass("active")
            $("#5").removeClass("active")
            $("#6").removeClass("active")
            $("#7").removeClass("active")
            $("#8").removeClass("active")
            $("#9").removeClass("active")
            $("#10").removeClass("active")
            $(".next").removeClass("greyed")
            $("#3").addClass("active")
            $("main").children().remove()

            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    twenty_movies = res.data.movies.slice(4, 6)

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
    $("#4").click(
        function () {
            $(".prev").removeClass("greyed")
            $("#1").removeClass("active")
            $("#2").removeClass("active")
            $("#3").removeClass("active")
            $("#5").removeClass("active")
            $("#6").removeClass("active")
            $("#7").removeClass("active")
            $("#8").removeClass("active")
            $("#9").removeClass("active")
            $("#10").removeClass("active")
            $(".next").removeClass("greyed")
            $("#4").addClass("active")
            $("main").children().remove()

            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    twenty_movies = res.data.movies.slice(6, 8)

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
    $("#5").click(
        function () {
            $(".prev").removeClass("greyed")
            $("#1").removeClass("active")
            $("#2").removeClass("active")
            $("#3").removeClass("active")
            $("#4").removeClass("active")
            $("#6").removeClass("active")
            $("#7").removeClass("active")
            $("#8").removeClass("active")
            $("#9").removeClass("active")
            $("#10").removeClass("active")
            $(".next").removeClass("greyed")
            $("#5").addClass("active")
            $("main").children().remove()

            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    twenty_movies = res.data.movies.slice(8, 10)

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
    $("#6").click(
        function () {
            $(".prev").removeClass("greyed")
            $("#1").removeClass("active")
            $("#2").removeClass("active")
            $("#3").removeClass("active")
            $("#4").removeClass("active")
            $("#5").removeClass("active")
            $("#7").removeClass("active")
            $("#8").removeClass("active")
            $("#9").removeClass("active")
            $("#10").removeClass("active")
            $(".next").removeClass("greyed")
            $("#6").addClass("active")
            $("main").children().remove()

            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    twenty_movies = res.data.movies.slice(10, 12)

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
    $("#7").click(
        function () {
            $(".prev").removeClass("greyed")
            $("#1").removeClass("active")
            $("#2").removeClass("active")
            $("#3").removeClass("active")
            $("#4").removeClass("active")
            $("#5").removeClass("active")
            $("#6").removeClass("active")
            $("#8").removeClass("active")
            $("#9").removeClass("active")
            $("#10").removeClass("active")
            $(".next").removeClass("greyed")
            $("#7").addClass("active")
            $("main").children().remove()

            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    twenty_movies = res.data.movies.slice(12, 14)

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
    $("#8").click(
        function () {
            $(".prev").removeClass("greyed")
            $("#1").removeClass("active")
            $("#2").removeClass("active")
            $("#3").removeClass("active")
            $("#4").removeClass("active")
            $("#5").removeClass("active")
            $("#6").removeClass("active")
            $("#7").removeClass("active")
            $("#9").removeClass("active")
            $("#10").removeClass("active")
            $(".next").removeClass("greyed")
            $("#8").addClass("active")
            $("main").children().remove()

            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    twenty_movies = res.data.movies.slice(14, 16)

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
    $("#9").click(
        function () {
            $(".prev").removeClass("greyed")
            $("#1").removeClass("active")
            $("#2").removeClass("active")
            $("#3").removeClass("active")
            $("#4").removeClass("active")
            $("#5").removeClass("active")
            $("#6").removeClass("active")
            $("#7").removeClass("active")
            $("#8").removeClass("active")
            $("#10").removeClass("active")
            $(".next").removeClass("greyed")
            $("#9").addClass("active")
            $("main").children().remove()

            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    twenty_movies = res.data.movies.slice(16, 18)

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
    $("#10").click(
        function () {
            $(".prev").removeClass("greyed")
            $("#1").removeClass("active")
            $("#2").removeClass("active")
            $("#3").removeClass("active")
            $("#4").removeClass("active")
            $("#5").removeClass("active")
            $("#6").removeClass("active")
            $("#7").removeClass("active")
            $("#8").removeClass("active")
            $("#9").removeClass("active")
            $(".next").removeClass("greyed")
            $("#10").addClass("active")
            $(".next").addClass("greyed")
            $("main").children().remove()

            $.ajax({
                url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
                success: function (res) {
                    twenty_movies = res.data.movies.slice(18, 20)

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