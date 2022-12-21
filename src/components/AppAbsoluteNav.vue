<template>
    <div class="AppAbsoluteNav">

        <!-- Right nav -->
        <nav class="right-nav">
            <ul>
                <li>
                    📐
                </li>
                <li>
                    ⭗
                </li>
                <li>
                    📓
                </li>
                <li>
                    🛒
                </li>
            </ul>
        </nav>

        <!-- Button to top -->
        <a class="top" href="#top">
            🡑
        </a>

    </div>
</template>

<style lang="scss" scoped>
.AppAbsoluteNav {

    .right-nav {
        position: fixed;
        top: 20%;
        right: 0px;

        ul {
            list-style-type: none;
        }
    }

    .top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;

        font-size: xx-large;
        background-color: rgba(255, 166, 0, 0.3);
        text-decoration: none;
        color: snow;
        border-radius: 20px;
        padding: .1rem .7rem;

        &:hover {
            background-color: rgba(255, 166, 0, 1);
        }
    }

}
</style>