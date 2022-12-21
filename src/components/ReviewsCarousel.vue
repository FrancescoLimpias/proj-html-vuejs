<script>
import { contents } from "../contents.js"

export default {

    data() {
        return {
            contents,
        };
    },
}
</script>

<template>
    <div class="ReviewsCarousel">
        <ul>
            <li v-for="testimonial in contents.testimonials">
                <h4>
                    {{ testimonial.capture }}
                </h4>
                <p>
                    {{ testimonial.description }}
                </p>
                <span class="author">
                    {{ testimonial.author }}
                </span>
                <span class="job">
                    / {{ testimonial.job }}
                </span>
            </li>
        </ul>
        <div class="dots">
            dotss
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ReviewsCarousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

        li {
            flex: 0 0 30%;
        }
    }
}
</style>