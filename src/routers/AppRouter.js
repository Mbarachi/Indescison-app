import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import AddExpense from '../components/AddExpense';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={ExpenseDashBoard}/>
                <Route path="/create" component={AddExpense} />
                <Route path="/help" component={HelpPage} />
                <Route path="/edit" component={EditPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;