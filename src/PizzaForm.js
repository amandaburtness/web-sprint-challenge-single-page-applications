import React from 'react'

const PizzaForm = (props) => {
  const { values, submit, change, errors, disabled } = props
  
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }


  return (

    <div className = "form-container">
      <h1>Time to make some pizza</h1>
      <form onSubmit = {onSubmit}>
        <div className = "error">
        </div>

        <label><h3>Name</h3>
          <input name="name" type="text" value = {values.name} onChange={onChange}/>
        </label>

        <label><h3>Choice of size</h3>
          <select onChange={onChange} value={values.size} name='size'>
            <option value = ''>--Select size--</option>
            <option value = 'small'>Small</option>
            <option value = 'medium'>Medium</option>
            <option value = 'large'>Large</option>
          </select>
        </label>

        <label>
          <h3>Toppings</h3>
        
          <label>Pepperoni
              <input type='checkbox' name='pepperoni' onChange={onChange}/>
          </label>

          <label>Ham
            <input type='checkbox' name='ham' onChange={onChange}/>
          </label>

          <label>Onions
            <input type='checkbox' name='onions' onChange={onChange}/>
          </label>

          <label>Pineapple
            <input type='checkbox' name='pineapple' onChange={onChange}/>
          </label>
        </label>

        <label><h3>Special Instructions</h3>
          <input name = 'instructions' type = 'text' onChange={onChange} value = {values.instructions}/>
        </label>

        <button id = "submit" disabled={disabled}>Place Your Order!</button>
      </form>
  </div>
  )
}

export default PizzaForm