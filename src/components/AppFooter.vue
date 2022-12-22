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
    <div class="AppFooter">

        <!-- Form: newsletter -->
        <div class="newsletter">
            <div class="title">
                Newsletter to get in touch
            </div>
            <div class="form">
                <input type="text" placeholder="Your e-mail ->">
            </div>
        </div>

        <!-- Navbar -->
        <nav>
            <ul>
                <li v-for="(footerMap, index) in contents.footerMaps">
                    <h3>
                        {{ footerMap.title }}
                    </h3>
                    <ul>
                        <li v-for="info in footerMap.infos">
                            <span>
                                {{ info }}
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="rights">
            <span class="info">
                ©2020 Maxcoach, All Rights Reserved
            </span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.AppFooter {
    .newsletter {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    ul {
        list-style-type: none;
    }

    nav {
        max-width: 1500px;
        margin: 0 auto;

        &>ul {
            display: flex;
            justify-content: center;
            align-items: baseline;
            gap: 6rem;
            
            *{
                margin-bottom: 1rem;
            }
        }
    }

    .rights {
        text-align: center;
        margin: 4rem 0;
        color: #ababab;
    }
}
</style>