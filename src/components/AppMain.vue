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

    mounted() {
        console.log(this.contents);
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
                <br/>
                As an artist and an educator for nearly 30 years, I understand what it takes to create.
                <br/>
                <button>Get started today</button>
            </div>
        </section>

        <!-- Section: video -->
        <section class="video">
            Play
        </section>

        <!-- Section: reviews carousel -->
        <section class="reviews-carousel">
            <ReviewsCarousel />
        </section>

        <!-- Section: courses -->
        <section class="courses">
            Courses grid
        </section>

        <!-- Section: articles -->
        <section class="articles">
            Articles Cards
        </section>

        <!-- Section: events -->
        <section class="events">
            Events Cards
        </section>

    </div>
</template>

<style lang="scss" scoped>
.AppMain {
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

    .quote{
        display: flex;
        justify-content: space-between;
        align-items: center;

        div{
            flex: 0 0 50%;
        }

        .capture{
            text-align: center;
        }
    }
}
</style>