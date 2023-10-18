import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import React, { Component } from "react";

export class ErrorBoundary extends Component {
    state = {
        hasError: false,
        error: null,
    };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo)
        if (error.message.includes("Maximum update depth exceeded")) {
            // Отправьте ошибку на ваш сервер логирования или сторонний сервис.
            // Например, используйте функцию sendErrorToServer(error)
        }
    }

    render() {
        if (this.state.hasError) {
            // Здесь можете отобразить запасной контент или просто скрыть ошибку, чтобы не ломать весь интерфейс
            return <h1>Что-то пошло не так...</h1>;
        }
        return this.props.children;
    }
}



const App1 = ({ a, b }) => {
  const [state, setState] = useState(2)
  useEffect(() => setState(a + 1), [a]);
  useEffect(() => b(state + 1), [state])
  return <div>{a}</div>;
};

export default function App() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // setCount(count + 1)
  }, [count]);

  return <ErrorBoundary><App1 a={count} b={setCount}></App1></ErrorBoundary>;
}
