import Svg, { SvgProps, G, Path } from "react-native-svg";

interface Props extends SVGProps<SVGSVGElement> {

}

const Restaurant = (props: Props) => (
  <Svg
    width={28}
    height={30}
    viewBox="0 0 28 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G>
      <Path
        d="M21.5 0C19.8424 0 18.2527 0.65848 17.0806 1.83058C15.9085 3.00269 15.25 4.5924 15.25 6.25V8.75C15.2497 10.1908 15.7472 11.5875 16.6584 12.7036C17.5695 13.8198 18.8383 14.5868 20.25 14.875V17.725C19.5206 17.9829 18.8887 18.4601 18.4412 19.0912C17.9936 19.7223 17.7522 20.4763 17.75 21.25V26.25C17.75 27.2446 18.1451 28.1984 18.8483 28.9017C19.5516 29.6049 20.5054 30 21.5 30C22.4946 30 23.4484 29.6049 24.1517 28.9017C24.8549 28.1984 25.25 27.2446 25.25 26.25V21.25C25.2478 20.4763 25.0064 19.7223 24.5588 19.0912C24.1113 18.4601 23.4794 17.9829 22.75 17.725V14.875C24.1617 14.5868 25.4305 13.8198 26.3416 12.7036C27.2528 11.5875 27.7503 10.1908 27.75 8.75V6.25C27.75 4.5924 27.0915 3.00269 25.9194 1.83058C24.7473 0.65848 23.1576 0 21.5 0V0Z"
        fill="#FD3C4A"
      />
      <Path
        d="M11.5 0C11.1685 0 10.8505 0.131696 10.6161 0.366117C10.3817 0.600537 10.25 0.918479 10.25 1.25V6.25C10.25 6.58152 10.1183 6.89946 9.88388 7.13388C9.64946 7.3683 9.33152 7.5 9 7.5C8.66848 7.5 8.35054 7.3683 8.11612 7.13388C7.8817 6.89946 7.75 6.58152 7.75 6.25V1.25C7.75 0.918479 7.6183 0.600537 7.38388 0.366117C7.14946 0.131696 6.83152 0 6.5 0C6.16848 0 5.85054 0.131696 5.61612 0.366117C5.3817 0.600537 5.25 0.918479 5.25 1.25V6.25C5.25 6.58152 5.1183 6.89946 4.88388 7.13388C4.64946 7.3683 4.33152 7.5 4 7.5C3.66848 7.5 3.35054 7.3683 3.11612 7.13388C2.8817 6.89946 2.75 6.58152 2.75 6.25V1.25C2.75 0.918479 2.6183 0.600537 2.38388 0.366117C2.14946 0.131696 1.83152 0 1.5 0C1.16848 0 0.850537 0.131696 0.616117 0.366117C0.381696 0.600537 0.25 0.918479 0.25 1.25V8.75C0.249706 10.1908 0.747229 11.5875 1.65837 12.7036C2.56951 13.8198 3.83829 14.5868 5.25 14.875V17.725C4.52056 17.9829 3.88875 18.4601 3.44117 19.0912C2.9936 19.7223 2.75217 20.4763 2.75 21.25V26.25C2.75 27.2446 3.14509 28.1984 3.84835 28.9017C4.55161 29.6049 5.50544 30 6.5 30C7.49456 30 8.44839 29.6049 9.15165 28.9017C9.85491 28.1984 10.25 27.2446 10.25 26.25V21.25C10.2478 20.4763 10.0064 19.7223 9.55883 19.0912C9.11125 18.4601 8.47944 17.9829 7.75 17.725V14.875C9.16171 14.5868 10.4305 13.8198 11.3416 12.7036C12.2528 11.5875 12.7503 10.1908 12.75 8.75V1.25C12.75 0.918479 12.6183 0.600537 12.3839 0.366117C12.1495 0.131696 11.8315 0 11.5 0V0Z"
        fill="#FD3C4A"
      />
    </G>
  </Svg>
);

export { Restaurant };