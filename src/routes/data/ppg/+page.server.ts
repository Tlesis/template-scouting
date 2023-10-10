import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals: { supabase } }) => {

    const [ teams, ppg ] = await Promise.all([

        // TODO: fetch the teams at the event from the api and format the data like this:
        [
            {
                teamNumber: 1810,
                teamName: "CATATRONICS"
            },
            {
                teamNumber: 9316,
                teamName: "CUBATRONICS"
            }
        ],

        supabase.from("ppg-data").select()
            .then(({ data, error }) => {
                if (error) throw fail(500, { error: error.message });
                return data;
            })
    ]);

    return { teams, ppg };

}) satisfies PageServerLoad;