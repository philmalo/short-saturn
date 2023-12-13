import { showDefaultLang } from './ui';

export function useTranslatedPath(lang) {
    return function translatePath(path, l = lang) {
        return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
    }
}
