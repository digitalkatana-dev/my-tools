import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Stack,
} from '@mui/material';
import {
	setProjectType,
	setClient,
	addNewProject,
	setSelectedProject,
} from '../../../../redux/slices/projectSlice';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import './list.scss';

const List = ({ setView }) => {
	const { user, projectType, client, allProjects } = useSelector(
		(state) => state.project
	);
	const dispatch = useDispatch();

	const handleChange = (input, value) => {
		const actionMap = {
			type: setProjectType,
			client: setClient,
		};

		const action = actionMap[input];

		action && dispatch(action(value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const projectData = {
			projectType,
			client,
			user: user._id,
		};

		dispatch(addNewProject(projectData));
	};

	const handleProject = (item) => {
		dispatch(setSelectedProject(item));
		setView('checklist');
	};

	return (
		<div id='list'>
			<FormLabel className='form-label'>New Project</FormLabel>
			<form onSubmit={handleSubmit}>
				<Stack direction='row' alignItems='center' gap={5}>
					<FormControl>
						<FormLabel className='radio-label'>Project Type</FormLabel>
						<RadioGroup
							row
							value={projectType}
							onChange={(e) => handleChange('type', e.target.value)}
						>
							<FormControlLabel
								value='voice'
								control={<Radio />}
								label='Voice'
							/>
							<FormControlLabel
								value='circuit'
								control={<Radio />}
								label='Circuit'
							/>
						</RadioGroup>
					</FormControl>
					<FormControl>
						<TextInput
							label='Client'
							placeholder='Client Name'
							value={client}
							onChange={(e) => handleChange('client', e.target.value)}
						/>
					</FormControl>
				</Stack>
				<FormControl>
					<Button type='submit'>Submit</Button>
				</FormControl>
			</form>
			<div className='list-container'>
				{allProjects?.map((item) => (
					<h4 key={item._id} onClick={() => handleProject(item)}>
						{item.client}
					</h4>
				))}
			</div>
		</div>
	);
};

export default List;
