import Svg, { SvgProps, Path } from "react-native-svg";

interface Props extends SVGProps<SVGSVGElement> {

}

const Settings = (props: Props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      fill="#7F3DFF"
    />
    <Path
      d="M21.79 13L21.41 12.77C21.269 12.687 21.1521 12.5686 21.0709 12.4265C20.9897 12.2844 20.947 12.1236 20.947 11.96C20.947 11.7964 20.9897 11.6356 21.0709 11.4935C21.1521 11.3514 21.269 11.233 21.41 11.15L21.79 10.92C22.4772 10.5225 22.9788 9.86888 23.185 9.10226C23.3912 8.33564 23.2851 7.51855 22.89 6.83L21.89 5.09C21.4908 4.4018 20.8346 3.90034 20.0657 3.69593C19.2969 3.49151 18.4783 3.60089 17.79 4L17.47 4.18C17.3223 4.25908 17.157 4.29977 16.9894 4.29831C16.8218 4.29685 16.6573 4.25331 16.511 4.17166C16.3646 4.09002 16.2411 3.97291 16.1518 3.83108C16.0625 3.68926 16.0103 3.52727 16 3.36V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7957 0 13 0H11C10.2044 0 9.4413 0.316071 8.87869 0.87868C8.31608 1.44129 8.00001 2.20435 8.00001 3V3.36C7.99705 3.53212 7.94971 3.70057 7.86257 3.84903C7.77542 3.9975 7.65142 4.12095 7.50258 4.20744C7.35373 4.29393 7.18508 4.34053 7.01295 4.34273C6.84081 4.34493 6.67102 4.30266 6.52001 4.22L6.21001 4C5.52177 3.60089 4.70317 3.49151 3.93428 3.69593C3.1654 3.90034 2.50919 4.4018 2.11001 5.09L1.11001 6.83C0.901721 7.17426 0.764809 7.5569 0.707424 7.95515C0.65004 8.35341 0.673356 8.75914 0.775985 9.1482C0.878615 9.53726 1.05846 9.90169 1.30482 10.2198C1.55118 10.538 1.85902 10.8033 2.21001 11L2.59001 11.23C2.73102 11.313 2.84791 11.4314 2.92912 11.5735C3.01033 11.7156 3.05304 11.8764 3.05304 12.04C3.05304 12.2036 3.01033 12.3644 2.92912 12.5065C2.84791 12.6486 2.73102 12.767 2.59001 12.85L2.21001 13C1.52282 13.3975 1.02119 14.0511 0.815006 14.8177C0.608825 15.5844 0.714907 16.4014 1.11001 17.09L2.11001 18.83C2.30095 19.1775 2.55886 19.4837 2.86885 19.7308C3.17883 19.978 3.53474 20.1613 3.91599 20.2701C4.29725 20.3789 4.69629 20.4111 5.09004 20.3647C5.4838 20.3183 5.86446 20.1944 6.21001 20L6.52001 19.83C6.67203 19.7422 6.84448 19.696 7.02001 19.696C7.19555 19.696 7.368 19.7422 7.52001 19.83C7.66641 19.9168 7.78825 20.0394 7.874 20.1864C7.95974 20.3334 8.00656 20.4999 8.01001 20.67V21C8.01001 21.7956 8.32608 22.5587 8.88869 23.1213C9.4513 23.6839 10.2144 24 11.01 24H13.01C13.8057 24 14.5687 23.6839 15.1313 23.1213C15.6939 22.5587 16.01 21.7956 16.01 21V20.63C16.0145 20.4589 16.0628 20.2918 16.1504 20.1447C16.2379 19.9977 16.3618 19.8755 16.51 19.79C16.662 19.7022 16.8345 19.656 17.01 19.656C17.1856 19.656 17.358 19.7022 17.51 19.79L17.82 19.97C18.5083 20.3691 19.3269 20.4785 20.0957 20.2741C20.8646 20.0697 21.5208 19.5682 21.92 18.88L22.92 17.14C23.1223 16.7951 23.2536 16.4133 23.3063 16.017C23.3589 15.6207 23.3318 15.2178 23.2265 14.8321C23.1212 14.4464 22.9399 14.0857 22.6932 13.771C22.4465 13.4564 22.1395 13.1943 21.79 13V13ZM12 16C11.2089 16 10.4355 15.7654 9.77773 15.3259C9.11994 14.8864 8.60725 14.2616 8.3045 13.5307C8.00174 12.7998 7.92253 11.9956 8.07687 11.2196C8.23121 10.4437 8.61218 9.73098 9.17159 9.17157C9.731 8.61216 10.4437 8.2312 11.2197 8.07686C11.9956 7.92252 12.7998 8.00173 13.5307 8.30448C14.2617 8.60723 14.8864 9.11992 15.3259 9.77772C15.7654 10.4355 16 11.2089 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16Z"
      fill="#7F3DFF"
    />
  </Svg>
);

export { Settings };
