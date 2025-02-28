import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
} from '@mui/material';
import { setSlash } from '../../../../../../redux/slices/appSlice';
import { masterRows, emptyRows } from '../../../../../../util/helpers';

const MasterTable = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const dispatch = useDispatch();

	const handleClick = (input) => {
		dispatch(setSlash(input));
	};

	const visibleRows = useMemo(
		() =>
			[...masterRows()].slice(
				page * rowsPerPage,
				page * rowsPerPage + rowsPerPage
			),
		[page, rowsPerPage]
	);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<TableContainer component={Paper}>
					<Table sx={{ maxWidth: 650 }} size='small'>
						<TableHead>
							<TableRow>
								<TableCell align='center'>Slash</TableCell>
								<TableCell align='center'>Addresses</TableCell>
								<TableCell align='center'>Hosts</TableCell>
								<TableCell align='center'>Netmask</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{visibleRows?.map((row) => (
								<TableRow
									key={row.slash}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component='th' scope='row' align='center'>
										<p onClick={() => handleClick(row.slash)}>{row.slash}</p>
									</TableCell>
									<TableCell align='center'>{row.addresses}</TableCell>
									<TableCell align='center'>{row.hosts}</TableCell>
									<TableCell align='center'>{row.netmask}</TableCell>
								</TableRow>
							))}
							{emptyRows(page, rowsPerPage, masterRows().length) > 0 && (
								<TableRow
									style={{
										height:
											33 * emptyRows(page, rowsPerPage, masterRows().length),
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component='div'
					count={masterRows()?.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
				/>
			</Paper>
		</Box>
	);
};

export default MasterTable;
