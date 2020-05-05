import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// React Developer Tools

function BoilingVeredict(props){
  if (props.celsius >= 100){
    return <p>A água ferveria.</p>
  }
  return <p>A água não ferveria</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function toFahrenheit(celsius){
  return (celsius * 9/5) + 32;
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if (Number.isNaN(input)){
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) /1000;

  return rounded.toString();
}

const scaleNames ={
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
    console.log(e);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Informe a temperatura em {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
constructor(props){
  super(props);
  this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
  this.handleFahrenheintChange = this.handleFahrenheintChange.bind(this);
  this.state= {temperature: '', scale: 'c'};
}

handleCelsiusChange(temperature){
  this.setState({scale: 'c', temperature});
}

handleFahrenheintChange(temperature){
  this.setState({scale: 'f', temperature});
}

  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    
    const celsius = scale === 'f' ?
      tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ?
      tryConvert(temperature, toFahrenheit) : temperature;

    return(
      <div>
        <TemperatureInput 
          scale="c" 
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
          />
        <br />
        <TemperatureInput 
          scale="f" 
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheintChange}
        />
        <BoilingVeredict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

// class Reservation extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event){
//     const target = event.target;
//     const value = target.name === 'isGoing' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({[name]: value});
//   }

//   render(){
//     return(
//       <form>
//         <label>Estão indo:
//           <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Numero de Convidados:
//           <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// );

// class FlavorForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value: 'coco'};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event){
//     alert('Seu sabor favorito é: ' + this.state.value);
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Escolha seu sabor favorito:
//         </label>
//         <select value={this.state.value} onChange={this.handleChange} >
//           <option value='laranja'>Laranja</option>
//           <option value='limao'>Limão</option>
//           <option value='coco'>Côco</option>
//           <option value='manga'>Manga</option>
//         </select>
//       <input type="submit" value="Enviar" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('root')
// );

// class EasyForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       value: 'Por favor, escreva uma dissertação sobre seu elemento DOM favorito'
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event){
//     alert('Uma dissertação foi enviada: ' + this.state.value);
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>Dissertação:</label>
//         <textarea value={this.state.value} onChange={this.handleChange} />
//         <input type="submit" value="Enviar" />    
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <EasyForm />,
//   document.getElementById('root')
// );
// class NameForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event){
//     alert('Um nome foi enviado: ' + this.state.value);
//     event.preventDefault();
//   }

//   render(){
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Nome: 
//         </label>
//         <input type="text" value={this.state.value} onChange={this.handleChange} />
//         <input type="submit" value="Enviar" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );
// function Blog(props){
//   const sidebar = (
//     <ul>
//       {props.posts.map(
//         (post) => 
//         <li key={post.id}>
//           {post.title}
//         </li>
//         )}
//     </ul>
//   );

//   const content = props.posts.map((post) =>
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//         </div>
//   );

//   return(
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// function ListItem(props){
//   return <li>{props.value}</li>;
// }

// function NumberList(props){
//   const numbers = props.numbers;
//   return(
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()} value={number} />
//       )}
//     </ul>
//   );



  // const listItems = numbers.map((number) => 
  //   <ListItem key={number.toString()} value={number}/>);
  // return (
  //   <ul>{listItems}</ul>
  // );
// }

// const posts = [
//   {id: 1, title:'Hello World', content:'Welcome to learning ReactJs'},
//   {id: 2, title:'Instalation', content:'You can install react from npm'}
// ];

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

