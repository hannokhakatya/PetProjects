import './App.css';
import Footer from './components/Footer/Footer';
import Users from './components/Users/Users';

function App(props) {
  return (
    <div className="wrapper">
      <Users users={props.store.users} />
      <Footer />
    </div>
  );
}

export default App;
