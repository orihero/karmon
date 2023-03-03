import Svg, { G, Path, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {}

const Add = (props: Props) => (
	<Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
		<G>
			<Path
				d="M23 5H9C6.79086 5 5 6.79086 5 9V23C5 25.2091 6.79086 27 9 27H23C25.2091 27 27 25.2091 27 23V9C27 6.79086 25.2091 5 23 5Z"
				stroke={props.stroke}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M16 20V12"
				stroke={props.stroke}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M20 16H12"
				stroke={props.stroke}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</G>
	</Svg>
);

export { Add };
