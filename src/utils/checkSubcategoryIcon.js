import { IoRestaurant, IoCafe, IoFastFood } from 'react-icons/io5';
import {
	FaGlassCheers,
	FaChurch,
	FaMonument,
	FaTheaterMasks,
} from 'react-icons/fa';
import { GiSpookyHouse, GiParkBench, GiFlowerEmblem } from 'react-icons/gi';
import {
	MdPlace,
	MdMuseum,
	MdMovie,
	MdPalette,
	MdNature,
} from 'react-icons/md';
import { RiBankFill } from 'react-icons/ri';

export const checkSubcategoryIcon = subcategory => {
	switch (subcategory) {
		case 'f00res':
			return (
				<IoRestaurant
					className='place-card__icon place-card__icon--food'
					fill='white'
				/>
			);
		case 'f00caf':
			return (
				<IoCafe
					className='place-card__icon place-card__icon--food'
					fill='white'
				/>
			);
		case 'f00fas':
			return (
				<IoFastFood
					className='place-card__icon place-card__icon--food'
					fill='white'
				/>
			);
		case 'f00bar':
			return (
				<FaGlassCheers
					className='place-card__icon place-card__icon--food'
					fill='white'
				/>
			);
		case 'a00bld':
			return (
				<GiSpookyHouse
					className='place-card__icon place-card__icon--architect'
					fill='white'
				/>
			);
		case 'a00chr':
			return (
				<FaChurch
					className='place-card__icon place-card__icon--architect'
					fill='white'
				/>
			);
		case 'd00sta':
			return (
				<FaMonument
					className='place-card__icon place-card__icon--attract'
					fill='white'
				/>
			);
		case 'd00plc':
			return (
				<MdPlace
					className='place-card__icon place-card__icon--attract'
					fill='white'
				/>
			);
		case 'd00bld':
			return (
				<RiBankFill
					className='place-card__icon place-card__icon--attract'
					fill='white'
				/>
			);
		case 'с00mus':
			return (
				<MdMuseum
					className='place-card__icon place-card__icon--culture'
					fill='white'
				/>
			);
		case 'c00the':
			return (
				<FaTheaterMasks
					className='place-card__icon place-card__icon--culture'
					fill='white'
				/>
			);
		case 'c00cin':
			return (
				<MdMovie
					className='place-card__icon place-card__icon--culture'
					fill='white'
				/>
			);
		case 'c00art':
			return (
				<MdPalette
					className='place-card__icon place-card__icon--culture'
					fill='white'
				/>
			);
		case 'p00old':
			return (
				<MdNature
					className='place-card__icon place-card__icon--parks'
					fill='white'
				/>
			);
		case 'p00imp':
			return (
				<GiParkBench
					className='place-card__icon place-card__icon--parks'
					fill='white'
				/>
			);
		case 'c00grd':
			return (
				<GiFlowerEmblem
					className='place-card__icon place-card__icon--parks'
					fill='white'
				/>
			);
		default:
	}
};
