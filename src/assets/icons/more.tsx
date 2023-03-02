import Svg, { SvgProps, Path } from "react-native-svg";

interface Props extends SVGProps<SVGSVGElement> {

}

const More = (props: Props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3333 16C13.3333 14.5272 14.5272 13.3333 15.9999 13.3333C17.4727 13.3333 18.6666 14.5272 18.6666 16C18.6666 17.4727 17.4727 18.6667 15.9999 18.6667C14.5272 18.6667 13.3333 17.4727 13.3333 16Z"
      fill="#161719"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.6667 16C22.6667 14.5272 23.8607 13.3333 25.3334 13.3333C26.8062 13.3333 28.0001 14.5272 28.0001 16C28.0001 17.4727 26.8062 18.6667 25.3334 18.6667C23.8607 18.6667 22.6667 17.4727 22.6667 16Z"
      fill="#161719"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 16C4 14.5272 5.19391 13.3333 6.66667 13.3333C8.13943 13.3333 9.33333 14.5272 9.33333 16C9.33333 17.4727 8.13943 18.6667 6.66667 18.6667C5.19391 18.6667 4 17.4727 4 16Z"
      fill="#161719"
    />
  </Svg>
);

export { More };
