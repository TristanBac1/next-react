function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div>{users}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
      <div>{login}</div>
    </>
  ) : (
    login
  );
}

export default DashboardLayout;
