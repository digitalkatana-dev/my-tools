import { styled } from '@mui/material/styles';
import { Tooltip as Base, tooltipClasses } from '@mui/material';

const Tooltip = styled(({ className, ...props }) => (
	<Base {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: '#20bacd',
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: '#20bacd',
		color: '#f5f5f5',
		boxShadow: theme.shadows[1],
		fontSize: 11,
		fontWeight: 'bold',
	},
}));

export default Tooltip;