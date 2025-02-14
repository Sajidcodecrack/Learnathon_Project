import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Badge } from "../../../components/ui/badge"

const orders = [
  { id: "ORD001", date: "2023-05-01", total: "$125.00", status: "Delivered" },
  { id: "ORD002", date: "2023-05-15", total: "$79.99", status: "Processing" },
  { id: "ORD003", date: "2023-05-22", total: "$249.50", status: "Shipped" },
  { id: "ORD004", date: "2023-06-01", total: "$99.00", status: "Delivered" },
  { id: "ORD005", date: "2023-06-10", total: "$189.99", status: "Processing" },
]

const OrderStatus = ({ status }) => {
  const statusStyles = {
    Delivered: "bg-green-100 text-green-800",
    Processing: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-blue-100 text-blue-800",
  }

  return <Badge className={statusStyles[status] || "bg-gray-100 text-gray-800"}>{status}</Badge>
}

const RecentOrders = ({ fullList = false }) => {
  const displayOrders = fullList ? orders : orders.slice(0, 3)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>You have {orders.length} total orders</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <OrderStatus status={order.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RecentOrders

