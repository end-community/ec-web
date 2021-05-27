import React, { useEffect } from "react";
import { Header } from "~/components";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;

// const toastId = React.useRef(null);

//   const notify = () => (toastId.current = toast("Hello", { autoClose: false }));

//   const update = () =>
//     toast.update(toastId.current, {
//       render: "updated!",
//       type: toast.TYPE.SUCCESS,
//       autoClose: 5000,
//     });

//   return (
//     <div>
//       <button onClick={notify}>Notify</button>
//       <button onClick={update}>Update</button>
//     </div>
//   );
