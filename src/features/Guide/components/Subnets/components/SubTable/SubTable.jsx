import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

const SubTable = ({ rowData }) => {
	return (
		<div id='sub-table'>
			<Paper className='sub-paper'>
				<TableContainer sx={{ maxHeight: '45vh' }}>
					<Table stickyHeader size='small'>
						<TableHead>
							<TableRow>
								<TableCell align='center'>Network#</TableCell>
								<TableCell align='center'>IP Range</TableCell>
								<TableCell align='center'>Broadcast</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rowData?.map((row, i) => (
								<TableRow
									key={i}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align='center'>{row.number}</TableCell>
									<TableCell align='center'>{row.range}</TableCell>
									<TableCell align='center'>{row.broadcast}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
};

export default SubTable;
