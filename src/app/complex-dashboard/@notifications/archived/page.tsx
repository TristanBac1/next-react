import Card from "@/components/card";
import Link from "next/link";

function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}

export default Notifications;
