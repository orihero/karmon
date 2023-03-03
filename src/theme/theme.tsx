import tokens from './tokens.json';
import { createTheme } from '@shopify/restyle';

type fontWeight =
	| '400'
	| 'bold'
	| '700'
	| '500'
	| 'normal'
	| '100'
	| '200'
	| '300'
	| '600'
	| '800'
	| '900'
	| undefined;

const theme = createTheme({
	colors: {
		inkBase: tokens.FigmaColors.inkBase,
		labelColorLightPrimary: tokens.FigmaColors.labelColorLightPrimary,
		systemBackgroundLightPrimary:
			tokens.FigmaColors.systemBackgroundLightPrimary,
		colorsDarkBase1: tokens.FigmaColors.colorsDarkBase1,
		yellowYellow20: tokens.FigmaColors.yellowYellow20,
		yellowYellow40: tokens.FigmaColors.yellowYellow40,
		yellowYellow60: tokens.FigmaColors.yellowYellow60,
		yellowYellow80: tokens.FigmaColors.yellowYellow80,
		yellowYellow100: tokens.FigmaColors.yellowYellow100,
		greenGreen20: tokens.FigmaColors.greenGreen20,
		greenGreen40: tokens.FigmaColors.greenGreen40,
		greenGreen60: tokens.FigmaColors.greenGreen60,
		greenGreen80: tokens.FigmaColors.greenGreen80,
		greenGreen100: tokens.FigmaColors.greenGreen100,
		redRed20: tokens.FigmaColors.redRed20,
		redRed40: tokens.FigmaColors.redRed40,
		redRed60: tokens.FigmaColors.redRed60,
		redRed80: tokens.FigmaColors.redRed80,
		redRed100: tokens.FigmaColors.redRed100,
		blueBlue20: tokens.FigmaColors.blueBlue20,
		blueBlue40: tokens.FigmaColors.blueBlue40,
		blueBlue60: tokens.FigmaColors.blueBlue60,
		blueBlue80: tokens.FigmaColors.blueBlue80,
		blueBlue100: tokens.FigmaColors.blueBlue100,
		violetViolet20: tokens.FigmaColors.violetViolet20,
		violetViolet40: tokens.FigmaColors.violetViolet40,
		violetViolet60: tokens.FigmaColors.violetViolet60,
		violetViolet80: tokens.FigmaColors.violetViolet80,
		violetViolet100: tokens.FigmaColors.violetViolet100,
		baseDarkDark25: tokens.FigmaColors.baseDarkDark25,
		baseDarkDark50: tokens.FigmaColors.baseDarkDark50,
		baseDarkDark75: tokens.FigmaColors.baseDarkDark75,
		baseDarkDark100: tokens.FigmaColors.baseDarkDark100,
		baseLightLight100: tokens.FigmaColors.baseLightLight100,
		baseLightLight80: tokens.FigmaColors.baseLightLight80,
		baseLightLight60: tokens.FigmaColors.baseLightLight60,
		baseLightLight40: tokens.FigmaColors.baseLightLight40,
		baseLightLight20: tokens.FigmaColors.baseLightLight20
	},
	textVariants: {
		defaultRegularFileMetadata: {
			fontFamily: tokens.FigmaTexts.defaultRegularFileMetadata.fontFamily,
			fontWeight: tokens.FigmaTexts.defaultRegularFileMetadata
				.fontWeight as fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.defaultRegularFileMetadata.fontSize
		},
		typographyBoldTextTitle3: {
			fontFamily: tokens.FigmaTexts.typographyBoldTextTitle3.fontFamily,
			fontWeight: tokens.FigmaTexts.typographyBoldTextTitle3
				.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.typographyBoldTextTitle3.fontSize
		},
		titleTitleX: {
			fontFamily: tokens.FigmaTexts.titleTitleX.fontFamily,
			fontWeight: tokens.FigmaTexts.titleTitleX.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.titleTitleX.fontSize,
			lineHeight: tokens.FigmaTexts.titleTitleX.lineHeight
		},
		titleTitle1: {
			fontFamily: tokens.FigmaTexts.titleTitle1.fontFamily,
			fontWeight: tokens.FigmaTexts.titleTitle1.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.titleTitle1.fontSize,
			lineHeight: tokens.FigmaTexts.titleTitle1.lineHeight
		},
		titleTitle2: {
			fontFamily: tokens.FigmaTexts.titleTitle2.fontFamily,
			fontWeight: tokens.FigmaTexts.titleTitle2.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.titleTitle2.fontSize
		},
		titleTitle3: {
			fontFamily: tokens.FigmaTexts.titleTitle3.fontFamily,
			fontWeight: tokens.FigmaTexts.titleTitle3.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.titleTitle3.fontSize
		},
		bodyBody1: {
			fontFamily: tokens.FigmaTexts.bodyBody1.fontFamily,
			fontWeight: tokens.FigmaTexts.bodyBody1.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.bodyBody1.fontSize
		},
		bodyBody2: {
			fontFamily: tokens.FigmaTexts.bodyBody2.fontFamily,
			fontWeight: tokens.FigmaTexts.bodyBody2.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.bodyBody2.fontSize
		},
		bodyBody3: {
			fontFamily: tokens.FigmaTexts.bodyBody3.fontFamily,
			fontWeight: tokens.FigmaTexts.bodyBody3.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.bodyBody3.fontSize,
			lineHeight: tokens.FigmaTexts.bodyBody3.lineHeight
		},
		small: {
			fontFamily: tokens.FigmaTexts.small.fontFamily,
			fontWeight: tokens.FigmaTexts.small.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.small.fontSize,
			lineHeight: tokens.FigmaTexts.small.lineHeight
		},
		tiny: {
			fontFamily: tokens.FigmaTexts.tiny.fontFamily,
			fontWeight: tokens.FigmaTexts.tiny.fontWeight as fontWeight,
			fontSize: tokens.FigmaTexts.tiny.fontSize,
			lineHeight: tokens.FigmaTexts.tiny.lineHeight
		}
	},
	spacing: {}
});

export type Theme = typeof theme;
export default theme;
