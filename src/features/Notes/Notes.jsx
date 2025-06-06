import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNoteSuccess, setContent } from '../../redux/slices/noteSlice';
import './notes.scss';
import Button from '../../components/Button';
import NoteItem from './components/NoteItem';
import CreateNoteDialog from './components/CreateNoteDialog';

const Notes = () => {
	const { activeUser } = useSelector((state) => state.user);
	const { success } = useSelector((state) => state.note);
	const [showDialog, setShowDialog] = useState(false);
	const dispatch = useDispatch();
	const userNotes = activeUser?.notes;

	const handleOpenClick = () => {
		setShowDialog(true);
	};

	const handleClose = () => {
		setShowDialog(false);
		dispatch(setContent(''));
	};

	const handleSuccess = useCallback(() => {
		if (success) {
			setShowDialog(false);
			setTimeout(() => {
				dispatch(clearNoteSuccess());
			}, 5000);
		}
	}, [success, dispatch]);

	useEffect(() => {
		handleSuccess();
	}, [handleSuccess]);

	return (
		<div id='notes'>
			<Button btnClass='new-note-trigger' onClick={handleOpenClick}>
				New Note
			</Button>
			{userNotes?.map((note) => (
				<NoteItem key={note._id} data={note} />
			))}
			<CreateNoteDialog showDialog={showDialog} onClose={handleClose} />
		</div>
	);
};

export default Notes;
