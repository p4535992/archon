import { MODULE } from "../../module.mjs";

export function getDocument(target) {
    if (stringIsUuid(target)) {
        target = fromUuidSync(target);
    }
    return target?.document ?? target;
}

export function getItem(target) {
    if (stringIsUuid(target)) {
        target = fromUuidSync(target);
    }
    return target;
}

export function stringIsUuid(inId) {
    return typeof inId === "string"
        && (inId.match(/\./g) || []).length
        && !inId.endsWith(".");
}

export function getUuid(target) {
    if (stringIsUuid(target)) {
        return target;
    }
    const document = getDocument(target);
    return document?.uuid ?? false;
}

export function setApi(api) {
    const data = game.modules.get(MODULE.meta.id);
    data.api = api;
}