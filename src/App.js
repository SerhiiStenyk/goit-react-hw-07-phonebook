import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Loader from './components/Loader/Loader.jsx';
import Container from './components/Container/Container';
import styles from './App.module.css';
import operations from './redux/operations';
import selectors from './redux/selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  };
  render() {
    const { contacts, isLoading } = this.props;
    return (
      <Container>
        <CSSTransition
          in={true}
          appear={true}
          classNames={styles}
          timeout={1000}
          unmountOnExit
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>
        
        <ContactForm />
    
        <CSSTransition
          in={contacts.length > 1}
          classNames={styles}
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        {isLoading && <Loader />}
        
        <CSSTransition
          in={contacts.length > 0}
          classNames={styles}
          timeout={250}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </Container>
    );
  }
};
App.propTypes = {
  contacts: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  fetchContacts: PropTypes.func.isRequired,
};
const mapDispatchProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts())
});
const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
  isLoading: selectors.getLoading(state),
});
export default connect(mapStateToProps,mapDispatchProps)(App);