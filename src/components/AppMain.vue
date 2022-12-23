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

    mounted() {
        contents.events.reverse();
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
                        alt="">
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
            <a class="orange-button inverted">
                View all courses ->
            </a>
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
                    <img :src="getImagePath('../assets/images/' + article.image_path)" alt="">
                    <div class="over">
                        <span>
                            ARTIST
                        </span>
                        <h4>
                            {{ article.title }}
                        </h4>
                        <div class="info">
                            <span>
                                <i class="fa-regular fa-calendar"></i>
                                {{ article.date }}
                            </span>
                            <span>
                                <i class="fa-regular fa-eye"></i>
                                {{ article.views }} views
                            </span>
                        </div>
                    </div>
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
                    <img :src="getImagePath('../assets/images/artist-event-0' + event.image_index + '-250x300.jpg')"
                        alt="">
                    <div>
                        <span class="date">
                            {{ event.date }}
                        </span>
                        <h4>
                            {{ event.title }}
                        </h4>
                        <span class="info">
                            <i class="fa-solid fa-location-dot"></i>
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

    background: 
    url('../assets/graphics/artist-shape-01 - flipped.png') -8% 0% no-repeat,
    url('../assets/graphics/maxcoach-shape-14.png')  no-repeat;
    background-size: 600px 577px, 2048px 458px ;

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
        align-items: center;

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

                &>* {
                    display: inline-block;
                }

                span,
                h4 {
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
        // style
        height: 1150px;
        background-color: #f5f7fa;
        padding: 5.5rem 0 2rem;

        // inner
        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 4rem;
            list-style-type: none;

            li:first-of-type {
                top: 11rem;
            }

            li:last-of-type {
                top: 4rem;
            }

            li {
                position: relative;

                // style
                overflow: hidden;
                box-shadow: 0 2px 40px 20px rgba(0, 0, 0, 0.1);
                line-height: 2rem;

                .over {
                    // position
                    position: absolute;
                    left: 0px;
                    bottom: 1rem;

                    // style
                    padding: 8%;
                }

                span {
                    margin-right: 1.4rem;
                }

                .info {
                    margin-top: .5rem;
                    font-size: small;
                }
            }

            li:not(.full) {
                height: 385px;
                width: 270px;

                img {
                    width: 100%;
                }

                h4 {
                    font-size: large;
                }

                span {
                    color: #717171;
                }
            }

            li.full {
                height: 678px;
                width: 500px;
                color: white;
                text-shadow: 0 0 1px black;

                img {
                    filter: brightness(0.9);
                }

                h4 {
                    font-size: xx-large;
                }
            }
        }
    }

    .events {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;

        ul {
            // style
            list-style-type: none;

            // inner
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            // flex-direction: row-reverse;
            gap: 4.5rem;

            li {
                flex: 0 0 40%;
                display: flex;
                justify-content: flex-start;
                gap: 2.6rem;

                &:nth-child(2n+3),
                &:nth-child(2n+4) {
                    flex-direction: row-reverse;
                    text-align: right;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    line-height: 2.6rem;

                    span {
                        color: #7d7d7d;
                    }

                    .info {
                        font-size: small;
                    }
                }
            }
        }
    }
}
</style>