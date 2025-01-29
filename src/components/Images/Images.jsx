import React from 'react';
import './images.scss';

export const SopImage = ({ imageUrl, altTxt }) => {
	return (
		<div className='img-container'>
			<img src={imageUrl} alt={altTxt} />
		</div>
	);
};

export const SopImageBig = ({ imageUrl, altTxt }) => {
	return (
		<div className='tall-img-container'>
			<img src={imageUrl} alt={altTxt} />
		</div>
	);
};
