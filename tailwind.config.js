module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        leftan: {
          "0%": {
            left: "-15%",
          },
          "100%": {
            left: "0%",
          },
        },
        rightan: {
          "0%": {
            right: "-10%",
          },
          "100%": {
            right: "0%",
          },
        },
        toptan: {
          "0%": {
            top: "-10%",
          },
          "100%": {
            top: "0%",
          },
        },
      },
      animation: {
        anleft: "leftan 0.1s linear",
        anright: "rightan 0.1s linear",
        antop: "toptan 0.1s linear",
      },
    },
  },
  plugins: [],
};