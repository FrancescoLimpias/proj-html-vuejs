<script>
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
}
</script>

<template>
    <div class="AppFooter">

        <!-- Form: newsletter -->
        <div class="newsletter">
            <h2 class="title">
                Newsletter to get in touch
            </h2>
            <div class="form">
                <input type="text" placeholder="Your e-mail">
                <i class="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>

        <!-- Navbar -->
        <nav>
            <ul>
                <li v-for="(footerMap, index) in contents.footerMaps">
                    <h3>
                        {{ footerMap.title }}
                    </h3>

                    <span v-if="footerMap.detail" class="detail">
                        {{ footerMap.detail }}
                    </span>

                    <ul>
                        <!-- Switch for lists (first, middle, last) -->
                        <li v-if="index < footerMap.infos.length - 1" v-for="info in footerMap.infos">

                            <span v-if="index == 0">
                                <!-- just infos -->
                                {{ info }}
                            </span>

                            <a v-else href="">
                                <!-- links -->
                                {{ info }}
                            </a>
                        </li>
                        <li v-else>
                            <img v-for="info in footerMap.infos" :src="getImagePath('../assets/images/' + info)" alt="">
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <!-- Copyright -->
        <div class="rights">
            <span class="info">
                ©2020 Maxcoach, All Rights Reserved
            </span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.AppFooter {
    .newsletter {
        // style
        background:
            url('../assets/graphics/artist-shape-color-paint-bottom-right.png') 100% 100% no-repeat,
            url('../assets/graphics/artist-shape-color-paint-top-left.png') 0 0 no-repeat,
            #244186;
        height: 200px;
        color: white;
        margin-bottom: 6.8rem;

        // inner
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7rem;

        h2 {
            text-align: right;
            flex: 0 0 20%;
            font-weight: 500;
            font-size: xx-large;
        }

        .form {
            input {
                width: 670px;
                background-color: transparent;
                border: none;
                border-bottom: 2px solid rgba(255, 255, 255, 0.5);
                padding: 1rem 0;
                font-size: x-large;
                font-weight: 200;
                color: white;

                &::placeholder {
                    font-weight: 200;
                    color: white;
                }

                &:focus {
                    outline: none;
                    border-bottom: 2px solid white;
                }
            }

            i {
                position: relative;
                left: -2rem;
                font-size: x-large;
            }
        }
    }

    ul {
        list-style-type: none;
    }

    nav {
        max-width: 1500px;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        a {
            color: black;
            text-decoration: none;
        }

        &>ul {
            display: flex;
            justify-content: center;
            align-items: baseline;
            gap: 6rem;

            &>li:first-of-type,
            &>li:last-of-type {
                flex: 1 0 20%;
            }

            h3 {
                margin-bottom: 1.5rem;
                margin-right: .5rem;
                display: inline-block;
            }

            .detail {
                color: $accent_orange;
            }

            ul {
                li {
                    margin-bottom: 1rem;
                }

                img {
                    display: inline;
                    margin-right: 1rem;
                    width: 30%;
                }
            }
        }
    }

    .rights {
        text-align: center;
        font-size: small;
        margin: 4rem 0;
        color: #ababab;
    }
}
</style>