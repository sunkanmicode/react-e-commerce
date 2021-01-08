import React from 'react'
import { Grid } from '@material-ui/core';
import ProductItems from './Product/ProductItems'

import useStyles from './styles'

// const products = [ 
//     {id: 1, name: 'shoe', description: 'Runing shoe', price: '$5', image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
//     {id: 2, name: 'Macbook', description: 'Apple.machine', price: '$10', image:'https://o.aolcdn.com/hss/storage/midas/d62e6284f600d10e74304297ce7045af/201797253/Fullbleed_head-on.jpg'}

// ]

const Products = ({ products, onAddToCart })=>{
    const classes = useStyles();
    return(
        <main className ={classes.content}>
            <div className ={classes.toolbar}/>
            <Grid container justify = "center" spacing= {4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs ={12} sm={6} md={4} lg={3}>
                        <ProductItems 
                            product = {product} 
                            onAddToCart={onAddToCart}
                        />
                    </Grid>    
             ))}

            </Grid>
        </main>
    )
}
export default Products