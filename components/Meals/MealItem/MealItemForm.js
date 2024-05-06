import classes from './MealItemForm.module.css'
function MealItem(props){

    return (
        <form className={classes.form}>
            <input/>
            <button>+ Add</button>
        </form>
    )
}
export default MealItem