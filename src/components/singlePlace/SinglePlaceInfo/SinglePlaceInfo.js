import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDarkTheme } from 'redux/selectors/globalSelectors';
import { selectPlaceDataInfo } from 'redux/selectors/placeSelectors';
import Map from 'components/mapGis/Map/Map';

import checkPlaceOpen from 'utils/checkPlaceOpen';
import pickSocialIcon from 'utils/pickSocialIcon';
import { v4 } from 'uuid';
import { FiClock } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';
import { MdLocalPhone, MdKeyboardArrowDown } from 'react-icons/md';

const SinglePlaceInfo = () => {
	const [schedule, setSchedule] = useState(false);
	const darkTheme = useSelector(selectDarkTheme);
	const { phone, social, website, worktime, location } =
		useSelector(selectPlaceDataInfo);

	const isNoWorkTime = worktime.length !== 0 ? true : false;
	const isAroudTheClock =
		worktime.length === 1 && worktime[0].name === 'Круглосуточно'
			? true
			: false;
	const { isOpen, startTime, endTime, nextDayStart } = checkPlaceOpen(worktime);

	const renderPhone = () => {
		return phone.length === 0 ? (
			<span className='single-place-info__no-time'>Контакты не указаны</span>
		) : (
			phone.map(i => {
				return (
					<li className='single-place-info__phone-item' key={v4()}>
						<span className='single-place-info__phone-name'>{i.name}</span>
						<div className='single-place-info__link'>
							<a
								href={`tel: ${i.phone}`}
								className='link single-place-info__phone-number'
							>
								{i.phone}
							</a>
						</div>
					</li>
				);
			})
		);
	};

	const renderWorkTime = () => {
		return isAroudTheClock ? (
			<span className='single-place-info__work-status'>Круглосуточно</span>
		) : isNoWorkTime ? (
			<>
				<span
					className={`single-place-info__work-status ${
						isOpen ? '' : 'single-place-info__work-status--closed'
					}`}
				>
					{isOpen ? 'Открыто' : `Закрыто до ${nextDayStart}`}
				</span>
				<span className='single-place-info__time'>
					{isOpen ? `с ${startTime} до ${endTime}` : ''}
				</span>
				<button
					className='button single-place-info__more-button'
					onClick={toggleSchedule}
				>
					График <MdKeyboardArrowDown size={18} />
				</button>
			</>
		) : (
			<span className='single-place-info__no-time'>
				График работы не указан
			</span>
		);
	};

	const renderWebSite = () => {
		return website.length !== 0 ? (
			<div className='single-place-info__link'>
				<a href={website} className='link single-place-info__site'>
					{website}
				</a>
			</div>
		) : (
			<span className='single-place-info__no-time'>Сайт не указан</span>
		);
	};

	const renderSocial = () => {
		return social.length === 0 ? null : (
			<ul className='list single-place-info__social-list'>
				{social.map(({ type, link }) => {
					return (
						<li className='single-place-info__social-item' key={v4()}>
							<a
								href={link}
								className='link single-place-info__link link single-place-info__link--social'
							>
								{pickSocialIcon(type)}
							</a>
						</li>
					);
				})}
			</ul>
		);
	};
	const toggleSchedule = () => {
		setSchedule(!schedule);
	};

	return (
		<>
			<div className='single-place-info__container'>
				<div
					className={`single-place-info__items ${darkTheme ? 'dark-card' : ''}`}
				>
					<MdLocalPhone
						className={`single-place-info__icon single-place-info__icon--phoneSingle ${
							darkTheme ? 'dark-icon' : ''
						}`}
					/>
					<div className='single-place-info__contact'>
						<span className='single-place-info__title'>Контакты</span>
						<ul className='list single-place-info__phone-list'>
							{renderPhone()}
						</ul>
					</div>
					<FiClock
						className={`single-place-info__icon ${
							darkTheme ? 'dark-icon' : ''
						}`}
					/>
					<div className='single-place-info__work-time'>
						<span className='single-place-info__title'>Время работы</span>
						{renderWorkTime()}
					</div>
					{schedule && isNoWorkTime ? (
						<ul className='list single-place-info__schedule-list'>
							{worktime.map(i => {
								return (
									<li className='single-place-info__schedule-item' key={v4()}>
										<span className='single-place-info__schedule-text'>
											{i.name}
										</span>
										<span className='single-place-info__schedule-text'>
											| {i.start}-{i.end}
										</span>
									</li>
								);
							})}
						</ul>
					) : null}
					<BiWorld
						className={`single-place-info__icon ${
							darkTheme ? 'dark-icon' : ''
						}`}
					/>{' '}
					{renderWebSite()}
					{renderSocial()}
				</div>
				<Map location={location} />
			</div>
		</>
	);
};
export default SinglePlaceInfo;
