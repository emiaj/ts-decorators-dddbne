import { LanguageContext, SupportedLanguages } from './02_context';
import * as Pages from './03_pages';

describe('i18n tests', () => {

    beforeEach(() => {
        LanguageContext.language = SupportedLanguages.English;
    });

    describe('Home page tests', () => {
        let page: Pages.HomePage;

        beforeEach(() => {
            page = new Pages.HomePage();
        });

        test('Header is initialised according to initial language', () => {
            expect(page.header).toBe('Welcome');
        });

        test('Header changes when language context changes', () => {
            LanguageContext.language = SupportedLanguages.Spanish;
            expect(page.header).toBe('Bienvenidos');
        });
    });

    describe('Talk page tests', () => {

        let page: Pages.TalkPage;

        beforeEach(() => {
            page = new Pages.TalkPage();
        });

        test('Title is initialised according to initial language', () => {
            expect(page.title).toBe('Powerful metaprogramming using decorators with Typescript');
        });

        test('Title changes when language context changes', () => {
            LanguageContext.language = SupportedLanguages.Spanish;
            expect(page.title).toBe('Poderosa metaprogramacion usando decoradores con Typescript');
        });
    });

});