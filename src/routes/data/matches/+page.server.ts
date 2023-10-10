import type { PageServerLoad } from "../$types";

export const load = (async () => {

    const [ matches, eventName ] = await Promise.all([

        // TODO: fetch the event match data
        /** you should have or be able to figure out:
         *      who played on what alliance
         *      what the scores were
         *      what the match number was
         */
        [{}],

        // TODO: fetch the full event name
        "[GET FULL EVENT NAME]"

    ]);

    return { matches, eventName };

}) satisfies PageServerLoad;