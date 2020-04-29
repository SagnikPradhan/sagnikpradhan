<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');

    div#home {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    section {
        height: 90vh;
    }

    section#intro {
        padding: 0 10vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 2fr 1fr;

        div#tagline {
            grid-column: 1 / 3;
            grid-row: 2 / 3;
		}
		
		h1 {
			padding: 2rem 0;
			margin: 0;
            font-size: 5rem;
			color: #363636;

            &.highlight {
				display: inline;
				padding: 1rem;
				background: #363636;
                color: #ffbcbc;
            }
		}

		div#image {
			grid-column: 3 / 4;
			grid-row: 1 / 4;
			writing-mode: vertical-rl;
			overflow: hidden;
			padding: 1em 0;
			cursor: default;
		}

		h2 {
			display: inline;
			margin: 0px;
			color: rgba(0, 0, 0, 0.2);
			font-size: 3rem;
			text-transform: uppercase;
			font-family: 'Noto Sans', sans-serif;
			word-wrap: anywhere;
		}
    }
</style>

<div id="home">
    <section id="intro">
        <div id="tagline">
            <h1 class="highlight">Full Stack</h1>
            <h1>Web Developer</h1>
        </div>

		<div id="image">
			<h2>11001010100101011110000110110101100101001110000110110100101001011110000110110101100101001100101010010100</h2>
		</div>
    </section>
</div>
