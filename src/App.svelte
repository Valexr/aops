<script lang="ts" context="module">
    import aops from "$lib/aops/";
    // import aops from "@valexr/aops";

    import type { Name, Repository } from "$types";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;
    export let version: string;

    const fades = [
        "fade-up",
        "fade-down",
        "fade-right",
        "fade-left",
        "fade-up-right",
        "fade-up-left",
        "fade-down-right",
        "fade-down-left",
    ];
    const slides = ["slide-up", "slide-down", "slide-right", "slide-left"];

    let options = {
        // root: window,
        // rootMargin: '200px',
        // threshold: 1,
        anchor: 0,
        offset: 1,
    };

    function scroll(e: CustomEvent<number> & { target: HTMLElement }) {
        if (e.target) {
            e.target.dataset.pos = String(e.detail.toFixed(0));
            e.target.style.transform = `translate(${e.detail}px)`;
        }
    }
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<header>
    <h1>
        <a href={repository.url}>{name}@{version}</a>
    </h1>
</header>

<main>
    <section>
        <h2 id="h2" use:aops data-aops-anim="slide-down">Scroll<br />↓</h2>
    </section>

    <h2 use:aops data-aops-anim="slide-down">Animated</h2>

    <ul>
        {#each fades as fade, i}
            <li id={fade} data-aops-anim={fade} use:aops={options} />
        {/each}
    </ul>

    <img
        id="zoom-in"
        width="300"
        use:aops={options}
        data-aops-anim="zoom-in"
        alt="big"
        src="https://images.unsplash.com/photo-1542614228-14dcbfac0b2a?w=1200"
    />

    {#each { length: 3 } as it, i}
        <section class="fixed">
            <div id="fixed" use:aops={options} on:scroll={scroll}></div>
        </section>
    {/each}

    <div id="test" use:aops={options} on:scroll={scroll}></div>

    <img
        id="zoom-out"
        width="300"
        use:aops={options}
        data-aops-anim="zoom-out"
        alt="big"
        src="https://images.unsplash.com/photo-1547433171-98eb433cc6ff?w=1072"
    />

    {#each slides as slide, i}
        <div id={slide} data-aops-anim={slide} use:aops={options}></div>
    {/each}

    <section>
        <h2 id="h2" use:aops data-aops-anim="slide-up">↑<br />Scroll</h2>
    </section>
</main>

<footer>
    <form action="">
        <label for="">
            Anchor
            <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                bind:value={options.anchor}
            />
        </label>
        <label for="">
            Offset
            <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                bind:value={options.offset}
            />
        </label>
    </form>
</footer>

<style>
    @import "app.css";
    @import "src/lib/aops/assets/index.css";
    /* @import "@valexr/aops/dist/index.css"; */

    section {
        height: 100vh;
        position: relative;
        box-sizing: border-box;
        place-content: center;
    }
    section.fixed {
        height: 200px;
        margin: 1em 0;
        border: 1px dashed;
        overflow: hidden;
        box-sizing: border-box;
    }
    div {
        height: 200px;
        width: 200px;
        background: whitesmoke;
        position: relative;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        will-change: transform;
    }
    section div {
        position: absolute;
        top: 0;
        /* right: 0; */
    }
    div::before {
        content: attr(data-pos);
        position: absolute;
        background: red;
        font-size: 2em;
    }
    div::after {
        content: attr(id);
        position: absolute;
        color: red;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul li {
        width: 200px;
        height: 200px;
        background: whitesmoke;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        /* will-change: transform; */
    }
    ul li::before {
        content: attr(data-pos);
        position: absolute;
        background: red;
        font-size: 2em;
    }
    ul li::after {
        content: attr(id);
        position: absolute;
        color: red;
    }

    img {
        margin: 1em;
    }
</style>
