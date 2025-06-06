import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editor.scss';

const modules = {
	toolbar: [
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline', 'strike'],
		[{ color: [] }, { background: [] }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link'],
	],
};

const formats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'color',
	'background',
	'list',
	'bullet',
	'link',
];

const Editor = ({ value, onChange, onFocus, error }) => {
	return (
		<>
			<ReactQuill
				id='editor'
				theme='snow'
				placeholder='Enter Note'
				value={value}
				onChange={onChange}
				onFocus={onFocus}
				modules={modules}
				formats={formats}
			/>
			{error && <h6 className='error'>{error}</h6>}
		</>
	);
};

export default Editor;
