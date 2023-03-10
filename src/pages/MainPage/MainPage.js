import Cities from 'components/home/Cities/Cities';
import Search from 'components/shared/Search/Search';

const MainPage = () => {
	return (
		<>
			<h2 className='main-title'>Найдите лучшие места городов России!</h2>
			<Search isMain={true} searchPlaceholder='Введите город...' />
			<Cities />
		</>
	);
};
export default MainPage;
