import React from 'react';
import Home from './Home';
import NewKegControl from './NewKegControl';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            masterKegList : []
        };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    }

    handleAddingNewKegToList(newKeg) {
        let temp= this.state.masterKegList.slice();
        temp.push(newKeg);
        this.setState({masterKegList: temp});
    }

    render(){
        return(
            <div>
               <Switch>
                   <Route exact path='/' component={Home}></Route>
                    <Route path='/list' render={() => <NewKegControl kegList={this.state.masterKegList} />} />
                    <Route path='/newkeg' render={() => <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
               </Switch>
            </div>
        );
    }
  
}

export default App;














// import React from 'react';
// import Home from './Home';
// import KegList from './KegList';
// import OrderForm from './OrderForm';
// import { Switch, Route } from 'react-router-dom';

// function App() {
//     return (
//         <div>
//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/list" component={NewKegControl} />
//                 <Route path="/order" component={OrderForm} />
//             </Switch>
//         </div>
//     );
// }

// export default App;