<script>
import ReviewsCarousel from "./ReviewsCarousel.vue"
import { contents } from "../contents.js"

export default {

    data() {
        return {
            contents,
        };
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
            </h2>

            <!-- ul: strengths list -->
            <ul>
                <li v-for="strength of contents.strengths">
                    <h4>
                        {{ strength.title }}
                    </h4>
                    <p>
                        {{ strength.text }}
                    </p>
                </li>
            </ul>
        </section>

        <!-- Section: meaningful quote -->
        <section class="quote">
            <div class="capture">
                Quote Icon
                <br />
                "I coach and mentor visual artists, like you, to Create Like You Mean It"
                <br />
                <span class="style-signature">
                    Martin Garrix
                </span>
            </div>
            <div class="description">
                As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you
                get you back on track to being the productive, creative, meaningful and authentic artist you truly want
                to be.I support artists in crafting and living a creative life as well as feeling good about themselves
                and their art.
                <br />
                As an artist and an educator for nearly 30 years, I understand what it takes to create.
                <br />
                <button>Get started today</button>
            </div>
        </section>

        <!-- Section: video -->
        <section class="video">
            <div>
                <img src="" alt="">
                PlayIcon
            </div>
        </section>

        <!-- Section: reviews carousel -->
        <section class="reviews-carousel">
            <span class="style-signature">
                Testimonials
            </span>
            <h2>
                Why do girls love me?
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
                <li v-for="course in contents.courses">
                    <img src="" alt="">
                    <span class="price">
                        &#x24;{{ course.price.toFixed(2) }}
                    </span>
                    <h4>
                        {{ course.title }}
                    </h4>
                    <span class="info">
                        FileIcon
                        {{ course.lessons }} Lessons
                    </span>
                    <span class="info">
                        PersonIcon
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
.AppMain {

    section {
        margin: 2rem 0;
    }

    .strengths {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .headers {
            text-align: center;
        }

        ul {

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .quote {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            flex: 0 0 50%;
        }

        .capture {
            text-align: center;
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
            gap: 1rem;
            list-style-type: none;

            li {
                flex: 0 0 23%;
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

    .events{
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

                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }
        }
    }
}
</style>