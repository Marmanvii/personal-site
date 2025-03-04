import localFont from "next/font/local";

// Or load multiple weights/styles
const sourceCodePro = localFont({
  src: [
    {
      path: "./SourceCodePro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SourceCodePro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export { sourceCodePro };
