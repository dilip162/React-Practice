// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/dilip162")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="bg-yellow-300 py-4 px-2">
      <h1 className="text-red-400 text-center py-4 px-3 text-3xl bg-slate-200">
        Github followers :{data.followers}
      </h1>
      <img
        className="p-4 border-spacing-1 rounded"
        src={data.avatar_url}
        alt="git picture"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/dilip162");

  return response.json();
};
