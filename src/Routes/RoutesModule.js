import { Routes, Route } from "react-router-dom";
import Weather from "../Components/Weather/Weather";
import PageNotFound from "../Components/PageNoteFound/PageNotFound";

const RoutesModule = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Weather />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default RoutesModule;
