import React, {createContext} from "react";
const RobustBinaryContext = createContext();

const RobustBinaryProvider = ({children}) => {
    return (
        <RobustBinaryContext.Provider 
        value={{}}>
            {children}
        </RobustBinaryContext.Provider>
    )
}
export { RobustBinaryProvider, RobustBinaryContext }