<script lang="ts" context="module">
    import aops from "$lib/aops/";
    import Gh from "$lib/components/Gh.svelte";
    import type { Name, Repository } from "$types";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;

    const options = {
        // root: null,
        // rootMargin: '200px',
        threshold: 0.5,
        anchor: 0.5,
    };

    function scroll(e: CustomEvent<number> & { target: HTMLElement }) {
        if (e.target) {
            e.target.dataset.pos = String(e.detail);
            e.target.style.transform = `translate(${e.detail}px)`;
        }
    }
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<header>
    <button>Some</button>
    <h1>
        <Gh {repository} />
        {name}
    </h1>
    <button>Else</button>
</header>

<main>
    <section></section>
    <div
        id="top"
        use:aops={options}
        use:aops={options}
        data-aos-anim="fade-up"
    ></div>

    {#each { length: 3 } as it, i}
        <section class="fixed">
            <div id={String(i)} use:aops={options} on:scroll={scroll}></div>
        </section>
    {/each}

    <div id="bottom" use:aops={options} data-aos-anim="fade-down"></div>
    <section></section>
</main>

<footer>
    <p>Footer</p>
</footer>

<style>
    @import "app.css";

    :global([data-aos="h"][data-aos-anim^="fade"]) {
        opacity: 0;
        transition-property: opacity, transform;
        will-change: opacity, transform;
    }
    :global([data-aos="h"][data-aos-anim="fade-up"]) {
        transform: translate3d(0, 100px, 0);
    }
    :global([data-aos="h"][data-aos-anim="fade-down"]) {
        transform: translate3d(0, -100px, 0);
    }
    :global([data-aos="v"][data-aos-anim^="fade"]) {
        opacity: 1;
        transform: translateZ(0);
    }
    :global([data-aos-anim^="fade"]) {
        transition-duration: 500ms;
    }
    :global([data-aos="v"]) {
        /* background: red !important; */
    }
    section {
        height: 100vh;
        position: relative;
        box-sizing: border-box;
    }
    section.fixed {
        height: 202px;
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
        will-change: transform;
    }
    section div {
        position: absolute;
    }
    div::before {
        content: attr(data-pos);
        background: red;
        font-size: 2em;
        position: absolute;
        top: 50%;
        margin-top: -24px;
    }
    div::after {
        content: attr(id);
        position: absolute;
        color: red;
    }
    :global(div.intersected) {
        background: red;
    }
</style>
