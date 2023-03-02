import Svg, { SvgProps, Path } from "react-native-svg";

interface Props extends SVGProps<SVGSVGElement> {

}

const Transaction = (props: Props) => (
  <Svg
    width={22}
    height={18}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.0975 10.4475V11.1975C14.0975 11.69 14.0005 12.1776 13.812 12.6326C13.6236 13.0875 13.3474 13.5009 12.9991 13.8492C12.6509 14.1974 12.2375 14.4736 11.7826 14.6621C11.3276 14.8505 10.84 14.9475 10.3475 14.9475H7.90249C7.89093 15.3577 7.76742 15.7569 7.54533 16.1019C7.32325 16.4469 7.01104 16.7246 6.64249 16.905C6.33512 17.0586 5.9961 17.1382 5.65249 17.1375C5.1442 17.1405 4.64985 16.9713 4.24999 16.6575L1.46749 14.475C1.1965 14.2647 0.977174 13.9952 0.826298 13.6871C0.675421 13.379 0.596985 13.0405 0.596985 12.6975C0.596985 12.3545 0.675421 12.016 0.826298 11.7079C0.977174 11.3998 1.1965 11.1303 1.46749 10.92L4.24999 8.73751C4.58524 8.46995 4.98998 8.30379 5.41653 8.25861C5.84307 8.21343 6.27363 8.29112 6.65749 8.48251C7.16864 8.72699 7.56229 9.16378 7.75249 9.69751H13.325C13.4254 9.6945 13.5253 9.71167 13.6189 9.74801C13.7125 9.78435 13.7979 9.83912 13.8699 9.90906C13.942 9.97901 13.9992 10.0627 14.0383 10.1552C14.0774 10.2477 14.0975 10.3471 14.0975 10.4475Z"
      fill="#D3BDFF"
    />
    <Path
      d="M21.4025 5.3025C21.4026 5.64549 21.3242 5.98396 21.1734 6.29203C21.0226 6.6001 20.8034 6.86962 20.5325 7.07999L17.75 9.2625C17.3445 9.57754 16.846 9.74901 16.3325 9.74999C15.9889 9.75069 15.6499 9.67107 15.3425 9.5175C14.8314 9.27301 14.4377 8.83622 14.2475 8.30249H8.6525C8.45358 8.30249 8.26282 8.22348 8.12217 8.08283C7.98151 7.94217 7.9025 7.75141 7.9025 7.55249V6.8025C7.9025 5.80793 8.29758 4.85411 9.00085 4.15084C9.70411 3.44758 10.6579 3.0525 11.6525 3.0525H14.0975C14.1066 2.63321 14.2328 2.22482 14.4617 1.87341C14.6906 1.522 15.0131 1.24156 15.393 1.06374C15.7728 0.885915 16.1947 0.817788 16.6112 0.867044C17.0277 0.9163 17.4221 1.08098 17.75 1.3425L20.5325 3.525C20.8034 3.73537 21.0226 4.00489 21.1734 4.31296C21.3242 4.62103 21.4026 4.9595 21.4025 5.3025V5.3025Z"
      fill="#7F3DFF"
    />
  </Svg>
);

export { Transaction };
