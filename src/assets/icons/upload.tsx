import Svg, { SvgProps, Path } from "react-native-svg";

interface Props extends SVGProps<SVGSVGElement> {

}

const Upload = (props: Props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 16.9997V1.23975"
      stroke="#7F3DFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.92993 7.23989L10.5899 1.58989C10.9647 1.21738 11.4716 1.0083 11.9999 1.0083C12.5283 1.0083 13.0352 1.21738 13.4099 1.58989L19.0699 7.23989"
      stroke="#7F3DFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23 17V21C23 21.5304 22.7893 22.0391 22.4142 22.4142C22.0391 22.7893 21.5304 23 21 23H3C2.46957 23 1.96086 22.7893 1.58579 22.4142C1.21071 22.0391 1 21.5304 1 21V17"
      stroke="#7F3DFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { Upload };
