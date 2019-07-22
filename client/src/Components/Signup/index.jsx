import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import { Form, Button, Container } from 'react-bootstrap';
import signupValidation from './validation';
import auth from '../../auth/auth';
import Header from '../Header/index';

export default class SignUp extends Component {
  state = {
    username: '',
    mobile: '',
    errormsg: '',
  };

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    const { setUserInfo } = this.props;
    const { username, mobile } = this.state;
    this.setState({ errormsg: '' });
    signupValidation
      .validate(
        {
          mobile,
          username,
        },
        { abortEarly: false }
      )
      .then(() => {
        fetch('/api/v1/members', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, mobile }),
        })
          .then(res => res.json())
          .then(response => {
            if (response.data) {
              const { history } = this.props;
              console.log(666666, response.data[0]);

              auth.setUserInfo(response.data[0]);
              auth.isAuthenticated = true;
              setUserInfo(response.data);
              history.push('/login');
            } else {
              this.setState({ errormsg: response.error.msg });
            }
          })
          .catch(err => {
            auth.error = err;
          });
      })
      .catch(({ inner }) => {

        if (inner) {
          const errors = inner.reduce(
            (acc, item) => ({ ...acc, [item.path]: item.message }),
            {}
          );
          this.setState({ errormsg: { ...errors } });
        }
      });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState(({ errormsg }) => {
      const newErrormsg = { ...errormsg };
      newErrormsg[name] = '';
      return { [name]: value, errormsg: newErrormsg };
    });
  };

  render() {
    const { history } = this.props;
    const { username, mobile, errormsg } = this.state;
    const { location } = this.props;
    if (auth.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }
          }
        />
      );
    }
    return (
      <div >
        <Container>
          <Header title="Sign Up" history={history} />
          <Form className="content-signup">
            <p className="content-signup__word-sigup">
              ادخخل اسمك ورقم هاتفك لتستقبل رمز التأكيد
          </p>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>
                الاسم :{' '}
                <span className="content-signup__username-star">*</span>
              </Form.Label>
              <Form.Control
                name="username"
                value={username}
                onChange={this.handleChange}
                type="username"
                placeholder="ادخل الاسم"
              />
              {errormsg && <span className="errormsg">{errormsg.username}</span>}
            </Form.Group>
            <Form.Group controlId="formBasicMobile">
              <Form.Label>
                الهاتف المحمول :{' '}
                <span className="content-signup__mobile-star">*</span>
              </Form.Label>
              <Form.Control
                name="mobile"
                value={mobile}
                onChange={this.handleChange}
                type="text"
                placeholder="+970-599000000"
              />
              {errormsg && <span className="errormsg">{errormsg.mobile}</span>}
            </Form.Group>
            <p className="errormsg">{errormsg.msg}</p>
            <Button
              variant="primary"
              type="submit"
              className="content-signup__submit"
              onClick={this.handleClick}
            >
              أنشئ
          </Button>
            <Form.Text className="content-signup__text-muted">
              لديك حساب سابق بالفعل?{' '}
              <Link to="/login" className="content-signup__word-login">
                دخول
            </Link>
            </Form.Text>
            <Form.Text className="content-signup__text-muted">
              من خلال تسجيلك انت توافق على {' '}
              <Link to="/service" className="content-signup__word-login">
                شروط الخدمة
            </Link>
            </Form.Text>
          </Form>
        </Container>
      </div>
    );
  }
}
