import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { PlusCircle } from "lucide-react"

const addresses = [
  {
    id: 1,
    name: "Home",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
  },
  {
    id: 2,
    name: "Work",
    street: "456 Office Blvd",
    city: "Workville",
    state: "NY",
    zip: "67890",
    country: "USA",
  },
  {
    id: 3,
    name: "Vacation Home",
    street: "789 Beach Rd",
    city: "Sunnyville",
    state: "FL",
    zip: "54321",
    country: "USA",
  },
]

const AddressCard = ({ address }) => (
  <Card>
    <CardHeader>
      <CardTitle>{address.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{address.street}</p>
      <p>
        {address.city}, {address.state} {address.zip}
      </p>
      <p>{address.country}</p>
      <div className="mt-4 space-x-2">
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="outline" size="sm">
          Delete
        </Button>
      </div>
    </CardContent>
  </Card>
)

const AddNewAddressCard = () => (
  <Card className="flex flex-col items-center justify-center h-full">
    <CardContent className="text-center">
      <PlusCircle className="h-12 w-12 text-muted-foreground mb-4" />
      <Button>Add New Address</Button>
    </CardContent>
  </Card>
)

const SavedAddresses = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Addresses</CardTitle>
        <CardDescription>Manage your saved addresses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {addresses.map((address) => (
            <AddressCard key={address.id} address={address} />
          ))}
          <AddNewAddressCard />
        </div>
      </CardContent>
    </Card>
  )
}

export default SavedAddresses

