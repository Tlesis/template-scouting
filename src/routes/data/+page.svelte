<svelte:head>
    <title>[NAME] | Data</title>
</svelte:head>

<script lang="ts">
    import { AllianceColor } from "$lib/types";
    import type { PageData } from "./$types";

    export let data: PageData;

    // TODO: hard code a bunch of headers for the table that you would like
    const headers = ["Match Number", "Team Number"];

    // download button callback
    // generates the CSV of compiled data inplace
    const download = () => {
        const headers = Object.keys(data.existing[0]).join(',');
        const rows = data.existing.map(obj => Object.values(obj).join(','));
        const csvContent = `${headers}\n${rows.join('\n')}`;

        const link = document.createElement('a');
        link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
        link.setAttribute('download', 'scouting-data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // sort teams by match number then team color then team number from ascending order
    data.existing.sort((a, b) => {

        // sort by team match id if not the same
        if (a.matchid !== b.matchid) {
            return Number(a.matchid) - Number(b.matchid);

        // sort by team color if not the same
        } else if (a.allianceColor !== b.allianceColor) {
            return Number(a.allianceColor) - Number(b.allianceColor);

        // sort by team id
        } else {
            return Number(a.teamid) - Number(b.teamid);
        }
    });
</script>

<button class=" text-w text-center text-lg shadow-sm rounded bg-active px-4 py-2 m-4"
    on:click={download}>
    Download CSV
</button>

<h1 class="text-w text-center text-5xl md:-mt-10 max-md:mt-4 mb-8 font-thin">Collected Data</h1>

<div class="flex justify-center mb-8">
    <table class="text-center mx-16 w-full">
        <thead class="text-w">
            {#each headers as header}
                <th class="w-1/12"><span class="w-11/12 rounded my-2 mx-auto">{header}</span></th>
            {/each}
        </thead>
        <tbody class="border-2">
            {#each data.existing as team}
                <tr class="text-w border border-slate-500">
                    <td>{team.matchid}</td>
                    <td class="inline-flex items-center">
                        <svg class="w-3 h-3 mr-1 mt-px">
                            <circle cx="5" cy="5" r="5" class={`fill-current ${(team.allianceColor === AllianceColor.red) ? "text-red-500" : "text-blue-600"}`}></circle>
                        </svg>
                        {team.teamid}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>