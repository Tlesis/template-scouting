<svelte:head>
    <title>[NAME] | Matches</title>
</svelte:head>

<script lang="ts">
    import { EVENT } from "$lib/types";
    import type { PageData } from "./$types";

    export let data: PageData;
    const matches = data.matches.matches;

    // TODO: sort matches by match number
    // matches.sort((a, b) => a.matchNumber - b.matchNumber);
</script>

<div class="w-full flex justify-center text-center my-8">
    <h1 class="text-w text-4xl font-thin">{EVENT.season} {data.eventName}</h1>
</div>

<hr class="mx-16 my-8">

<div class="mx-24 mb-8 portrait:hidden max-sm:hidden">
    <table class="text-w text-lg border-4 border-primary w-full">
        <thead class="bg-nav rounded">
            <!-- 7.7% is about 1/13 of the available space
                 the others are multiples of 7.7% -->
                 <th class="w-[7.7%]">Match</th>
                 <th class="w-[23.1%]">Red Alliance</th>
                 <th class="w-[23.1%]">Blue Alliance</th>
                 <th class="w-[15.4%]">Scores</th>
        </thead>
        <tbody>
            {#each matches as match, i}
            <tr>
                <!-- TODO: make rows that follow above headers here -->
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<div class="sm:hidden text-w text-center">
    Phone Landscape To See Data
</div>