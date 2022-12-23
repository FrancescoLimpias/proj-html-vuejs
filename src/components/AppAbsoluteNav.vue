<template>
    <div class="AppAbsoluteNav">

        <!-- Right nav -->
        <nav class="right-nav">
            <ul>
                <li>
                    <button>
                        <i class="fa-solid fa-ruler"></i>
                    </button>
                </li>
                <li>
                    <button>
                        <i class="fa-solid fa-life-ring"></i>
                    </button>
                </li>
                <li>
                    <button>
                        <i class="fa-solid fa-book"></i>
                    </button>
                </li>
                <li>
                    <button>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </li>
            </ul>
        </nav>

        <!-- Button to top -->
        <a class="top" href="#top">
            <span>
                🡑
            </span>
        </a>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.AppAbsoluteNav {
    .right-nav {
        // position
        position: fixed;
        top: 20%;
        right: 0px;
        z-index: 100;

        // style
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
        border-radius: 5px 0 0 5px;

        ul {
            list-style-type: none;
            text-align: center;

            li {
                padding: .5rem .4rem .5rem .5rem;
            }

            button {
                border: none;
                font-size: 1.1rem;
                background-color: transparent;
                transition: all .2s ease;
                text-shadow: 0 0 2px white;

                &:hover {
                    position: relative;
                    left: -.1rem;
                    text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                    // font-size: 1.2rem;
                    color: $accent_orange;
                    cursor: pointer;
                }
            }
        }
    }

    .top {
        // position
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 100;

        // size
        width: 60px;
        height: 60px;

        // style
        font-size: xx-large;
        background-color: $accent_orange;
        text-decoration: none;
        border-radius: 30px;
        // padding: .2rem;

        // inner
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: transparent;
            border: 3px dotted $accent_orange;
        }

        span {
            color: white;
            transition: all .2s ease;
        }

        &:hover span {
            position: relative;
            top: -1.5rem;
            font-size: xxx-large;
            color: $accent_orange;
            text-shadow: 0 0 3px white;
        }
    }

}
</style>