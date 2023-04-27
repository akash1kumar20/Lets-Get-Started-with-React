function ExpenseDetails(props){
    const price = props.price;
    const location = props.location;
    const title = props.title;
    

    return (
    <div>
    <div>{price}</div>
     <div>{location}</div>  
     <div>{title}</div>
    </div>

    );
}

export default ExpenseDetails;