import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

import Charts from './views/Charts/'
import Dashboard from './views/Dashboard/'

// Components
import Buttons from './views/Components/Buttons/'
import Cards from './views/Components/Cards/'
import Modals from './views/Components/Modals/'
import SocialButtons from './views/Components/SocialButtons/'
import Switches from './views/Components/Switches/'
import Tables from './views/Components/Tables/'
import Tabs from './views/Components/Tabs/'

// Forms
import BasicForms from './views/Forms/BasicForms/'
import AdvancedForms from './views/Forms/AdvancedForms'

// Icons
import FontAwesome from './views/Icons/FontAwesome/'
import Glyphicons from './views/Icons/Glyphicons/'
import GlyphiconsFiletypes from './views/Icons/GlyphiconsFiletypes/'
import GlyphiconsSocial from './views/Icons/GlyphiconsSocial/'
import SimpleLineIcons from './views/Icons/SimpleLineIcons/'

// Plugins
import LoadingButtons from './views/Plugins/LoadingButtons/'
import Spinners from './views/Plugins/Spinners/'

// Pages
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

import Widgets from './views/Widgets/'

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="components/" name="Components">
        <IndexRoute component={Buttons}/>
        <Route path="buttons" name="Buttons" component={Buttons}/>
        <Route path="cards" name="Cards" component={Cards}/>
        <Route path="modals" name="Modals" component={Modals}/>
        <Route path="social-buttons" name="Social Buttons" component={SocialButtons}/>
        <Route path="switches" name="Swithces" component={Switches}/>
        <Route path="tables" name="Tables" component={Tables}/>
        <Route path="tabs" name="Tabs" component={Tabs}/>
      </Route>
      <Route path="forms/" name="Forms">
        <IndexRoute component={BasicForms}/>
        <Route path="basic-forms" name="Basic Forms" component={BasicForms}/>
        <Route path="advanced-forms" name="Advanced Forms" component={AdvancedForms}/>
      </Route>
      <Route path="icons/" name="Icons">
        <IndexRoute component={FontAwesome}/>
        <Route path="font-awesome" name="Font Awesome" component={FontAwesome}/>
        <Route path="glyphicons" name="Glyphicons" component={Glyphicons}/>
        <Route path="glyphicons-filetypes" name="Glyphicons Filetypes" component={GlyphiconsFiletypes}/>
        <Route path="glyphicons-social" name="Glyphicons Social" component={GlyphiconsSocial}/>
        <Route path="simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
      </Route>
      <Route path="plugins/" name="Plugins">
        <IndexRoute component={LoadingButtons}/>
        <Route path="loading-buttons" name="Loading Buttons" component={LoadingButtons}/>
        <Route path="spinners" name="Loading Buttons" component={Spinners}/>
      </Route>
      <Route path="widgets" name="Widgets" component={Widgets}/>
      <Route path="charts" name="Charts" component={Charts}/>
    </Route>
    <Route path="pages/" name="Pages" component={Simple}>
      <IndexRoute component={Page404}/>
      <Route path="login" name="Login Page" component={Login}/>
      <Route path="register" name="Register Page" component={Register}/>
      <Route path="404" name="Page 404" component={Page404}/>
      <Route path="500" name="Page 500" component={Page500}/>
    </Route>
  </Router>
);
