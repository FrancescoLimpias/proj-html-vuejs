<script>
import ReviewsCarousel from "./ReviewsCarousel.vue"

export default {
    components: {
        ReviewsCarousel,
    }
}
</script>

<template>
    <div class="AppMain">

        <!-- Section: strengths -->
        <section class="strengths">
            I understand what it takes to create.
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
.AppMain {}
</style>