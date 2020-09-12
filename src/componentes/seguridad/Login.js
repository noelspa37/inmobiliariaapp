import React, { Component } from 'react'
import { Container, Avatar, Typography, TextField, Button } from '@material-ui/core'
import LockOutlineIcon from '@material-ui/icons/LockOutlined'
import { compose } from 'recompose'
import { consumerFirebase } from '../../server'

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

    state = {
        firebase: null,
        usuario: {
            email: '',
            password: ''
        }
    }

    onChange = e => {
        let usuario = Object.assign({}, this.state.usuario)
        usuario[e.target.name] = e.target.value
        this.setState({
            usuario: usuario
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.firebase === prevState.firebase) {
            return null
        }

        return {
            firebase: nextProps.firebase
        }
    }

    login = e => {
        e.preventDefault()
        const { firebase, usuario } = this.state

        firebase.auth
            .signInWithEmailAndPassword(usuario.email, usuario.password)
            .then(auth => {
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                        margin='normal'
                        onChange={this.onChange}
                        value={this.state.usuario.email} />
                    <TextField variant='outlined'
                        label='Password'
                        name='password'
                        type='password'
                        fullWidth
                        margin='normal'
                        onChange={this.onChange}
                        value={this.state.usuario.password} />
                    <Button type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        onClick={this.login} >
                        Enviar
                    </Button>
                </form>
            </Container>
        )
    }
}

export default compose(consumerFirebase)(Login)
