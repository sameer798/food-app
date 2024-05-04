import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(porps) {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicius food"/>
      </div>
    </>
  );
}

export default Header;
