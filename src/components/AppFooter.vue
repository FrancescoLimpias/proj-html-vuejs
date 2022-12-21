<script>
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
                <li>
                    Address
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

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
    }

    .rights{
        text-align: center;
    }
}
</style>