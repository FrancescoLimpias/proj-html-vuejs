<script>
import ReviewsCarousel from "./ReviewsCarousel.vue"
import { contents } from "../contents.js"

export default {

    data() {
        return {
            contents,
        };
    },

    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },

    components: {
        ReviewsCarousel,
    },

}
</script>

<template>
    <div class="AppMain">

        <!-- Section: strengths -->
        <section class="strengths">

            <!-- headers -->
            <span class="style-signature">
                Artist coaching
            </span>
            <h2>
                I understand what it takes to create.
                <br>
                I can help you with
            </h2>

            <!-- ul: strengths list -->
            <ul>
                <li v-for="(strength, index) of contents.strengths">
                    <img :src="getImagePath('../assets/graphics/strengths/artist-box-image-0' + (index + 1) + '.png')"
                        alt="Ciao" />
                    <h4>
                        {{ strength.title }}
                    </h4>
                    <br>
                    <p>
                        {{ strength.text }}
                    </p>
                </li>
            </ul>
        </section>

        <!-- Section: meaningful quote -->
        <section class="quote">
            <div class="capture">
                <i class="fa-solid fa-quote-right"></i>
                <h2>
                    "I coach and mentor visual artists, like you, to Create Like You Mean It"
                </h2>
                <br />
                <span class="style-signature">
                    Martin Garrix
                </span>
            </div>
            <div class="description">
                <p>
                    As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help
                    you
                    get you back on track to being the productive, creative, meaningful and authentic artist you truly
                    want
                    to be.I support artists in crafting and living a creative life as well as feeling good about
                    themselves
                    and their art.
                </p>
                <p>
                    As an artist and an educator for nearly 30 years, I understand what it takes to create.
                </p>
                <a class="orange-button inverted">Get started today</a>
            </div>
        </section>

        <!-- Section: video -->
        <section class="video">
            <div class="player">
                <img src="../assets/images/artist-video-poster.jpg" alt="">
                <a href="">
                    <img src="../assets/UI/icon-youtube-play.png" alt="">
                </a>
            </div>
        </section>

        <!-- Section: reviews carousel -->
        <section class="reviews-carousel">
            <span class="style-signature">
                Testimonials
            </span>
            <h2>
                Why do people love me?
            </h2>
            <ReviewsCarousel />
        </section>

        <!-- Section: courses -->
        <section class="courses">
            <span class="style-signature">
                Artist coaching
            </span>
            <h2>
                Latest Online Courses
            </h2>
            <ul>
                <li v-for="(course, index) in contents.courses">
                    <img :src="getImagePath('../assets/images/artist-course-0' + (index + 1) + '-480x480.jpg')" alt="">
                    <span class="price">
                        &#x24;{{ course.price.toFixed(2) }}
                    </span>
                    <h4>
                        {{ course.title }}
                    </h4>
                    <span class="info">
                        <i class="fa-regular fa-file-lines"></i>
                        {{ course.lessons }} Lessons
                    </span>
                    <span class="info">
                        <i class="fa-regular fa-user"></i>
                        {{ course.capacity }} Students
                    </span>
                </li>
            </ul>
            <button>
                View all courses ->
            </button>
        </section>

        <!-- Section: articles -->
        <section class="articles">
            <span class="style-signature">
                Articles and Tips
            </span>
            <h2>
                Latest from The Blog
            </h2>
            <ul>
                <li v-for="article in contents.articles" :class="{ full: article.type == 'full' }">
                    <img src="" alt="">
                    ARTIST
                    <h4>
                        {{ article.title }}
                    </h4>
                    <span class="info">
                        CalendarIcon {{ article.date }}
                    </span>
                    <span class="info">
                        EyeIcon {{ article.views }} views
                    </span>
                </li>
            </ul>
        </section>

        <!-- Section: events -->
        <section class="events">
            <span class="style-signature">
                Upcoming Events
            </span>
            <h2>
                Let's Work Together
            </h2>
            <ul>
                <li v-for="event in contents.events">
                    <img src="" alt="">
                    <div>
                        <span class="">
                            {{ event.date }}
                        </span>
                        <h4>
                            {{ event.title }}
                        </h4>
                        <span class="info">
                            {{ event.place }}
                        </span>
                    </div>
                </li>
            </ul>
        </section>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.AppMain {

    section {
        margin: 60px 0;
        padding: 0 15%; //Base sections padding
    }

    section>h2 {
        text-align: center;
        font-size: xx-large;
        margin-bottom: 5rem;
    }

    .strengths {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;

        ul {
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            list-style-type: none;
            gap: 2rem;
            line-height: 1.6rem;

            li {
                align-self: flex-start;
            }

            li:nth-child(even) {
                align-self: flex-end;
            }
        }
    }

    .quote {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10%;
        height: 550px;
        // padding: 5rem 0;

        div {
            flex: 0 0 40%;
        }

        p {
            margin-bottom: 2.5rem;
            font-size: large;
        }

        .capture {
            position: relative;
            text-align: center;

            i {
                position: absolute;
                top: -4rem;
                color: $accent_orange;
                font-size: xxx-large;
            }

            h2 {
                font-size: xxx-large;
            }
        }

        .description>a {
            padding: 1rem 2rem;
        }
    }

    .video {
        padding-bottom: 3rem;
        display: flex;
        justify-content: center;

        .player {
            position: relative;
            border-radius: 10px;
            overflow: hidden;

            a {
                position: absolute;
                top: 50%;
                left: 50%;
                translate: -50% -50%;
            }
        }
    }

    .reviews-carousel {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .courses {
        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 2rem;
            list-style-type: none;

            li {
                flex: 0 0 23%;
                margin-bottom: 1rem;

                &>*{
                    display: inline-block;
                }

                span, h4{
                    margin: 1.3rem 1.3rem 0;
                }

                img {
                    max-width: 100%;
                }

                .price {
                    color: $accent_orange;
                    font-weight: 600;
                }

                h4 {
                    font-size: large;
                }

            }
        }
    }

    .articles {
        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
            list-style-type: none;

            li {
                flex: 0 0 23%;
            }
        }
    }

    .events {
        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            list-style-type: none;

            li {
                flex: 0 0 45%;
                display: flex;

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }
        }
    }
}
</style>