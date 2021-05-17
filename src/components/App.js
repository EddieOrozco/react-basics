import React from 'react';
import Header from './Header';
import Logo from './Logo';
// import Counter from '../counter/Counter';
// import Form from '../form/Form';
// import { GlobalStateProvider, StateContext } from '../context/ClassProvider';
import { GlobalStateProvider, StateContext } from '../context/FuncProvider';
import A from '../context/A';
import B from '../context/B';
import C from '../context/C';

// let data = [
//   {
//     fullName: 'Matt Smith',
//     status: 'friend',
//     description: 'Matthew is an interior designer living in New York. ',
//     totalFriends: '75',
//     joinedYear: '2013',
//     imageUrl:
//       'https://images.pexels.com/photos/4448813/pexels-photo-4448813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     fullName: 'Sara Smith',
//     status: 'friend',
//     description: 'Matthew is an interior designer living in New York. ',
//     totalFriends: '15',
//     joinedYear: '2016',
//     imageUrl:
//       'https://images.pexels.com/photos/4450108/pexels-photo-4450108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
//   },
//   {
//     fullName: 'Jane Smith',
//     status: 'friend',
//     description: 'Matthew is an interior designer living in New York. ',
//     totalFriends: '25',
//     joinedYear: '2019',
//     imageUrl:
//       'https://images.pexels.com/photos/3805273/pexels-photo-3805273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     fullName: 'Walter Smith',
//     status: 'friend',
//     description: 'Matthew is an interior designer living in New York. ',
//     totalFriends: '32',
//     joinedYear: '2020',
//     imageUrl:
//       'https://images.pexels.com/photos/4665198/pexels-photo-4665198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
// ];

const App = (props) => {
  return (
    <GlobalStateProvider>
      <StateContext.Consumer>
        {(context) => {
          console.log(context);
          return (
            <>
              <Header>
                <Logo>Logo</Logo>
                <nav>
                  <a href='/'>link</a>
                  <a href='/'>link</a>
                  <a href='/'>link</a>
                </nav>
              </Header>
              <main
                style={{
                  margin: '0 auto',
                  width: '100%',
                  maxWidth: '960px',
                  padding: '20px 20px',
                }}
              >
                <input
                  type='text'
                  value={context.state.name}
                  onChange={context.handleChange}
                />
                <h1>name: {context.state.name}</h1>
                <A>
                  <B>
                    <C></C>
                  </B>
                </A>
                {/* <Form /> */}
              </main>
            </>
          );
        }}
      </StateContext.Consumer>
    </GlobalStateProvider>
  );
};

export default App;
