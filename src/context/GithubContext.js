import { createContext, useContext, useEffect, useState } from "react";

export const UserStateContext = createContext(null);

const users = ["gaearon", "acdlite", "yyx990803", "unclebob", "martinfowler"];
export const userLength = users.length - 1;

export const UserStateContextProvider = ({ children }) => {
  const [number, setNumber] = useState(2);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          // `https://api.github.com/users/${users[number]}`
          `${process.env.REACT_APP_GITHUB_LINK}/${users[number]}`,
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );
        if (!response.ok) {
          const message = `An error has occured: ${response.status} - ${response.statusText}`;
          throw new Error(message);
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        console.log("error:", err);
      }
    };
    getUser();
  }, [number]);

  return (
    <UserStateContext.Provider value={{ setNumber, user, loading }}>
      {children}
    </UserStateContext.Provider>
  );
};

export const UserGithubState = () => {
  const userState = useContext(UserStateContext);
  if (!userState) {
    throw new Error("You forgot UserStateContextProvider");
  }
  return userState;
};
