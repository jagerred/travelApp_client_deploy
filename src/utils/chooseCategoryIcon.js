import { MdFastfood, MdTheaterComedy, MdPark } from 'react-icons/md';
import { GiMedievalGate } from 'react-icons/gi';
import { IoCamera } from 'react-icons/io5';

export const chooseCategoryIcon = category => {
	switch (category) {
		case 'f00':
			return <MdFastfood className='place-categories__icon' />;
		case 'c00':
			return <MdTheaterComedy className='place-categories__icon' />;
		case 'p00':
			return <MdPark className='place-categories__icon' />;
		case 'd00':
			return <IoCamera className='place-categories__icon' />;
		case 'a00':
			return <GiMedievalGate className='place-categories__icon' />;
		default:
	}
};
