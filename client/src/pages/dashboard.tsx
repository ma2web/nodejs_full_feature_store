import { FC } from "react";
import Dashboard from "domains/Dashboard";

const DashboardPage: FC = () => {
  return <Dashboard />;
};

(DashboardPage as any).Layout = true;

export default DashboardPage;
