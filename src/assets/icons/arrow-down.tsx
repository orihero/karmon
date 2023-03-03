import Svg, { SvgProps, Path } from 'react-native-svg';

interface Props extends SvgProps {}

const ArrowDown = (props: Props) => (
	<Svg width={16} height={8} viewBox="0 0 16 8" fill="none" {...props}>
		<Path
			d="M8.009 6.55755L8.00009 7.30749L7.99118 6.55755C7.2017 6.56693 6.44046 6.26472 5.87244 5.71664L2.2345 2.04006L5.87976 5.68533L5.88672 5.69228L5.89386 5.69906C6.46242 6.23854 7.21631 6.53929 8.00009 6.53929C8.78386 6.53929 9.53776 6.23854 10.1063 5.69906L10.1135 5.69228L10.1204 5.68533L13.7657 2.04009L10.1277 5.71663C9.55973 6.26472 8.79848 6.56693 8.009 6.55755Z"
			fill="black"
			stroke="#7F3DFF"
			strokeWidth={1.5}
		/>
	</Svg>
);

export { ArrowDown };
