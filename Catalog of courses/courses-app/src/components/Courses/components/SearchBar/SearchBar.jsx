import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import s from './SearchBar.module.css';

function SearchBar(props) {
	return (
		<div className={s.searchBar}>
			<Input onChange={props.onChange} placeholder='Enter course name...' />
			<Button buttonText='Search' onClick={props.onClick} />
		</div>
	);
}

export default SearchBar;
