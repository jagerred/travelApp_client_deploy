import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import SubcategoryFilter from 'components/placeFilters/SubcategoryFilter/SubcategoryFilter';

import {
	fetchDistricts,
	toggleDistricts,
	toggleMobileVisible,
	addFilter,
	deleteFilter,
} from 'redux/slices/filtersSlice';
import {
	selectDistricts,
	selectDistrictsLoadStatus,
	selectMobileVisible,
} from 'redux/selectors/filtersSelectors';
import { selectDarkTheme } from 'redux/selectors/globalSelectors';

import { v4 } from 'uuid';
import { BsArrowLeftShort } from 'react-icons/bs';

const Filters = () => {
	const [searchParams] = useSearchParams();
	const { cityId } = useParams();
	const dispatch = useDispatch();

	const districtsLoadStatus = useSelector(selectDistrictsLoadStatus);
	const mobileVisible = useSelector(selectMobileVisible);
	const districts = useSelector(selectDistricts);
	const darkTheme = useSelector(selectDarkTheme);

	useEffect(() => {
		dispatch(fetchDistricts(cityId));
	}, []);

	useEffect(() => {
		if (searchParams.has('district') && districtsLoadStatus === 'idle') {
			const districtsArr = searchParams.getAll('district');
			districtsArr.forEach(i => dispatch(toggleDistricts(i)));
		}
	}, [districtsLoadStatus]);

	const renderDistricts = () =>
		districts.map(({ district, isActive }) => (
			<li key={v4()} className='filters__item '>
				<label className='filters__names'>
					<input
						type='checkbox'
						className='filters__checkbox'
						checked={isActive}
						onChange={e => {
							e.target.checked
								? dispatch(addFilter({ type: 'district', filter: district }))
								: dispatch(
										deleteFilter({
											type: 'district',
											filter: district,
										})
								  );
							dispatch(toggleDistricts(district));
						}}
					/>
					{district}
				</label>
			</li>
		));

	const themeClass = darkTheme ? `dark-card` : '';

	return (
		<div
			className={`places-filter__filters filters ${
				mobileVisible ? 'visible' : ''
			} ${darkTheme ? 'dark-theme' : ''}`}
		>
			<button
				className='button filters__close-button filter-result__button'
				onClick={() => dispatch(toggleMobileVisible())}
			>
				<BsArrowLeftShort size={36} />
			</button>
			<span className='places-filter__title places-filter__title--filter'>
				????????????:
			</span>
			<SubcategoryFilter />
			<div className={`filters__container ${themeClass}`}>
				<span className='filters__title'>??????????</span>
				<div className='filters__categories'>
					<ul className='list filters__list'>{renderDistricts()}</ul>
				</div>
			</div>
		</div>
	);
};
export default Filters;
