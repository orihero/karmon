import Svg, { SvgProps, G, Path } from "react-native-svg";

interface Props extends SVGProps<SVGSVGElement> {

}

const Expense = (props: Props) => (
  <Svg
    width={25}
    height={29}
    viewBox="0 0 25 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G>
      <Path
        d="M19.1975 13H5.19751C3.87143 13 2.59966 13.5268 1.66198 14.4645C0.724294 15.4021 0.19751 16.6739 0.19751 18V24C0.19751 25.3261 0.724294 26.5979 1.66198 27.5355C2.59966 28.4732 3.87143 29 5.19751 29H19.1975C20.5236 29 21.7954 28.4732 22.733 27.5355C23.6707 26.5979 24.1975 25.3261 24.1975 24V18C24.1975 16.6739 23.6707 15.4021 22.733 14.4645C21.7954 13.5268 20.5236 13 19.1975 13V13ZM12.1975 25C11.4064 25 10.633 24.7654 9.97523 24.3259C9.31743 23.8864 8.80474 23.2616 8.50199 22.5307C8.19924 21.7998 8.12003 20.9956 8.27437 20.2196C8.42871 19.4437 8.80967 18.731 9.36908 18.1716C9.92849 17.6122 10.6412 17.2312 11.4171 17.0769C12.1931 16.9225 12.9973 17.0017 13.7282 17.3045C14.4591 17.6072 15.0839 18.1199 15.5234 18.7777C15.9629 19.4355 16.1975 20.2089 16.1975 21C16.1975 22.0609 15.7761 23.0783 15.0259 23.8284C14.2758 24.5786 13.2584 25 12.1975 25Z"
        fill="#FD3C4A"
      />
      <Path
        d="M12.1975 23C13.3021 23 14.1975 22.1046 14.1975 21C14.1975 19.8954 13.3021 19 12.1975 19C11.0929 19 10.1975 19.8954 10.1975 21C10.1975 22.1046 11.0929 23 12.1975 23Z"
        fill="#FD3C4A"
      />
      <Path
        d="M12.9076 1.29C12.8146 1.19627 12.704 1.12188 12.5822 1.07111C12.4603 1.02034 12.3296 0.994202 12.1976 0.994202C12.0656 0.994202 11.9349 1.02034 11.813 1.07111C11.6912 1.12188 11.5806 1.19627 11.4876 1.29L7.2476 5.54C7.05399 5.72698 6.94259 5.98321 6.9379 6.25232C6.93321 6.52144 7.03562 6.78139 7.2226 6.975C7.40957 7.16861 7.6658 7.28001 7.93492 7.2847C8.20403 7.28939 8.46399 7.18698 8.6576 7L11.1976 4.41V10C11.1976 10.2652 11.303 10.5196 11.4905 10.7071C11.678 10.8946 11.9324 11 12.1976 11C12.4628 11 12.7172 10.8946 12.9047 10.7071C13.0922 10.5196 13.1976 10.2652 13.1976 10V4.41L15.7376 7C15.9239 7.18474 16.1753 7.2889 16.4376 7.29C16.5775 7.29761 16.7175 7.27573 16.8484 7.22577C16.9793 7.17581 17.0983 7.09889 17.1976 7C17.3838 6.81264 17.4884 6.55919 17.4884 6.295C17.4884 6.03081 17.3838 5.77736 17.1976 5.59L12.9076 1.29Z"
        fill="#FD3C4A"
      />
    </G>
  </Svg>
);

export { Expense };
