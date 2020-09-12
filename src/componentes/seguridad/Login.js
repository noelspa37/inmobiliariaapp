import React, { Component } from 'react'
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core'
import LockOutlineIcon from '@material-ui/icons/LockOutlined'

const style = {
    paper: {
        marginTop: 9,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: 5,
        backgroundColor: 'red'
    },
    form: {
        width: '100%',
        marginTop: 8
    }
}

class Login extends Component {
    render() {
        return (
            <Container style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockOutlineIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Ingrese usuario
                </Typography>
                <form style={style.form}>
                    <TextField variant='outlined'
                        label='E-mail'
                        name='email'
                        fullWidth
                        margin='normal' />
                    <TextField variant='outlined'
                        label='Password'
                        name='password'
                        type='password'
                        fullWidth
                        margin='normal' />
                    <Button type='submit'
                        fullWidth
                        variant='contained'
                        color='primary' >
                        Enviar
                    </Button>
                </form>
            </Container>
        )
    }
}

export default Login
