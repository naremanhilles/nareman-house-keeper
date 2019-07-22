import React from 'react';
import './style.css';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import auth from '../../auth/auth';
import Header from '../Header/index';

export default class Login extends React.Component {
  state = {
    mobile: '',
    message: '',
  };

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { mobile } = this.state;
    const { setUserInfo } = this.props;
    if (mobile) {
      fetch('/api/v1/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          mobile,
        }),
      })
        .then(response => {
          if (response.status !== 200) {
            this.setState({ message: 'تأكد من رقم هاتفك!!' });
          }
          return response.json();
        })
        .then(({ data }) => {
          if (data) {

            auth.setUserInfo(data);
            auth.isAuthenticated = true;
            setUserInfo(data);
            const {
              // eslint-disable-next-line react/prop-types
              history: {
                push,
                location: { state },
              },
            } = this.props;
            const prevPath = state.from.state.from.pathname;
            if (prevPath) {
              return push(prevPath);
            }
            return push('/app/home');
          }
        })
        .catch(err => {
          auth.error = err;
        });
    } else {
      this.setState({ message: 'يرجى ملئ الحقل' });
    }
  };


  handleChange = ({ target: { value, name } }) => { this.setState({ [name]: value, message: '' }) }

  render() {
    const { history } = this.props;
    const { location } = this.props;
    const { mobile, message } = this.state;

    if (auth.isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: '/app/home',
            state: { from: location },
          }}
        />
      );
    }

    return (
      <Container>
        <Header title="دخول" history={history} />
        <Form className="login__form">
          <p className="content-signup__word-sigup">
            ادخل رقم هاتفك المحول لتستقبل رمز التأكيد
          </p>
          <Form.Group>
            <Form.Label>رقم الهاتف المحمول:
            <span className='content-signup__mobile-star'>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              value={mobile}
              placeholder="+970-599000000"
              onChange={this.handleChange}
            />
          </Form.Group>
          <p className="message">{message}</p>
          <Button
            type="button"
            className="login__form-btn"
            onClick={this.handleClick}
          >
            دخول
        </Button>
          <Form.Text className="login__form__text-muted">
            ليس لديك حساب مسبقاً{' '}
            <Link className="link-signup-word" to="/signup">
              أنشئ حساب
            </Link>
          </Form.Text>
        </Form>
      </Container>
    );
  }
}
