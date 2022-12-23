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
    <div class="AppHeader">

        <!-- Tickets countdown -->
        <div class="ticket">

            <span class="text">
                Starts TOMORROW! Our biggest event of the year...
            </span>

            <span class="countdown">
                🕓 00 : 00 : 00 : 00
            </span>

            <a class="orange-button">
                Get ticket
            </a>

        </div>

        <!-- Navbar -->
        <nav>

            <!-- header 1 -->
            <a href="">
                <img src="../assets/UI/dark-logo.png" alt="">
            </a>

            <!-- main index -->
            <ul class="index">
                <li v-for="link in contents.headerMaps[0].links">
                    {{ link }}
                    <i class="fa-solid fa-angle-down"></i>
                </li>
            </ul>

            <!-- socials index -->
            <ul class="social">
                <li>
                    <i class="fa-brands fa-twitter"></i>
                </li>
                <li>
                    <i class="fa-brands fa-facebook"></i>
                </li>
                <li>
                    <i class="fa-brands fa-instagram"></i>
                </li>
                <li>
                    <i class="fa-brands fa-linkedin"></i>
                </li>
            </ul>

        </nav>

        <!-- Hero -->
        <div class="hero">
            <div class="center">

                <span class="style-signature">
                    Hello, Im Matin
                </span>

                <h2>
                    Artist Coaching And Mentoring
                    <br /> Might Be for You
                </h2>

                <a class="orange-button">
                    Get started today
                </a>

            </div>

            <img src="../assets/images/artist-hero-image-04.jpg" alt="" class="artist">
            <img src="../assets/images/artist-hero-image-02.jpg" alt="" class="port2">
            <img src="../assets/images/artist-hero-image-01.jpg" alt="" class="port1">
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.AppHeader {
    .ticket {
        // Style
        background-color: #f5f5f5;
        padding: .3rem;

        // Inner (partitioning)
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;

        .text {
            color: #898989;
        }

        .countdown {
            color: $accent_indigo;
            font-weight: 600;
            font-size: large;
        }

        a {
            margin-left: .6rem;
        }
    }

    nav {
        /* 
        position: sticky;
        top: 0px; 
        */

        // Inner
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 6%;

        ul {
            list-style-type: none;
            display: flex;
            gap: 1rem;
        }

        &>a {
            img {
                height: 1.8rem;
            }
        }

        .social {
            color: #696969;
        }
    }

    .hero {
        position: relative;
        // Style
        height: 740px;
        background-color: $primary-white;

        // Inner
        display: flex;
        justify-content: center;
        align-items: center;

        .center {
            text-align: center;
            font-size: 1.7rem;

            span {
                font-size: 3.8rem;
            }

            h2 {
                margin-top: 1rem;
                margin-bottom: 3rem;
            }

            a {
                display: inline-block;
                font-size: initial;
                padding: 1.4rem 3rem;
            }
        }

        img{
            position: absolute;
            box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2);
        }

        .artist{
            bottom: 10%;
            right: 10%;
        }
        .port1{
            left: 7%;
            bottom: 10%;
        }
        .port2{
            left: 16%;
            top: 15%;
        }
    }
}
</style>