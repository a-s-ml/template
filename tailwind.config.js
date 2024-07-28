module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				tgAccentTextColor:
					"rgb(var(--tg-AccentTextColor) / <alpha-value>)",
				tgBgColor: "rgb(var(--tg-BgColor) / <alpha-value>)",
				tgButtonColor: "rgb(var(--tg-ButtonColor) / <alpha-value>)",
				tgButtonTextColor:
					"rgb(var(--tg-ButtonTextColor) / <alpha-value>)",
				tgDestructiveTextColor:
					"rgb(var(--tg-DestructiveTextColor) / <alpha-value>)",
				tgHeaderBgColor: "rgb(var(--tg-HeaderBgColor) / <alpha-value>)",
				tgHintColor: "rgb(var(--tg-HintColor) / <alpha-value>)",
				tgLinkColor: "rgb(var(--tg-LinkColor) / <alpha-value>)",
				tgSecondaryBgColor:
					"rgb(var(--tg-SecondaryBgColor) / <alpha-value>)",
				tgSectionBgColor: "rgb(var(--tg-SectionBgColor) / <alpha-value>)",
				tgSectionHeaderTextColor:
					"rgb(var(--tg-SectionHeaderTextColor) / <alpha-value>)",
				tgSectionSeparatorColor:
					"rgb(var(--tg-SectionSeparatorColor) / <alpha-value>)",
				tgSubtitleTextColor:
					"rgb(var(--tg-SubtitleTextColor) / <alpha-value>)",
				tgTextColor: "rgb(var(--tg-TextColor) / <alpha-value>)"
			},
			keyframes: {
				leftan: {
					"0%": {
						left: "-15%"
					},
					"100%": {
						left: "0%"
					}
				},
				rightan: {
					"0%": {
						right: "-10%"
					},
					"100%": {
						right: "0%"
					}
				},
				toptan: {
					"0%": {
						top: "-10%"
					},
					"100%": {
						top: "0%"
					}
				},
				preloader: {
					"0%": {
						transform: 'rotate(0)'
					},
					"25%": {
						transform: 'rotate(90deg)'
					},
					"50%": {
						transform: 'rotate(180deg)'
					},
					"75%": {
						transform: 'rotate(270deg)'
					},
					"100%": {
						transform: 'rotate(360deg)'
					}
				}

			},
			animation: {
				animateleft: "leftan 0.1s linear",
				animateright: "rightan 0.1s linear",
				animatetop: "toptan 0.1s linear",
				animatePreloader: "preloader 3s ease-in-out infinite alternate",
				animatePreloaderR: "preloader 3s ease-in-out infinite alternate-reverse",
			}
		}
	},
	plugins: []
}
