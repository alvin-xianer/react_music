import React from 'react';
import { renderRoutes } from "react-router-config";
function Index (props) {
    const { route } = props;
    return (
        <div>
            <div>index</div>
            { renderRoutes (route.routes) }
        </div>
    )
}

export default React.memo (Index);