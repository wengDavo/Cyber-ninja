/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    colors:{
      abs:{
        white:"#FFFFFF",
        black:"#000000",
      },
      orange:{
        50:"#FF9500",
        70:"#FFBF66",
        55:"#FFCA80",
        80:"#FFCA80",
        90:"#FFEACC",
        95:"#FFF4E5",
        97:"#FFF9F0",
        99:"#FFFDFA",
      },
      white:{
        90:"#E4E4E7",
        95:"#F1F1F3",
        97:"#F7F7F8",
        99:"#FCFCFD",
      },
      grey:{
        10:"#1A1A1A",
        15:"#262626",
        20:"#333333",
        30:"#4C4C4D",
        35:"#59595A",
        40:"#656567",
        60:"#98989A",
        70:"#B3B3B3",
      },
    },
    fontWeight:{
      regular:"300",
      medium:"500",
      semiBold:"600",
      bold:"700",
      extraBold:"900",
    },
    borderRadius:{
      regular:"6px",
    },
    extend: {},
  },
  plugins: [],
}
