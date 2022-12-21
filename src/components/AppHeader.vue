<script>
</script>

<template>
    <div class="AppHeader">

        <!-- Tickets countdown -->
        <div class="ticket">

            <span>
                Starts TOMORROW! Our biggest event of the year...
            </span>

            <span class="countdown">
                Clock Icon
                00 : 00 : 00 : 00
            </span>

            <button>
                Get Ticket
            </button>

        </div>

        <!-- Navbar -->
        <nav>

            <!-- header 1 -->
            <a href="">
                <h1>
                    MaxCoach
                </h1>
            </a>

            <!-- main index -->
            <ul>
                <li>
                    Home
                </li>
            </ul>

            <!-- socials index -->
            <ul>
                <li>
                    Twitter
                </li>
            </ul>

        </nav>

        <!-- Hero -->
        <div class="hero">
            <div class="center">

                <span class="signature">
                    Hello, I'm Martin
                </span>

                <h2>
                    Artist Coaching And Mentoring
                    <br /> Might Be for You
                </h2>

                <button>
                    Get started today
                </button>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.AppHeader {
    .ticket {
        // Style
        background-color: #f5f5f5;

        // Inner (partitioning)
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        // Inner
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        .center{
            text-align: center;
        }
    }
}
</style>