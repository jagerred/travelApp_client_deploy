import Search from 'components/shared/Search/Search';
import PlaceCategories from 'components/placeFilters/PlaceCategories/PlaceCategories';
import FilterResult from 'components/placeFilters/FilterResult/FilterResult';
import Filters from 'components/placeFilters/Filters/Filters';

const CityPage = () => {
	return (
		<>
			<Search searchPlaceholder='Введите место' />
			<PlaceCategories />
			<div className='places-filter'>
				<Filters />
				<FilterResult />
			</div>
		</>
	);
};
export default CityPage;
