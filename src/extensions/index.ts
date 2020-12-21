import { ExtendActivityBar } from './activityBar';
import { ExtendExplore } from './explore';
import { ExtendSearch } from './search';
import { ExtendStatusBar } from './statusBar';
import { defaultColorThemeExtension } from './theme-defaults';
import { monokaiColorThemeExtension } from './theme-monokai';
import { paleNightColorThemeExtension } from './vscode-palenight-theme';

/**
 * Default extensions
 */
export const defaultExtensions = [
    ExtendActivityBar,
    ExtendExplore,
    ExtendSearch,
    ExtendStatusBar,
    defaultColorThemeExtension,
    monokaiColorThemeExtension,
    paleNightColorThemeExtension,
];
