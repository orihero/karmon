import Svg, { SvgProps, G, Path } from "react-native-svg";

interface Props extends SVGProps<SVGSVGElement> {

}

const RecurringBill = (props: Props) => (
  <Svg
    width={31}
    height={34}
    viewBox="0 0 31 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G>
      <Path
        d="M29.25 27.25C28.9185 27.25 28.6005 27.3817 28.3661 27.6161C28.1317 27.8506 28 28.1685 28 28.5C27.9983 28.9384 27.8812 29.3687 27.6607 29.7476C27.4402 30.1265 27.1239 30.4408 26.7436 30.6589C26.3632 30.8769 25.9322 30.9912 25.4938 30.9901C25.0554 30.989 24.625 30.8726 24.2457 30.6527C23.8665 30.4327 23.5517 30.1169 23.3331 29.7369C23.1145 29.3569 22.9996 28.926 23 28.4876C23.0005 28.0492 23.1162 27.6186 23.3356 27.239C23.555 26.8595 23.8703 26.5442 24.25 26.325C24.2149 26.5817 24.2604 26.8429 24.3803 27.0726C24.5001 27.3022 24.6883 27.489 24.9189 27.607C25.1495 27.7251 25.411 27.7685 25.6674 27.7315C25.9238 27.6944 26.1623 27.5786 26.35 27.4L28.1125 25.6375C28.2297 25.5213 28.3226 25.3831 28.3861 25.2308C28.4496 25.0784 28.4822 24.915 28.4822 24.75C28.4822 24.585 28.4496 24.4216 28.3861 24.2693C28.3226 24.117 28.2297 23.9787 28.1125 23.8625L26.35 22.1C26.2338 21.9829 26.0955 21.8899 25.9432 21.8264C25.7909 21.763 25.6275 21.7303 25.4625 21.7303C25.2975 21.7303 25.1341 21.763 24.9818 21.8264C24.8294 21.8899 24.6912 21.9829 24.575 22.1C24.3853 22.2992 24.2666 22.5553 24.2372 22.8287C24.2078 23.1022 24.2694 23.3777 24.4125 23.6125C23.4931 23.8174 22.6502 24.2778 21.9811 24.9408C21.3119 25.6037 20.8436 26.4422 20.6301 27.3597C20.4166 28.2771 20.4666 29.2362 20.7744 30.1265C21.0822 31.0168 21.6352 31.802 22.3697 32.3917C23.1042 32.9814 23.9904 33.3517 24.9261 33.4598C25.8619 33.5679 26.8091 33.4095 27.6588 33.0028C28.5084 32.5961 29.2259 31.9577 29.7286 31.161C30.2312 30.3644 30.4986 29.442 30.5 28.5C30.5 28.1685 30.3683 27.8506 30.1339 27.6161C29.8995 27.3817 29.5815 27.25 29.25 27.25Z"
        fill="#7F3DFF"
      />
      <Path
        d="M23.725 2.91253C23.1809 2.57648 22.56 2.38514 21.9211 2.3567C21.2823 2.32825 20.6468 2.46365 20.075 2.75003L19.7 2.93753C19.5389 3.00997 19.3642 3.04742 19.1875 3.04742C19.0108 3.04742 18.8361 3.00997 18.675 2.93753L14.3875 1.26253C13.4965 0.907689 12.5035 0.907689 11.6125 1.26253L7.325 2.97503C7.16385 3.04747 6.98918 3.08492 6.8125 3.08492C6.63582 3.08492 6.46115 3.04747 6.3 2.97503L5.925 2.78753C5.35649 2.50366 4.72517 2.36891 4.0903 2.39593C3.45544 2.42295 2.83785 2.61085 2.29551 2.942C1.75318 3.27315 1.30389 3.73668 0.98982 4.28908C0.67575 4.84148 0.507203 5.46463 0.5 6.10003V24.75C0.5 26.4076 1.15848 27.9973 2.33058 29.1694C3.50269 30.3415 5.0924 31 6.75 31H18.475C18.17 30.2014 18.0092 29.3549 18 28.5V28.4C18.002 27.0538 18.3664 25.733 19.0548 24.5761C19.7432 23.4192 20.7303 22.469 21.9125 21.825C22.0861 21.2216 22.4085 20.6715 22.85 20.225L23 20.0875C23.2367 19.8791 23.4968 19.6987 23.775 19.55C24.234 19.3169 24.7361 19.1807 25.25 19.15H25.5V6.10003C25.5 5.46156 25.3369 4.83368 25.0263 4.27587C24.7156 3.71805 24.2677 3.24879 23.725 2.91253V2.91253ZM15.5 22.25H8C7.66848 22.25 7.35054 22.1183 7.11612 21.8839C6.8817 21.6495 6.75 21.3316 6.75 21C6.75 20.6685 6.8817 20.3506 7.11612 20.1161C7.35054 19.8817 7.66848 19.75 8 19.75H15.5C15.8315 19.75 16.1495 19.8817 16.3839 20.1161C16.6183 20.3506 16.75 20.6685 16.75 21C16.75 21.3316 16.6183 21.6495 16.3839 21.8839C16.1495 22.1183 15.8315 22.25 15.5 22.25ZM18 14.75H8C7.66848 14.75 7.35054 14.6183 7.11612 14.3839C6.8817 14.1495 6.75 13.8316 6.75 13.5C6.75 13.1685 6.8817 12.8506 7.11612 12.6161C7.35054 12.3817 7.66848 12.25 8 12.25H18C18.3315 12.25 18.6495 12.3817 18.8839 12.6161C19.1183 12.8506 19.25 13.1685 19.25 13.5C19.25 13.8316 19.1183 14.1495 18.8839 14.3839C18.6495 14.6183 18.3315 14.75 18 14.75Z"
        fill="#7F3DFF"
      />
    </G>
  </Svg>
);

export { RecurringBill };