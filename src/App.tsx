import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MesEncheres from './pages/MesEnchere';
import RechargementC from './pages/RechargementC';
import PageajoutE from './pages/PageajoutE';
import Home from './pages/Home';
import Inscription from './pages/Inscription';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            {/* <Route path="/page/:name" exact={true}>
              <Page />
            </Route> */}
            <Route path="/mesencheres" exact={true}>
              <MesEncheres />
            </Route>
           
            <Route path="/rechargement" exact={true}>
              <RechargementC />
            </Route>
            <Route path="/ajoutEnchere" exact={true}>
              <PageajoutE />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
        <Route path="/home" exact={true}>
              <Home />
            </Route>
            <Route path="/inscription" exact={true}>
              <Inscription />
            </Route>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
