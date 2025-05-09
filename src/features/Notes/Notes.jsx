import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './notes.scss';
import Button from '../../components/Button';
import NoteItem from './components/NoteItem';

const Notes = () => {
	const { activeUser } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	return (
		<div id='notes'>
			<Button btnClass='new-note-trigger'>New Note</Button>
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
			<NoteItem />
		</div>
	);
};

export default Notes;
