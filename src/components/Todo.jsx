
const Todo = (props) => {
    const classes=["bold", "italic"];
    if (props.input.isCompelted){
        classes.push("line-through");
    }
    return <div>
            <input 
            onChange={(e)=>{ props.handleComplete(props.i);
            }} 
            checked ={props.input.isCompelted} 
            type="checkbox"/>
            <span className={classes.join(" ")}>{props.input.text}</span>
            <button
            className='del'
            style={{ marginLeft: "10px" }} 
            onClick={(e)=>{props.handleDelete(props.i);
            }}>
            Delete
            </button>
        </div> ;
}

export default Todo;
