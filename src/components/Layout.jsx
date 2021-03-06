import s from "../assets/sass/layout.module.scss";
import TableComponent from "../views/TableComponent";
import AddNewUser from "../views/AddNewUser";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../store/actions";

const Layout = () => {
  const dispatch = useDispatch();

  const url =
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

  useEffect(() => {
    dispatch(fetchData(url));
  }, [dispatch]);

  return (
    <main className={s.layout}>
      <h1>Dashboard</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/table" />}></Route>
        <Route path="/table" element={<TableComponent />} />
        <Route path="/add-new-user" element={<AddNewUser />} />
      </Routes>
    </main>
  );
};

export default Layout;
