import { CompletedProvider } from "./ContextAPI";
import { RouteApp } from "./route";



export function App() {
   
  return (
    <CompletedProvider initialDatas={[]}>
      <RouteApp />
    </CompletedProvider>
  )
}

