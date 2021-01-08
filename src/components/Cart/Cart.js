import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'

import useStyle from './styles';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyle();

    const EmptyCart = ()=>(
        <Typography variant='subtitle1'>
            You have no item in your shopping cart,
            <Link className={classes.link} to="/">Add Producs</Link>
        </Typography>
    )
    const FilledCart = ()=>(
        <>s
        <Grid container spacing={3}>
            {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item}
                    onUpdateQty={handleUpdateCartQty}
                    onRemoveCart={handleRemoveFromCart}
                    />
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'>
                subtotal:{cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} 
                size='large'
                type='button'
                variant='contained' 
                color='secondary'
                onClick={handleEmptyCart}
                >
                    Empty Cart
                </Button>
                <Button className={classes.checkoutButton} 
                    size='large'
                    type='button'
                    variant='contained' 
                    color='primary'
                    component={Link} to="/checkout"
                >
                    checkout
                </Button>
            </div>
        </div>
        </>
    )
    if(!cart.line_items) return "loading..."
    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>
                Your Shopping Cart
            </Typography>
            { !cart.line_items.length? <EmptyCart /> : <FilledCart />}
            
        </Container>
    )
}

export default Cart
