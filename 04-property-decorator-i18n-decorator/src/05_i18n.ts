import { Labels, EnglishLabels, SpanishLabels } from './01_labels';
import { LanguageContext, SupportedLanguages } from './02_context';

export default function i18n<TKey extends keyof Labels>(key: TKey) {

    return function (target: Object, propertyKey: string) {

        const getter = function () {
            const language = LanguageContext.language;
            const labels: Labels = language === SupportedLanguages.English ?
                EnglishLabels :
                SpanishLabels;
            return labels[key];
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            enumerable: true,
            configurable: true
        });
    };
}