import Svg, { SvgProps, Path } from "react-native-svg";

interface Props extends SVGProps<SVGSVGElement> {

}

const Notification = (props: Props) => (
  <Svg
    width={22}
    height={25}
    viewBox="0 0 22 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 18.5C20.8608 19.2171 20.472 19.8616 19.9026 20.3193C19.3333 20.777 18.6203 21.0181 17.89 21H4.11001C3.37977 21.0181 2.66671 20.777 2.09738 20.3193C1.52805 19.8616 1.13927 19.2171 1.00001 18.5C0.896626 17.885 0.987458 17.2531 1.25988 16.6921C1.5323 16.1312 1.97276 15.669 2.52001 15.37C2.66786 15.2883 2.79065 15.1679 2.87522 15.0216C2.95979 14.8754 3.00293 14.7089 3.00001 14.54V11C2.99726 9.40408 3.4719 7.84382 4.3629 6.51978C5.25391 5.19575 6.52056 4.16847 8.00001 3.57C8.00399 2.77435 8.32388 2.01287 8.8893 1.45307C9.45472 0.893275 10.2194 0.58102 11.015 0.584998C11.8107 0.588977 12.5721 0.908862 13.1319 1.47428C13.6917 2.03971 14.004 2.80435 14 3.6C15.4923 4.25496 16.7605 5.33179 17.6489 6.69803C18.5372 8.06428 19.0068 9.66037 19 11.29V14.54C18.9931 14.7049 19.0302 14.8688 19.1075 15.0146C19.1848 15.1605 19.2996 15.2832 19.44 15.37C19.9946 15.6631 20.4434 16.1227 20.7233 16.6842C21.0031 17.2456 21.0999 17.8807 21 18.5V18.5Z"
      fill="#7F3DFF"
    />
    <Path
      d="M11.0001 25C11.6981 24.9958 12.3829 24.809 12.9864 24.4581C13.5899 24.1072 14.091 23.6046 14.4401 23H7.56006C7.90908 23.6046 8.41024 24.1072 9.01372 24.4581C9.6172 24.809 10.302 24.9958 11.0001 25Z"
      fill="#7F3DFF"
    />
  </Svg>
);

export { Notification };
