import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import Router from "./router/Router";
import useEventsStore from "./stores/useEventsStore";

function App() {
  const { data, isLoading, isError} = useFetch('https://santosnr6.github.io/Data/events.json');
  const { setEvents } = useEventsStore();

  useEffect(() => {
    if(data && !isLoading && !isError){
      setEvents(data);
    }
  },[data])

  return (
    <div className="app">
      <Router />
    </div>
  )
}

export default App;
