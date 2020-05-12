import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app/App';
import ErrorBoundry from './components/error-boundry/error-boundry'
import store from './store/store'
import QuizStoreService from './servises/Quizstore-service'
import {QuizServiceProvider} from './components/quiz-service-context/quiz-service-context'

const quizstoreService = new QuizStoreService()


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <QuizServiceProvider value={quizstoreService}>
        <Router>
          <App/>
        </Router>
      </QuizServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
