import "styled-components";
import Theme from './theme';

type ThemeType = typeof Theme;
declare module "styled-componenets" {
    export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        accentColor: string;
    }
}