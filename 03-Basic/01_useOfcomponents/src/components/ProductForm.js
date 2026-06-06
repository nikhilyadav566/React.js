import './ProductForm.css';

function ProductForm(){
    return(
       <form>   
            <div className='new-product_control'>
                <label>Title</label>
                <input type='text'></input>
            </div>
            <div className='new-product_control'>
                <label>Date</label>
                <input type='date'min='2026-06-06'max='2026-08-08'></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
    </form>)

}

export default ProductForm ;