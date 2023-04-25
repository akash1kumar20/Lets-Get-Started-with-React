import './ExpenseItem.css';
function ExpenseItem(){
    const carD = 'Car Insurance';
    const carP = 'Rs 300';
    const carL = 'Transport'
    const movieD = 'Movies';
    const movieP = 'Rs 200';
    const movieL = 'Outing'
    const foodD = 'Food';
    const foodP = 'Rs 10';
    const foodL = 'Restro'
    const petrolD = 'Petrol';
    const petrolP = 'Rs 100';
    const petrolL = 'Transport'

    return  (
            <div className='expense-item'>
                <div className='expense-item__description'>
                    <h2>{carD}</h2>
                </div>
                <div className='expense-item__price'>
                    {carP}
                </div>
                <div className='expense-item__price'>
                    {carL}
                </div>
                <div className='expense-item__description'>
                    <h2>{movieD}</h2>
                </div>
                <div className='expense-item__price'>
                    {movieP}
                </div>
                <div className='expense-item__price'>
                    {movieL}
                </div>
                <div className='expense-item__description'>
                    <h2>{foodD}</h2>
                </div>
                <div className='expense-item__price'>
                    {foodP}
                </div>
                <div className='expense-item__price'>
                    {foodL}
                </div>
                <div className='expense-item__description'>
                    <h2>{petrolD}</h2>
                </div>
                <div className='expense-item__price'>
                    {petrolP}
                </div>
                <div className='expense-item__price'>
                    {petrolL}
                </div>

            </div>   
    );
}

export default ExpenseItem;