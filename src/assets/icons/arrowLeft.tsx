import Svg, { SvgProps, Path } from 'react-native-svg';

interface Props extends SvgProps {}

const ArrowLeft = (props: Props) => (
	<Svg width={24} height={18} viewBox="0 0 24 18" fill="none" {...props}>
		<Path
			d="M1.37497 8.5L2.23814 7.64481L7.64794 2.285C7.64797 2.28497 7.648 2.28494 7.64803 2.28492C7.69485 2.23845 7.73202 2.18318 7.75739 2.12229C7.78277 2.06136 7.79584 1.996 7.79584 1.93C7.79584 1.86399 7.78277 1.79864 7.75739 1.73771C7.73201 1.67678 7.69481 1.62148 7.64794 1.575L7.64755 1.5746C7.55386 1.48148 7.42714 1.42921 7.29505 1.42921C7.16295 1.42921 7.03623 1.48148 6.94255 1.5746L6.94204 1.5751L1.23382 7.23333C1.23354 7.23362 1.23325 7.2339 1.23297 7.23418C0.765333 7.70285 0.502686 8.3379 0.502686 9C0.502686 9.6624 0.765569 10.2977 1.2336 10.7664L1.37497 8.5ZM1.37497 8.5H2.59005H23C23.1327 8.5 23.2598 8.55268 23.3536 8.64645C23.4474 8.74021 23.5 8.86739 23.5 9C23.5 9.13261 23.4474 9.25979 23.3536 9.35355C23.2598 9.44732 23.1327 9.5 23 9.5H2.59005H1.38294L2.23649 10.3536L7.59649 15.7136L7.59794 15.715C7.64481 15.7615 7.68201 15.8168 7.70739 15.8777C7.73277 15.9386 7.74584 16.004 7.74584 16.07C7.74584 16.136 7.73277 16.2014 7.70739 16.2623C7.68201 16.3232 7.64481 16.3785 7.59794 16.425L7.59794 16.425C7.55122 16.4713 7.49581 16.508 7.43489 16.5329C7.37397 16.5578 7.30874 16.5704 7.24294 16.57L7.24215 16.57C7.11127 16.5695 6.98584 16.5176 6.89278 16.4256C6.89257 16.4254 6.89236 16.4252 6.89215 16.425L1.23382 10.7667L1.37497 8.5Z"
			fill="#7F3DFF"
			stroke="white"
		/>
	</Svg>
);

export { ArrowLeft };
