// App.jsx
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { FastingProvider } from './context/FastingContext';
import { MealProvider } from './context/MealContext';
import { ActivityProvider } from './context/ActivityContext';
import { GoalProvider } from './context/GoalContext';
import { ProgressProvider } from './context/ProgressContext';
import { BmiProvider } from './context/BmiContext';

function App() {
  return (
    <AuthProvider>
      <FastingProvider>
        <MealProvider>
          <ActivityProvider>
            <GoalProvider>
              <ProgressProvider>
                <BmiProvider>
                  <AppRoutes />
                </BmiProvider>
              </ProgressProvider>
            </GoalProvider>
          </ActivityProvider>
        </MealProvider>
      </FastingProvider>
    </AuthProvider>
  );
}

export default App;

