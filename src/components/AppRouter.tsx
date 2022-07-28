import React from 'react';
import {useRoutes} from "react-router-dom";
import {ROUTES} from "../router/ROUTES";

const AppRouter = () => useRoutes(ROUTES);

export default AppRouter;