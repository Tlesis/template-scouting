import { PUBLIC_FRC_API_KEY, PUBLIC_FRC_USERNAME } from "$env/static/public";

export const EVENT = {
    season: 0,
    eventCode: "event code"
};

export const fetchOptions = {
    headers: {
        "accept": "application/json",
        "Authorization": `Basic ${btoa(`${PUBLIC_FRC_USERNAME}:${PUBLIC_FRC_API_KEY}`)}`
    }
};

export enum AllianceColor {
    red = 0,
    blue = 1
}