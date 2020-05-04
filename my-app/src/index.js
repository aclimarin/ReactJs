import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//estudar funções callback

function Blog(props){
  const sidebar = (
    <ul>
      {props.posts.map(
        (post) => 
        <li key={post.id}>
          {post.title}
        </li>
        )}
    </ul>
  );

  const content = props.posts.map((post) =>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
  );

  return(
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

function ListItem(props){
  return <li>{props.value}</li>;
}

function NumberList(props){
  const numbers = props.numbers;
  return(
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );



  // const listItems = numbers.map((number) => 
  //   <ListItem key={number.toString()} value={number}/>);
  // return (
  //   <ul>{listItems}</ul>
  // );
}

const posts = [
  {id: 1, title:'Hello World', content:'Welcome to learning ReactJs'},
  {id: 2, title:'Instalation', content:'You can install react from npm'}
];

// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );





// const numbers = [1, 2, 4, 5, 8, 9]
// ReactDOM.render(
//   <NumberList numbers={numbers}/>,
//   document.getElementById('root')
// );

// function WaringBanner(props){
//   if (!props.warn){
//     return null;
//   }

//   return (
//     <div className='warning'>
//       <p>Warning!</p> 
//     </div>
//   );
// }

// class Page extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick(){
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }

//   render(){
//     return(
//       <div>
//         <WaringBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// )

// function Mailbox(props){
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {
//         unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }

// const messages = ['React', 'Re: React', 'Re:Re:React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );


// function LoginButton(props){
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props){
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props){
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick(){
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick(){
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return(
//       <div>
//         {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} />
//         : <LoginButton onClick={this.handleLoginClick} />
//         }
//       </div>
//     );
//     // let button;
//     // if (isLoggedIn){
//     //   button = <LogoutButton onClick={this.handleLogoutClick} />
//     // }else{
//     //   button = <LoginButton onClick={this.handleLoginClick} />
//     // }

//     // return(
//     //   <div>
//     //     <Greeting isLoggedIn={isLoggedIn} />
//     //     {button}
//     //   </div>
//     // )
//   }
// }

// function UserGreeting(props){
//   return <h1>Welcome back!</h1>
// }

// function GuestGreeting(props){
//   return <h1>Please sing up.</h1>
// }

// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;

//   if(isLoggedIn){
//     return <UserGreeting />
//   }
//   return <GuestGreeting />
  
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );


// class Clock extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
  
//   componentDidMount(){
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount(){
//     clearInterval(this.timerID);
//   }

//   tick(){
//     this.setState({
//       date: new Date()
//     });
//   }

//   render(){
//     return(
//       <div>
//         <h1>Hello, {this.props.name}</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );  
//   }
// }

// function App(){
//   return (
//     <div>
//       <Clock name="Carol"/>
//       <Clock name="Miau" />
//       <Clock name="Sapatão" />
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

