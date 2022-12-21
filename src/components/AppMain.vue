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
            "I coach and mentor"
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
}
</style>