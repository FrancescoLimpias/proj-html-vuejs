<script>
import { contents } from "../contents.js"

export default {

    data() {
        return {
            contents,
            active: 1,
        };
    },

    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
}
</script>

<template>
    <div class="ReviewsCarousel">
        <ul>
            <template v-for="(testimonial, index) in contents.testimonials">
                <li
                    :class="{ active: (index == this.active), visible: (index - 1 == this.active || index + 1 == this.active) }">
                    <h4>
                        {{ testimonial.capture }}
                    </h4>
                    <p>
                        {{ testimonial.description }}
                    </p>
                    <div class="credits">
                        <img :src="getImagePath('../assets/images/artist-testimonial-avatar-0' + (index + 1) + '.jpg')"
                            alt="">
                        <div class="info">
                            <h5 class="author">
                                {{ testimonial.author }}
                            </h5>
                            <span class="job">
                                / {{ testimonial.job }}
                            </span>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
        <div class="dots">
            <template v-for="(testimonial, index) in contents.testimonials">
                <span :class="{ active: index == this.active }">
                    <i class="fa-solid fa-circle"></i>
                </span>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ReviewsCarousel {
    // inner
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
        display: flex;
        justify-content: center;
        gap: 3rem;
        align-items: center;
        list-style-type: none;

        li {
            flex: 0 0 570px;
            background-color: white;
            padding: 2rem;
            line-height: 2rem;

            &>* {
                margin-bottom: 1rem;
            }

            &.active {}

            &.visible {
                opacity: 0.5;
            }

            &:not(.active):not(.visible) {
                display: none;
            }

            h4 {
                font-size: large;
            }

            .job {
                color: gray;
            }

            .credits {
                display: flex;
                align-items: center;
                gap: 1.5rem;
            }

            img {
                display: inline-block;
                width: 15%;
                border-radius: 50%;
            }

            .info {
                display: inline-block;
            }
        }
    }

    .dots {
        margin: 3rem 0 5rem;
        font-size: x-small;

        color: gray;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .active {
            font-size: small;
            color: black;
        }
    }
}
</style>