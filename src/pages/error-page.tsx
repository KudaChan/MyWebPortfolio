import { useRouteError } from "react-router-dom";

import { style } from "../style";
import { EmailForm, StarsCanvas } from "../components";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={`${style.padding} max-w-7xl mx-auto relative z-0 bg-primary`}>
      <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center h-screen w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className={style.sectionHeadText}>Oops!</h1>
          <p className={style.sectionSubText}>Look like this page does not exist.</p>
          <p className="text-center mt-4">
            <i>{(error as Error).message}</i>
          </p>
        </div>
        <div className="flex justify-center mt-8 w-[50%]">
          <EmailForm />
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;